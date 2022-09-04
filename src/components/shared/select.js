import React from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
function CustomSelect({ name, placeholder, formik, data, w }) {
  const dispatch = useDispatch();
  return (
    <Select
      variant={"filled"}
      name="position"
      placeholder={placeholder}
      value={formik.values.position}
      onChange={(e) => {
        formik.handleChange(e);
        dispatch({
          type: "POSTUSER",
          payload: {
            user: {
              ...formik.values,
              position: e.target.value,
            },
          },
        });
      }}
      onBlur={formik.handleBlur}
      my="4"
      focusBorderColor={
        formik.touched[name] && formik.errors[name] && "#E52F2F"
      }
      borderColor={formik.touched[name] && formik.errors[name] && "#E52F2F"}
      width={w && w}
    >
      {data?.data?.map(
        (option) =>
          formik.values.team &&
          option.team_id === JSON.parse(formik.values.team).id && (
            <option key={option.id} value={JSON.stringify(option)}>
              {option.name}
            </option>
          )
      )}
    </Select>
  );
}

export default CustomSelect;
