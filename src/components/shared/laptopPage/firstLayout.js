import React from "react";
import { Box, Input, Text, Select } from "@chakra-ui/react";
function FirstLayout({ formik }) {
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
            color={formik.touched.name && formik.errors.name && "#E52F2F"}
          >
            ლეპტოპის სახელი
          </Text>
          <Input
            type="text"
            placeholder="HP"
            width={["100%", "400px,"]}
            outlineColor={
              formik.touched.name && formik.errors.name ? "#E52F2F" : "#98c7e6"
            }
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={formik.touched.name && formik.errors.name && "#E52F2F"}
          >
            {formik.errors.name
              ? formik.errors.name
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
            name="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            focusBorderColor={
              formik.touched.brand && formik.errors.brand
                ? "#E52F2F"
                : "#98c7e6"
            }
            borderColor={
              formik.touched.brand && formik.errors.brand
                ? "#E52F2F"
                : "#98c7e6"
            }
          >
            <option value="Apple">Apple</option>
            <option value="HP">HP</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Dell">Dell</option>
            <option value="Acer">Acer</option>
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
