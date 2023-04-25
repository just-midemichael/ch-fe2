import type { FormEvent } from "react";
import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Main from "@/layout/main/Main";
import Navbar from "@/components/shared/navbar/Navbar";
import { H4 } from "@/components/shared/headings/Headings";

export default function HotelRegInfo() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <Main>
        <div className="mt-[180px] flex flex-col items-center justify-center px-3">
          <H4 className="text-2xl">Registrar Information</H4>
          <form onSubmit={handleSubmit} className="mt-10 w-full md:w-[550px]">
            <Input label="Role" name="role" />
            <Input label="Full Name" name="name" />
            <Input label="Email Address" name="email" />
            <div className="text-right">
              <Button className="mt-10" type="submit" color="primary" size="lg">
                Next
              </Button>
            </div>
          </form>
        </div>
      </Main>
    </>
  );
}
