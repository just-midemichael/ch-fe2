import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";

const Password = () => {
  return (
    <div className="ml-[50px] max-w-screen-md">
      <h1 className="mb-2 mt-8">Change Password</h1>
      <hr className="my-4" />
      <div>
        <div className="mb-2 w-full">
          <Input type="password" label="Current Password" name="password" />
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mb-2 w-full md:w-1/2">
            <Input type="password" label="New Password" name="newPpasswword" />
          </div>

          <div className="mb-2 w-full md:w-1/2">
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPasswword"
            />
          </div>
        </div>

        <Button
          className="mt-8 w-[260px]"
          type="submit"
          color="primary"
          size="lg"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Password;
