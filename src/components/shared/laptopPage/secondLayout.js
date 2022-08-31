import React from "react";

import {
  Box,
  Input,
  Text,
  Select,
  Flex,
  RadioGroup,
  Radio,
  Img,
} from "@chakra-ui/react";

import error from "../../../assets/errorIcon.png";
function SecondLayout({ formik }) {
  return (
    <Box
      display="flex"
      justifyContent={["center", "space-between"]}
      flexWrap="wrap"
      alignItems={"center"}
      w={["100%", "90%"]}
      mx="auto"
      mt="8"
    >
      <Box w={["100%", "220px"]}>
        <Select
          h="55px"
          variant="filled"
          placeholder="CPU"
          fontWeight="500"
          w={["100%", "220px"]}
          my="4"
          name="cpu"
          value={formik.values.cpu}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          focusBorderColor={
            formik.touched.cpu && formik.errors.cpu ? "#E52F2F" : "#98c7e6"
          }
          borderColor={
            formik.touched.cpu && formik.errors.cpu ? "#E52F2F" : "#98c7e6"
          }
        >
          <option value="Intel Core">Intel Core</option>
          <option value="AMD Ryzen">AMD Ryzen</option>
          <option value="Apple M1">Apple M1</option>
        </Select>
      </Box>
      <Box w={["100%", "220px"]}>
        <Text
          fontWeight="500"
          fontSize="18px"
          color={formik.touched.cpuCore && formik.errors.cpuCore && "#E52F2F"}
        >
          CPU-ს ბირთვი
        </Text>
        <Input
          type="number"
          placeholder="14"
          w={["100%", "220px"]}
          outlineColor={
            formik.touched.cpuCore && formik.errors.cpuCore
              ? "#E52F2F"
              : "#98c7e6"
          }
          focusBorderColor="transparent"
          border="none"
          my="5px"
          name="cpuCore"
          id="cpuCore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Text
          fontSize="14px"
          color={formik.touched.cpuCore && formik.errors.cpuCore && "#E52F2F"}
        >
          {formik.errors.cpuCore ? formik.errors.cpuCore : "მხოლოდ ციფრები"}
        </Text>
      </Box>
      <Box w={["100%", "220px"]} mt={["4", "0"]}>
        <Text
          fontWeight="500"
          fontSize="18px"
          color={
            formik.touched.cpuStream && formik.errors.cpuStream && "#E52F2F"
          }
        >
          CPU-ს ნაკადი
        </Text>
        <Input
          type="number"
          placeholder="365"
          w={["100%", "220px"]}
          outlineColor={
            formik.touched.cpuStream && formik.errors.cpuStream
              ? "#E52F2F"
              : "#98c7e6"
          }
          focusBorderColor="transparent"
          border="none"
          my="5px"
          name="cpuStream"
          id="cpuStream"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Text
          fontSize="14px"
          color={
            formik.touched.cpuStream && formik.errors.cpuStream && "#E52F2F"
          }
        >
          {formik.errors.cpuStream ? formik.errors.cpuStream : "მხოლოდ ციფრები"}
        </Text>
      </Box>
      <Box
        display="flex"
        flexWrap={"wrap"}
        mt="4"
        alignItems="center"
        justifyContent={"space-between"}
        w={["100%", "678px"]}
      >
        <Box w={["100%", "min(100%, 370px)"]}>
          <Text
            fontWeight="500"
            fontSize="18px"
            color={formik.touched.RAM && formik.errors.RAM && "#E52F2F"}
          >
            ლეპტოპის RAM (GB)
          </Text>
          <Input
            type="number"
            placeholder="16"
            w={["100%", "min(370px, 100%)"]}
            outlineColor={
              formik.touched.RAM && formik.errors.RAM ? "#E52F2F" : "#98c7e6"
            }
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="RAM"
            id="RAM"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={formik.touched.RAM && formik.errors.RAM && "#E52F2F"}
          >
            {formik.errors.RAM
              ? formik.errors.RAM
              : "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          w={["min('100%', '220px')", "220px"]}
          mt={"4"}
        >
          <Flex justifyContent={"space-between"} alignItems="center">
            <Text
              fontWeight="500"
              fontSize="18px"
              color={formik.errors.memory && formik.touched.memory && "#E52F2F"}
            >
              მეხსიერების ტიპი
            </Text>
            <Img
              height="21px"
              width="23px"
              src={error}
              alt="error"
              display={
                formik.errors.memory && formik.touched.memory ? "block" : "none"
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
              name="memory"
              id="memory"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <Box
                // direction="row"
                display="flex"
                justifyContent="space-between"
              >
                <Radio
                  value="SSD"
                  onChange={(e) =>
                    formik.setValues({
                      ...formik.values,
                      memory: e.target.value,
                    })
                  }
                >
                  SSD
                </Radio>
                <Radio
                  value="HDD"
                  justifySelf="flex-end"
                  onChange={(e) =>
                    formik.setValues({
                      ...formik.values,
                      memory: e.target.value,
                    })
                  }
                >
                  HDD
                </Radio>
              </Box>
            </RadioGroup>
          </Flex>
        </Box>
      </Box>
      <Box w="100%" mx="auto" h="2px" backgroundColor="#C7C7C7" mt="8" />
    </Box>
  );
}

export default SecondLayout;
