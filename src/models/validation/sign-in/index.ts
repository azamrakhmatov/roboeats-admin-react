import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("올바른 이메일 형식을 입력해주세요")
    .required("이메일을 입력해주세요"),
  password: Yup.string()
    .required("비밀번호를 입력해주세요")
    .min(6, "비밀번호는 6자 이상이어야 합니다"),
});

export type SignInSchemaType = Yup.InferType<typeof validationSchema>;