import type { FormEvent } from "react";
import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Main from "@/layout/main/Main";
import Navbar from "@/components/shared/navbar/Navbar";

export default function HotelRegInfo() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Main>
      <Navbar />
      <div className="mt-[80px] flex flex-col items-center justify-center">
        <h1 className="text-2xl">Registrar Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-50 mt-10">
            <Input label="Role" name="role" />
            <Input label="First And Last Name" name="name" />
            <Input label="Email Address" name="email" />
          </div>

          <Button
            className="mt-10 w-[550px]"
            type="submit"
            color="primary"
            size="lg"
          >
            Next
          </Button>
        </form>
      </div>
    </Main>
  );
}
