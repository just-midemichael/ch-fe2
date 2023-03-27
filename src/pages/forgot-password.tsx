import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Main from "@/layout/main/Main";
import type { FormEvent } from "react";

export default function ForgotPassword() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Main>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ width: "550px" }}>
            <Input label="Email" name="login " />
          </div>

          <Button
            style={{ width: "550px", marginTop: "2rem" }}
            type="submit"
            color="primary"
            size="lg"
          >
            Send Code
          </Button>
        </form>
        <h2 className="mt-4">Already have an account? Sign in</h2>
      </div>
    </Main>
  );
}
