import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("invalid email format")
  .required("Provide your email address");

export const passwordValidation = Yup.string()
  .min(8)
  .max(15)
  .required("Password is required")
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#\-?&])[A-Za-z\d@$!%*#?&.]/,
    "Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (@$!%*#-?&)"
  );

export const phoneNumberValidation = Yup.number()
  .min(11, "Phone should not be less than 11 digits")
  .required("Phone number is required")
  .typeError("Phone number is not valid");

export const alphabetValidation = Yup.string()
  .trim()
  .required("This field is required")
  .matches(/^[A-Z][a-z]+$/i, "Only alphabets are allowed here");

// Validation schema for sign up form
export const signUpSchema = Yup.object({
  Firstname: Yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name should contain only alphabets"),
  Lastname: Yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z]+$/, "Last name should contain only alphabets"),
  accept: Yup.bool()
    .oneOf([true], "Accept Terms & Conditions is required")
    .required("Accept Terms & Conditions is required"),
  Email: emailValidation,
  Password: passwordValidation,
  Telephone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number should contain 10 digits"),
  Password_Confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required")
});

// Validation schema for login form
export const loginSchema = Yup.object({
  LoginId: emailValidation,
  Password: passwordValidation
});
