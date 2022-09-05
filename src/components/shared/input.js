import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
function CustomInput({ formlabel, inputname, placeholder, type, helperText }) {
  const formik = useFormikContext();
  return (
    <FormControl>
      <FormLabel
        fontWeight="500"
        fontSize="18px"
        color={
          formik.errors[inputname] && formik.touched[inputname] && "#E52F2F"
        }
      >
        {formlabel}
      </FormLabel>
      <Input
        value={formik.values[inputname]}
        type={type}
        name={inputname}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        w={["100%", type === "text" ? "370px" : "100%"]}
        outlineColor={
          formik.touched[inputname] && formik.errors[inputname]
            ? "#E52F2F"
            : "#98c7e6"
        }
        borderColor={"transparent"}
        focusBorderColor="transparent"
        my="5px"
      />

      <FormHelperText
        color={
          formik.errors[inputname] && formik.touched[inputname] && "#E52F2F"
        }
      >
        {formik.errors[inputname] ? formik.errors[inputname] : helperText}
      </FormHelperText>
    </FormControl>
  );
}

export default CustomInput;
