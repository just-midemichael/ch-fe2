import Button from "@/components/shared/button/Button";
import { H4 } from "@/components/shared/headings/Headings";
import Input from "@/components/shared/input/Input";

const Password = () => {
  return (
    <div className="max-w-[984px] rounded-md border border-[#F3F4F6] bg-white py-6 shadow">
      <H4 className="px-6">Change Password</H4>
      <hr className="my-4" />
      <div className="px-6">
        <div className="mb-4 w-full">
          <Input type="password" label="Current Password" name="password" />
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className=" w-full md:w-1/2">
            <Input type="password" label="New Password" name="newPpasswword" />
          </div>

          <div className="w-full md:w-1/2">
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPasswword"
            />
          </div>
        </div>
        <div className="text-right">
          <Button className="" type="submit" color="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Password;
