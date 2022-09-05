import React from "react";
import { Select } from "@chakra-ui/react";
import { useFormikContext } from "formik";
function CustomSelect({ name, placeholder, data, w }) {
  const formik = useFormikContext();
  return (
    <Select
      variant={"filled"}
      name={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      my="4"
      focusBorderColor={
        formik.touched[name] && formik.errors[name] && "#E52F2F"
      }
      borderColor={formik.touched[name] && formik.errors[name] && "#E52F2F"}
      width={w && w}
    >
      {data?.data?.length !== 5
        ? data?.data?.map(
            (option) =>
              formik.values.team &&
              option.team_id === JSON.parse(formik.values.team).id && (
                <option key={option.id} value={JSON.stringify(option)}>
                  {option.name}
                </option>
              )
          )
        : data?.data?.map((option) => (
            <option key={option.id} value={JSON.stringify(option)}>
              {option.name}
            </option>
          ))}
    </Select>
  );
}

export default CustomSelect;
