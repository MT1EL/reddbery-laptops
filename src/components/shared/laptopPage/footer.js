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

import error from "../../../assets/errorIcon.png";

function Footer({ formik }) {
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
            name="შეძენის რიცხვი"
            id="შეძენის რიცხვი"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box width={["100%", "370px"]}>
          <Text
            fontWeight="500"
            fontSize="18px"
            color={
              formik.touched["ლეპტოპის ფასი"] &&
              formik.errors["ლეპტოპის ფასი"] &&
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
            name="ლეპტოპის ფასი"
            id="ლეპტოპის ფასი"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={
              formik.touched["ლეპტოპის ფასი"] &&
              formik.errors["ლეპტოპის ფასი"] &&
              "#E52F2F"
            }
          >
            {formik.errors["ლეპტოპის ფასი"]
              ? formik.errors["ლეპტოპის ფასი"]
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
                formik.errors["ლეპტოპის მდგომარეობა"] &&
                formik.touched["ლეპტოპის მდგომარეობა"] &&
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
                formik.errors["ლეპტოპის მდგომარეობა"] &&
                formik.touched["ლეპტოპის მდგომარეობა"]
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
              name="ლეპტოპის მდგომარეობა"
              onBlur={formik.handleBlur}
            >
              <Box display="flex" justifyContent="space-between">
                <Radio
                  value="ახალი"
                  name="ლეპტოპის მდგომარეობა"
                  onChange={(e) =>
                    formik.setValues({
                      ...formik.values,
                      "ლეპტოპის მდგომარეობა": e.target.value,
                    })
                  }
                >
                  ახალი
                </Radio>
                <Radio
                  value="მოერადი"
                  justifySelf="flex-end"
                  name="ლეპტოპის მდგომარეობა"
                  onChange={(e) =>
                    formik.setValues({
                      ...formik.values,
                      "ლეპტოპის მდგომარეობა": e.target.value,
                    })
                  }
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
