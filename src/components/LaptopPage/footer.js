import React from "react";

import {
  Box,
  Input,
  Text,
  Flex,
  RadioGroup,
  Radio,
  Img,
} from "@chakra-ui/react";

import error from "../../assets/errorIcon.png";
import { useFormikContext } from "formik";

function Footer() {
  const formik = useFormikContext();
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
        <Box width={["100%", "370px"]}>
          <Text fontWeight="500" fontSize="18px">
            შეძენის რიცხვი (არჩევითი)
          </Text>
          <Input
            type="date"
            width={["100%", "370px,"]}
            outlineColor={"#98c7e6"}
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="laptop_purchase_date"
            id="laptop_purchase_date"
            value={formik.values.laptop_purchase_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box width={["100%", "370px"]}>
          <Text
            fontWeight="500"
            fontSize="18px"
            color={
              formik.touched.laptop_price &&
              formik.errors.laptop_price &&
              "#E52F2F"
            }
          >
            ლეპტოპის ფასი
          </Text>
          <Input
            type="number"
            placeholder="0000"
            width={["100%", "370px,"]}
            outlineColor={"#98c7e6"}
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="laptop_price"
            id="laptop_price"
            value={formik.values.laptop_price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={
              formik.touched.laptop_price &&
              formik.errors.laptop_price &&
              "#E52F2F"
            }
          >
            {formik.errors.laptop_price
              ? formik.errors.laptop_price
              : "მხოლოდ რიცხვები"}
          </Text>
        </Box>
      </Box>
      <Box mx="auto" width={["100%", "90%"]}>
        <Box
          display="flex"
          flexDirection="column"
          w={["min(100%, 280px)", "280px"]}
          mt={["4", "0"]}
        >
          <Flex justifyContent={"space-between"} alignItems="center">
            <Text
              fontWeight="500"
              fontSize="18px"
              color={
                formik.errors.laptop_state &&
                formik.touched.laptop_state &&
                "#E52F2F"
              }
            >
              ლეპტოპის მდგომარეობა
            </Text>
            <Img
              height="21px"
              width="23px"
              src={error}
              alt="error"
              display={
                formik.errors.laptop_state && formik.touched.laptop_state
                  ? "block"
                  : "none"
              }
            />
          </Flex>

          <Flex
            h="50px"
            mb="20px"
            alignItems="center"
            alignSelf="flex-start"
            w="100%"
          >
            <RadioGroup
              w="100%"
              name="laptop_state"
              value={formik.values.laptop_state}
              onBlur={formik.handleBlur}
            >
              <Box display="flex" justifyContent="space-between">
                <Radio
                  value="new"
                  name="laptop_state"
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      laptop_state: e.target.value,
                    });
                  }}
                >
                  ახალი
                </Radio>
                <Radio
                  value="used"
                  justifySelf="flex-end"
                  name="laptop_state"
                  onChange={(e) => {
                    formik.setValues({
                      ...formik.values,
                      laptop_state: e.target.value,
                    });
                  }}
                >
                  მოერადი
                </Radio>
              </Box>
            </RadioGroup>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
