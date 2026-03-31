import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useSignInFeature } from "./feature";
import StrengthBar from "./customs/strength-bar";
import Loading from "./loading";

const LOGO_URL =
  "https://play-lh.googleusercontent.com/4jX45qgQ3-roB3rstqPVzfiZYM01LGsX9MkveuIvGd0bk-6Cs2EBJi3tswKJsj-8Sw";

const SignIn = () => {
  const {
    formik,
    showPassword,
    toggleShowPassword,
    isLoading,
    passwordStrength,
    strengthLabel,
    strengthColors,
  } = useSignInFeature();


  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE8]">
      <main className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-[400px]">
          <div className="bg-white border border-[#000]/[0.07] rounded-[12px] px-9 py-16 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-[72px] h-[72px] rounded-[20px] overflow-hidden mx-auto mb-4 bg-[#F5A623]">
                <img
                  src={LOGO_URL}
                  alt="GAEMI"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-4 text-xl font-semibold text-[#111827] mb-1">
                관리자 로그인
              </h1>
              <p className="text-sm text-[#6B7280] font-normal">
                GAEMI 배송 관리 시스템에 오신걸 환영합니다
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              noValidate
              className="space-y-2"
            >
              {/* Email */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-xs font-normal text-[#6B7280]"
                >
                  이메일
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@gaemi.com"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={cn(
                      "pl-9 h-[46px] bg-[#F7F4F0] border-black/10",
                      formik.touched.email &&
                        formik.errors.email &&
                        "border-red-500 focus-visible:border-red-500",
                    )}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-red-500">{formik.errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-xs font-normal text-[#6B7280]"
                >
                  비밀번호
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={cn(
                      "pl-9 pr-10 h-[46px] bg-[#F7F4F0] border-black/10",
                      formik.touched.password &&
                        formik.errors.password &&
                        "border-red-500 focus-visible:border-red-500",
                    )}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    tabIndex={-1}
                    aria-label={
                      showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {formik.values.password && (
                  <StrengthBar
                    score={passwordStrength}
                    colors={strengthColors}
                    label={strengthLabel}
                  />
                )}

                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-[#6B7280] cursor-pointer select-none">
                  <Checkbox
                    id="remember"
                    className="w-[14px] h-[14px] data-[state=checked]:bg-[#F5A623] data-[state=checked]:border-[#F5A623]"
                  />
                  로그인 유지
                </label>
                <button
                  type="button"
                  className="text-xs text-[#6B7280] underline underline-offset-2 hover:text-gray-600 transition-colors"
                >
                  비밀번호 찾기
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[48px] mt-2 rounded-[10px] bg-[#F5A623] hover:bg-[#e8960e] active:bg-[#d4870b] text-white font-medium text-[15px] transition-colors disabled:opacity-65 disabled:cursor-not-allowed"
              >
                {isLoading ? "로그인 중..." : "로그인하기"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="text-center pb-5 text-xs text-gray-400">
        GAEMI Delivery Admin v2.1&nbsp;·&nbsp;관리자 전용&nbsp;·&nbsp;© 2026
      </div>
    </div>
  );
};

export default SignIn;
