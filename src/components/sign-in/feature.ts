import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import { validationSchema, SignInSchemaType } from "@/models/validation/sign-in";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import {
  getPasswordStrength,
  STRENGTH_LABELS,
  STRENGTH_COLORS,
} from "./customs/strength-bar/constants";

const INITIAL_VALUES: SignInSchemaType = { email: "", password: "" };

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  "auth/user-not-found": "이메일을 확인해주세요.",
  "auth/wrong-password": "비밀번호를 확인해주세요.",
  "auth/network-request-failed": "인터넷 연결을 확인해주세요.",
  "auth/invalid-credential": "이메일 또는 비밀번호가 잘못 입력되었습니다.",
};

const DEFAULT_ERROR_MESSAGE = "이메일 또는 비밀번호가 잘못 입력되었습니다";

const verifyAdminRole = async (email: string) => {
    const userDoc = await getDoc(doc(db, "users", email));
  return userDoc.data()?.auth === 1;
};

export const useSignInFeature = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<SignInSchemaType>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const isAdmin = await verifyAdminRole(user.email || "");

        if (isAdmin) {
          toast.success("환영합니다!" + values.email);
        } else {
          toast.error("관리자 권한이 없습니다.");
        }
      } catch (error) {
        const code = (error as AuthError).code;
        toast.error(AUTH_ERROR_MESSAGES[code] ?? DEFAULT_ERROR_MESSAGE);
        formik.setFieldValue("password", "");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const passwordStrength = getPasswordStrength(formik.values.password);

  return {
    formik,
    showPassword,
    toggleShowPassword: () => setShowPassword((p) => !p),
    isLoading,
    passwordStrength,
    strengthLabel: formik.values.password
      ? (STRENGTH_LABELS[passwordStrength - 1] ?? "")
      : "",
    strengthColors: STRENGTH_COLORS,
  };
};
