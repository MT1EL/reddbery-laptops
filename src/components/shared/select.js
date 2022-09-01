import React from "react";
import { Select } from "@chakra-ui/react";
function CustomSelect({ name, placeholder, formik, data, w }) {
  return (
    <Select
      variant="filled"
      placeholder={placeholder}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      my="4"
      focusBorderColor={
        formik.touched[name] && formik.errors[name] ? "#E52F2F" : "#98c7e6"
      }
      borderColor={
        formik.touched[name] && formik.errors[name] ? "#E52F2F" : "#98c7e6"
      }
      width={w && w}
    >
      {data?.data?.map(
        (option) =>
          formik.values.team &&
          option.team_id === JSON.parse(formik.values.team).id && (
            <option key={option.id} value={Number(option.id)}>
              {option.name}
            </option>
          )
      )}
    </Select>
  );
}

export default CustomSelect;
