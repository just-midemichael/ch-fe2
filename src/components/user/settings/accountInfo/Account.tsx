import Button from "@/components/shared/button/Button";
import { H4, Label } from "@/components/shared/headings/Headings";
import Input from "@/components/shared/input/Input";

const Account = () => {
  return (
    <div className="max-w-[984px] rounded-md border border-[#F3F4F6] bg-white py-6 shadow ">
      <H4 className="px-6">Account Settings</H4>
      <hr className="my-4" />
      <div className="flex flex-col px-6 md:flex-row">
        <div className="order-2 basis-3/5 md:order-1">
          <div className="mt-5 flex w-full flex-col gap-4 md:mt-0">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email" />
            <Input label="Phone" />
          </div>
          <div className="my-4 text-center md:text-right">
            <Button type="submit" color="primary" size="lg">
              Save Changes
            </Button>
          </div>
        </div>

        <div className="order-1 basis-2/5 text-center md:order-2 md:ml-24">
          <div className=" mx-auto mt-8 h-52 w-52 rounded-full  bg-gray-400"></div>
          <div className="mt-5 md:ml-0">
            <Button type="button" color="media" size="lg" outline>
              <Label htmlFor="imageUpload">Choose Image</Label>
              <input id="imageUpload" type="file" className="hidden" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
