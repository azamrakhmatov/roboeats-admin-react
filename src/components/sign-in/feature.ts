import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { validationSchema, SignInSchemaType } from "@/models/validation/sign-in";

const INITIAL_VALUES: SignInSchemaType = { email: "", password: "" };

export const useSignInFeature = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<SignInSchemaType>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
       
        await new Promise((r) => setTimeout(r, 1400));
        toast.success("환영합니다!" + values.email);
        navigate("/");
      } catch {
        toast.error("이메일 또는 비밀번호를 확인해주세요.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const getPasswordStrength = (pw: string): number => {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  };

  const passwordStrength = getPasswordStrength(formik.values.password);
  const strengthLabels = ["약함", "보통", "강함", "매우 강함"];
  const strengthColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-orange-400",
    "bg-emerald-500",
  ];

  return {
    formik,
    showPassword,
    toggleShowPassword: () => setShowPassword((p) => !p),
    isLoading,
    passwordStrength,
    strengthLabel: formik.values.password
      ? (strengthLabels[passwordStrength - 1] ?? "")
      : "",
    strengthColors,
  };
};