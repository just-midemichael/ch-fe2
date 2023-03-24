import { useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Main from "@/layout/main/Main";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Main>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-[550px]">
            <Input
              type="password"
              label="New Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              type="password"
              label="Confirm New Password"
              name="cpasswword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
      </div>
    </Main>
  );
}
