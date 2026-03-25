import type { TUser } from "../user";

export type SignInForm = {
  email: string;
  password: string;
};

export type AuthSuccessResponse = {
  token: string;
  user: TUser;
};
