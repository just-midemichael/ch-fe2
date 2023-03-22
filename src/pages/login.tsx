import { useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/shared/button/Button";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import Input from "@/components/shared/input/Input";
import Main from "@/layout/main/Main";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe((prev) => !prev);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ width: "550px" }}>
            <Input label="Username" name="login " />
            <Input type="password" label="Password" name="username" />
          </div>
          <div className="flex justify-between gap-56">
            <Checkbox
              label="Remember Me"
              value={rememberMe}
              onChange={handleCheckboxChange}
            />
            <h2>Forgot Your Password?</h2>
          </div>
          <Button
            style={{ width: "550px", marginTop: "2rem" }}
            type="submit"
            color="primary"
            size="lg"
          >
            Login
          </Button>
        </form>
        <h2 className="mt-4">Don&apos;t have an account? Sign up</h2>

        <svg
          className="mt-2"
          width="550"
          height="1"
          viewBox="0 0 550 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="550" height="1" rx="0.5" fill="#ECEDF2" />
        </svg>
        <h2 className="mt-2">or</h2>
        <div className="mt-5 flex gap-8">
          <Button
            style={{ width: "260px" }}
            type="button"
            color="neutral"
            size="lg"
          >
            <h2 className="flex items-center">
              <FaFacebookF className="mr-2" />
              Login via Facebook
            </h2>
          </Button>
          <Button
            style={{ width: "260px" }}
            type="button"
            color="danger"
            size="lg"
          >
            <h2 className="flex items-center">
              <AiOutlineGoogle className="mr-2" />
              Login via Google
            </h2>
          </Button>
        </div>
      </div>
    </Main>
  );
}
