import React, { useEffect, useState } from "react";

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

import error from "../../assets/errorIcon.png";
import { useFormikContext } from "formik";

function SecondLayout() {
  const [cpus, setCpus] = useState();
  const formik = useFormikContext();
  useEffect(() => {
    fetch(`https://pcfy.redberryinternship.ge/api/cpus`)
      .then((res) => res.json())
      .then((res) => setCpus(res))
      .catch((e) => console.log(e));
  }, []);
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
          name="laptop_cpu"
          value={formik.values.laptop_cpu}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          focusBorderColor={
            formik.touched.laptop_cpu && formik.errors.laptop_cpu
              ? "#E52F2F"
              : "#98c7e6"
          }
          borderColor={
            formik.touched.laptop_cpu && formik.errors.laptop_cpu
              ? "#E52F2F"
              : "#98c7e6"
          }
        >
          {cpus?.data.map((option) => (
            <option value={option.name} key={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </Box>
      <Box w={["100%", "220px"]}>
        <Text
          fontWeight="500"
          fontSize="18px"
          color={
            formik.touched.laptop_cpu_cores &&
            formik.errors.laptop_cpu_cores &&
            "#E52F2F"
          }
        >
          CPU-ს ბირთვი
        </Text>
        <Input
          type="number"
          placeholder="14"
          w={["100%", "220px"]}
          outlineColor={
            formik.touched.laptop_cpu_cores && formik.errors.laptop_cpu_cores
              ? "#E52F2F"
              : "#98c7e6"
          }
          focusBorderColor="transparent"
          border="none"
          my="5px"
          name="laptop_cpu_cores"
          id="laptop_cpu_cores"
          value={formik.values.laptop_cpu_cores}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Text
          fontSize="14px"
          color={
            formik.touched.laptop_cpu_cores &&
            formik.errors.laptop_cpu_cores &&
            "#E52F2F"
          }
        >
          {formik.errors.laptop_cpu_cores
            ? formik.errors.laptop_cpu_cores
            : "მხოლოდ ციფრები"}
        </Text>
      </Box>
      <Box w={["100%", "220px"]} mt={["4", "0"]}>
        <Text
          fontWeight="500"
          fontSize="18px"
          color={
            formik.touched.laptop_cpu_threads &&
            formik.errors.laptop_cpu_threads &&
            "#E52F2F"
          }
        >
          CPU-ს ნაკადი
        </Text>
        <Input
          type="number"
          placeholder="365"
          w={["100%", "220px"]}
          outlineColor={
            formik.touched.laptop_cpu_threads &&
            formik.errors.laptop_cpu_threads
              ? "#E52F2F"
              : "#98c7e6"
          }
          focusBorderColor="transparent"
          border="none"
          my="5px"
          name="laptop_cpu_threads"
          id="laptop_cpu_threads"
          value={formik.values.laptop_cpu_threads}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Text
          fontSize="14px"
          color={
            formik.touched.laptop_cpu_threads &&
            formik.errors.laptop_cpu_threads &&
            "#E52F2F"
          }
        >
          {formik.errors.laptop_cpu_threads
            ? formik.errors.laptop_cpu_threads
            : "მხოლოდ ციფრები"}
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
            color={
              formik.touched.laptop_ram && formik.errors.laptop_ram && "#E52F2F"
            }
          >
            ლეპტოპის RAM (GB)
          </Text>
          <Input
            type="number"
            placeholder="16"
            w={["100%", "min(370px, 100%)"]}
            outlineColor={
              formik.touched.laptop_ram && formik.errors.laptop_ram
                ? "#E52F2F"
                : "#98c7e6"
            }
            focusBorderColor="transparent"
            border="none"
            my="5px"
            name="laptop_ram"
            id="laptop_ram"
            value={formik.values.laptop_ram}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Text
            fontSize="14px"
            color={
              formik.touched.laptop_ram && formik.errors.laptop_ram && "#E52F2F"
            }
          >
            {formik.errors.laptop_ram
              ? formik.errors.laptop_ram
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
              color={
                formik.errors.laptop_hard_drive_type &&
                formik.touched.laptop_hard_drive_type &&
                "#E52F2F"
              }
            >
              მეხსიერების ტიპი
            </Text>
            <Img
              height="21px"
              width="23px"
              src={error}
              alt="error"
              display={
                formik.errors.laptop_hard_drive_type &&
                formik.touched.laptop_hard_drive_type
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
              name="laptop_hard_drive_type"
              id="laptop_hard_drive_type"
              value={formik.values.laptop_hard_drive_type}
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
                      laptop_hard_drive_type: e.target.value,
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
                      laptop_hard_drive_type: e.target.value,
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
