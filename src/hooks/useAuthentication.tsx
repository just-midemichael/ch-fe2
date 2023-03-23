import { useEffect } from "react";
import { useFormik } from "formik";
import type { RegisterPayload } from "@/services/auth/payload";
import { loginSchema, signUpSchema } from "@/utils/formSchema";

type FormikValues = RegisterPayload & { Accept: boolean };

function useAuthentication(isLoginScreen: boolean) {
  const formik = useFormik<FormikValues>({
    initialValues: {
      Firstname: "",
      Lastname: "",
      Email: "",
      Telephone: "",
      Password_Confirmation: "",
      Password: "",
      Accept: false // For signUp, this is the value of accept t&C and for Login this is for "Remember me"
    },
    onSubmit(values) {
      console.log(values);
      // Depending on whether this is a login or sign-up screen, call the appropriate function to authenticate the user
      // if (isLoginScreen) {
      // loginUser(values);
      // } else {
      // registerUser(values);
      // }
    },

    // switch validation schema based on current view
    validationSchema: isLoginScreen ? loginSchema : signUpSchema,
    validateOnBlur: false,
    validateOnChange: false
  });

  // Reset the form when user switches state ie from login to sign up or vice-versa
  useEffect(() => {
    formik.resetForm();
  }, [isLoginScreen]);

  return [formik] as const;
}

export default useAuthentication;
