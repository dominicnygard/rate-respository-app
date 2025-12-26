import { Pressable, TextInput, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "../../Text";
import theme from "../../../theme";
import useSignIn from "../../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import useSignUp from "../../../hooks/useSignUp";

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
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username can not be shorter than 5 characters")
    .max(30, "Username can not be longer than 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password can not be shorter than 5 characters")
    .max(50, "Password can not be longer than 50 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data: signUpData } = await signUp({ username, password });
      const signUpUsername = signUpData.createUser.username;
      const { data } = await signIn({ username: signUpUsername, password });
      console.log(data);
      navigate("/");
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
          formik.touched.username &&
            formik.errors.username && { borderColor: theme.colors.errorColor },
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password && { borderColor: theme.colors.errorColor },
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.password}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.passwordConfirm &&
            formik.errors.passwordConfirm && {
              borderColor: theme.colors.errorColor,
            },
        ]}
        placeholder="Confirm password"
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange("passwordConfirm")}
        secureTextEntry
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={{ color: theme.colors.errorColor, marginTop: -10 }}>
          {formik.errors.passwordConfirm}
        </Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="textThird" fontWeight="bold">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
