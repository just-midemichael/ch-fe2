import Button from "@/components/shared/button/Button";
import Select from "react-select";
import Input from "@/components/shared/input/Input";

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
    <div className="w-full">
      <h1 className="ml-10 font-bold">Billing Address</h1>
      <hr className="mt-8 w-[850px]" />
      <div className="mt-8 flex flex-wrap gap-8">
        <Input label="First Name" className="w-64" />
        <Input label="Last Name" className="w-64" />
        <Input label="Company Name" className="w-64" />
      </div>
      <div className="w-[840px]">
        <Input label="Street Address" />
      </div>
      <div className="mt-8 flex flex-wrap gap-8">
        <div className="mt-5">
          <h1 className="text-lg font-medium">Country</h1>
          <Select
            className="mt-2 h-2.5 w-64 bg-transparent focus:outline-none"
            options={locationOptions}
            placeholder="All Cities"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-lg font-medium">States</h1>
          <Select
            className="mt-2 w-64 bg-transparent focus:outline-none"
            options={locationOptions}
            placeholder="All Cities"
          />
        </div>
        <Input label="Zip Code" className="w-64" />
      </div>
      <div className="mt-8 flex flex-wrap gap-10">
        <Input label="Email" className="w-[25rem]" />
        <Input label="Phone" className="w-[25rem]" />
      </div>
      <div className="w-40"></div>
      <Button
        className="ml-10 mt-8 w-72"
        type="submit"
        color="primary"
        size="lg"
      >
        Save Changes
      </Button>
    </div>
  );
};

export default Billing;
