import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#525353",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#525353",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#525353" : "#525353",
    color: "#fff",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
};

const SelectBox = ({ options, name }) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        name={name}
        options={options}
        styles={customStyles}
      />
    </>
  );
};

export default SelectBox;
