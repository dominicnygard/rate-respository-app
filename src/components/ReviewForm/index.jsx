import { Pressable, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "../Text";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.textThird,
    color: theme.colors.textPrimary,
    borderRadius: 6,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating can not be under 0")
    .max(100, "Rating can not be over 100"),
  text: yup.string().optional(),
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const ReviewForm = () => {
  const [create] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;
    try {
      const { data } = await create({
        ownerName,
        rating,
        repositoryName,
        text,
      });
      console.log(data);
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.card}>
      <TextInput
        style={[
          styles.input,
          formik.touched.ownerName &&
            formik.errors.ownerName && { borderColor: theme.colors.errorColor },
        ]}
        placeholder="Repository owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.ownerName}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.repositoryName &&
            formik.errors.repositoryName && {
              borderColor: theme.colors.errorColor,
            },
        ]}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.repositoryName}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.rating &&
            formik.errors.rating && {
              borderColor: theme.colors.errorColor,
            },
        ]}
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.rating}
        </Text>
      )}
      <TextInput
        style={[styles.input, formik.touched.text]}
        placeholder="Review"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        multiline
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="textThird" fontWeight="bold">
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
