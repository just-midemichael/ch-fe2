import { useEffect, useState, useRef } from "react";
import type { ChangeEvent } from "react";
import Hero from "@/components/home/hero/Hero";
import City from "@/components/shared/cityCard/City";
import Featured from "@/components/shared/featuredCard/Featured";
import Hotel from "@/components/shared/hotelCard/Hotel";
import AmountInput from "@/components/shared/amountInput/AmountInput";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import Meta from "@/components/shared/meta/Meta";
import SearchInput from "@/components/shared/searchInput/SearchInput";
import Main from "@/layout/main/Main";
import Input from "@/components/shared/input/Input";
import RegisterHotelComponent from "@/components/home/register-hotel/RegisterHotel";
import { toast } from "react-hot-toast";
import { toastIcons } from "@/utils/constants";
import ToastWrapper from "@/components/shared/toast/Toast";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _preventDoubleUseEffect = useRef(true);

  // Unlike in production, useEffect calls twice in development.
  // If the conditional statement is removed, you will get 6 toasts.
  // This conditional statement isn't need in production, and will be removed later.
  // The three different toasts are used here for reference purpose

  useEffect(() => {
    if (_preventDoubleUseEffect.current) {
      toast.success((t) => <ToastWrapper message="Welcome" t={t} />, {
        icon: toastIcons.success
      });

      toast.error(
        (t) => <ToastWrapper message="Something went wrong" t={t} />,
        {
          icon: toastIcons.error
        }
      );

      toast((t) => <ToastWrapper message="Please provide a PIN" t={t} />, {
        icon: toastIcons.warning
      });
    }

    return () => {
      _preventDoubleUseEffect.current = false;
    };
  }, []);

  const options = [
    {
      label: "Motel",
      value: ""
    },
    {
      label: "Boy",
      value: "boy"
    },
    {
      label: "Girl",
      value: "girl"
    }
  ];

  const [dropdownValue, setDropdownValue] = useState("");
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };

  const [checkboxes, setCheckboxes] = useState({
    Hotel: false,
    City: false
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };

  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <Hero />
        <div className="flex items-center gap-6 overflow-x-auto">
          <Hotel featured={true} info={true} favourite={false} />
          <Hotel featured={true} info={false} favourite={true} />
          <Hotel featured={false} info={true} favourite={true} />
          <Featured featured={true} />
          <City />
        </div>
        <div className="py-5">
          <SearchInput placeholder="Search" />
        </div>
        <div className="py-5">
          <Input
            label="Username"
            name="username"
            placeholder="Enter Your Username"
            className="rounded-lg"
          />
          <Input
            type="password"
            label="Password"
            name="username"
            className="rounded-lg"
          />
        </div>
        <div className="py-5">
          <Checkbox
            label="Hotel"
            value={checkboxes.Hotel}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="City"
            value={checkboxes.City}
            onChange={handleCheckboxChange}
          />
          <AmountInput placeholder="$ min" />
        </div>
        <div className="py-4">
          <div>
            <Dropdown
              options={options}
              onChange={handleDropdownChange}
              dropdownValue={dropdownValue}
            />
          </div>
        </div>
        <RegisterHotelComponent />
      </Main>
    </>
  );
}
