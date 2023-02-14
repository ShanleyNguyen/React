import dayjs, { UnitType } from "dayjs";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "reduxHook";
import { handleLogin, handleRegister } from "store/auth/authSlice";
import { useContext } from "react";
import { NotificationContext } from "config/context/Notification";

export interface IValuesTypes {
  typeSubmit?: string;
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  password: string;
  user_type: string;
  school_name?: string;
  date_of_birth: string;
}

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  user_name: "",
  password: "",
  user_type: "Student",
  school_name: "",
  date_of_birth: "",
  typeSubmit: "signin",
};

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("This field is required")
    .max(10, "Your first name cannot exceed 10 characters."),
  last_name: yup
    .string()
    .required("This field is required")
    .max(10, "Your last name cannot exceed 10 characters."),
  user_name: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
  date_of_birth: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Enter valid email"),
});

export const useAuthFormik = () => {
  const dispatch = useAppDispatch();
  const { notification } = useContext(NotificationContext);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (values.typeSubmit === "signin") {
        const { payload } = await dispatch(
          handleLogin({
            username: values.user_name,
            password: values.password,
          })
        );
        if (!payload) {
          notification("error", "Login failed. Recheck username and password!");
        }
      } else if (values.typeSubmit === "signup") {
        const { payload } = await dispatch(
          handleRegister({
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            date_of_birth: values.date_of_birth,
            ...(values.user_type !== "Student" && {
              school_name: values.school_name,
            }),
            user_type: values.user_type,
            user_name: values.user_name,
            password: values.password,
          })
        );
        if (!payload) {
          notification(
            "error",
            "Register failed. This infomation already exist!"
          );
        }
      }
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return {
    formik,
    initialValues,
    handleSubmit,
  };
};
