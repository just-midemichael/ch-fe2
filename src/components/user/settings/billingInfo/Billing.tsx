import Button from "@/components/shared/button/Button";
import Select from "react-select";
import Input from "@/components/shared/input/Input";
import { H4, Label } from "@/components/shared/headings/Headings";

const Billing = () => {
  const locationOptions = [
    {
      label: "All cities",
      value: "cities"
    },
    {
      label: "Hotel",
      value: "hotel"
    },
    {
      label: "Motel",
      value: "motel"
    }
  ];

  return (
    <div className="max-w-[984px] rounded-md border border-[#F3F4F6] bg-white py-6 shadow">
      <H4 className="px-6 font-bold">Billing Address</H4>
      <hr className="my-5 w-full" />
      <div className="px-6">
        <div className="mb-4 flex  flex-col justify-between gap-2  lg:flex-row">
          <Input label="First name" className="lg:w-[302px]" />
          <Input label="Last name" className="lg:w-[302px]" />
          <Input label="Company name" className="lg:w-[302px]" />
        </div>
        <div className="mb-4 w-full">
          <Input label="Street Address" />
        </div>
        <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row">
          <div className="mt-5">
            <Label className="text-lg font-medium">Country / Region</Label>
            <Select
              className="mt-2 h-2.5 bg-transparent  focus:outline-none lg:w-[302px]"
              options={locationOptions}
              placeholder="All Cities"
            />
          </div>
          <div className="mt-5">
            <Label className="text-lg font-medium">States</Label>
            <Select
              className="mt-2 bg-transparent focus:outline-none lg:w-[302px]"
              options={locationOptions}
              placeholder="All Cities"
            />
          </div>
          <Input label="Zip Code" className="lg:w-[302px] " />
        </div>
        <div className="justify-betwee mb-4 flex w-full flex-col gap-2 lg:flex-row">
          <Input label="Email" className=" lg:w-[460px]" />
          <Input label="Phone" className=" lg:w-[460px]" />
        </div>
        <div className="w-full text-right">
          <Button className="" type="submit" color="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
