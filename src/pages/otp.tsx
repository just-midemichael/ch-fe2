import { useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/shared/button/Button";
import Main from "@/layout/main/Main";
import OtpInput from "react-otp-input";

export default function Otp() {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => setOtp(value);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const inputStyle = {
    width: "75px",
    height: "60px",
    fontSize: "2rem",
    margin: "0 0.25rem",
    border: "1px solid #dddddd",
    outline: "none",
    marginTop: "3rem",
    transition: "border-color 0.2s ease-in-out"
  };

  const focusInputStyle = {
    ...inputStyle,
    borderColor: "#fe8501"
  };

  return (
    <Main>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl">Forgot Password</h2>
        <h2 className="mt-6">OTP Code</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span className="w-auto"></span>}
              inputStyle={inputStyle}
              focusStyle={focusInputStyle}
              isInputNum
              shouldAutoFocus
            />
          </div>

          <Button
            className="mt-8 w-[550px]"
            type="submit"
            color="primary"
            size="lg"
          >
            Confirm
          </Button>
        </form>
        <h2 className="mt-4">Already have an account? Sign in</h2>
      </div>
    </Main>
  );
}
