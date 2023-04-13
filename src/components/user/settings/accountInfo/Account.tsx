import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";

const Account = () => {
  return (
    <div className="ml-[60px] w-full max-w-screen-md">
      <h1 className="ml-8">Account Settings</h1>
      <hr className="mt-6" />
      <div className="flex flex-col md:flex-row">
        <div className="mb-8 md:mb-0">
          <div className="pl-8 md:w-96">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
            <Input label="Phone" />
          </div>
          <Button
            className="ml-8 mt-8 w-80"
            type="submit"
            color="primary"
            size="lg"
          >
            Save Changes
          </Button>
        </div>

        <div className="md:ml-24">
          <div className="ml-8 mt-8 h-52 w-52 rounded-full bg-gray-400 md:ml-20 md:mt-20"></div>
          <div className="ml-4 mt-3 md:ml-0">
            <Button
              className="ml-8 w-64 md:ml-20"
              type="button"
              color="media"
              size="lg"
            >
              <label htmlFor="imageUpload">
                <h2 className="flex items-center ">Choose Image</h2>
              </label>
              <input id="imageUpload" type="file" className="hidden" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
