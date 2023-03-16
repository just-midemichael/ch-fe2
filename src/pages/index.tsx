import { useState } from "react";
import type { ChangeEvent } from "react";
import Hero from "@/components/home/hero/Hero";
import City from "@/components/shared/City Card/City";
import Featured from "@/components/shared/Featured Card/Featured";
import Hotel from "@/components/shared/Hotel Card/Hotel";
import AmountInput from "@/components/shared/amountInput/amountInput";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import Dropdown from "@/components/shared/dropdown/Dropdowns";
import Meta from "@/components/shared/meta/Meta";
import SearchInput from "@/components/shared/searchInput/searchInput";
import InputText from "@/components/shared/textInput/inputText";
import Main from "@/layout/main/Main";

export default function Home() {
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
        <div>
          <Hero />
          <div className="flex items-center gap-6">
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
            <InputText
              label="Username"
              name="username"
              placeholder="Enter Your Username"
            />
            <InputText type="password" label="Password" name="username" />
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
        </div>
      </Main>
    </>
  );
}
