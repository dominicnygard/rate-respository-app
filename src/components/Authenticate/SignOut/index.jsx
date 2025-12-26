import { useNavigate } from "react-router-native";
import useSignOut from "../../../hooks/useSignOut";
import { useEffect } from "react";

const SignOut = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  useEffect(() => {
    const signOutAsync = async () => {
      try {
        await signOut();
        console.log("Succesful sign out");
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    };
    signOutAsync();
  }, []);

  return <></>;
};

export default SignOut;
