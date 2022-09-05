import React, { useEffect, useState } from "react";
import { Box, Input, Text, Select } from "@chakra-ui/react";
import { api } from "../../api";
import { useFormikContext } from "formik";
function FirstLayout() {
  const [brands, setBrands] = useState();
  const formik = useFormikContext();
  useEffect(() => {
    fetch(`${api}/brands`)
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("brands", JSON.stringify(res));
        setBrands(res);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent="space-between"
        w={["100%", "90%"]}
        mx="auto"
        mt="8"
      >
        <Box width={["100%", "400px"]} mx="auto">
          <Text
            fontWeight="500"
            fontSize="18px"
            color={
              formik.touched.laptop_name &&
              formik.errors.laptop_name &&
              "#E52F2F"
            }
          >
            ლეპტოპის სახელი
          </Text>
          <Input
            type="text"
            placeholder="HP"
            width={["100%", "400px,"]}
            outlineColor={
              formik.touched.laptop_name && formik.errors.laptop_name
                ? "#E52F2F"
                : "#98c7e6"
            }
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="laptop_name"
            id="laptop_name"
            value={formik.values.laptop_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={
              formik.touched.laptop_name &&
              formik.errors.laptop_name &&
              "#E52F2F"
            }
          >
            {formik.errors.laptop_name
              ? formik.errors.laptop_name
              : "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "}
          </Text>
        </Box>
        <Box width={["100%", "min(100%, 400px)"]} mx="auto">
          <Select
            h="55px"
            variant="filled"
            placeholder="ლეპტოპის ბრენდი"
            my="4"
            mt="6"
            width={["100%", "min(100%, 400px)"]}
            name="laptop_brand_id"
            value={formik.values.laptop_brand_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            focusBorderColor={
              formik.touched.laptop_brand_id && formik.errors.laptop_brand_id
                ? "#E52F2F"
                : "#98c7e6"
            }
            borderColor={
              formik.touched.laptop_brand_id && formik.errors.laptop_brand_id
                ? "#E52F2F"
                : "#98c7e6"
            }
          >
            {brands?.data.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
      <Box
        w={["100%", "90%"]}
        mx="auto"
        h="2px"
        backgroundColor="#C7C7C7"
        mt="8"
      />
    </>
  );
}

export default FirstLayout;
