import React from "react";
import { Box, Text, Input, Select, Button, Img } from "@chakra-ui/react";

import logo from "../assets/icon-logo.png";
import getLanguage from "../helperfunctions/getLanguage";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Header from "./shared/header";
function TanamshrmolisInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      team: "",
      position: "",
      email: "",
      number: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("მინიმუმ 2 სიმბოლო, ქართული ასოები"),
      surname: yup.string().required("მინიმუმ 2 სიმბოლო, ქართული ასოები"),
      team: yup.string().required("required"),
      position: yup.string().required("required"),
      email: yup.string().required("უნდა მთავრდებოდეს @redberry.ge-ით"),
      number: yup
        .number("")
        .min(17, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
        .required("ქართული მობ-ნომრის ფორმატი"),
    }),
    onSubmit: async (values) => {
      dispatch({
        type: "POSTUSER",
        payload: {
          user: {
            name: values.name + " " + values.surname,
            team: values.team,
            position: values.position,
            mail: values.email,
            number: values.number,
          },
        },
      });
      navigate("/leptopis-maxasiateblebi");
    },

    validate: (values) => {
      let errors = {};

      if (
        getLanguage(values.name).length === 1 &&
        getLanguage(values.name)[0] !== "Georgian"
      ) {
        errors.name = "გამოიყენე ქართული ასოები";
      } else {
        if (values.name.length < 2) {
          errors.name = "მინიმუმ 2 სიმბოლო";
        }
      }

      if (
        getLanguage(values.surname).length === 1 &&
        getLanguage(values.surname)[0] !== "Georgian"
      ) {
        errors.surname = "გამოიყენე ქართული ასოები";
      } else {
        if (values.surname.length <= 1) {
          errors.surname = "მინიმუმ 2 სიმბოლო";
        }
      }

      if (!formik.values.team) {
        errors.team = "required";
      }

      if (!formik.values.position) {
        errors.position = "required";
      }

      const email = formik.values.email;
      const startingIndex = email.length - 12;
      let redberry = email.slice(startingIndex);

      if (redberry !== "@redberry.ge") {
        errors.email = "უნდა მთავრდებოდეს @redberry.ge-ით";
      }

      let number = formik.values.number;
      const numberValidation = number.match(
        /\+\d{3}[ -]?\d{3}[ -]\d{2}[ -]\d{2}[ -]\d{2}/g
      );
      if (numberValidation === null) {
        errors.number = "არასწორი ფორმატი";
      }

      return errors;
    },
  });

  return (
    <Box>
      <Header title="თანამშრომლის ინფო" pageNumber={"1"} />
      <form>
        <Box
          width="min(90%, 1226px)"
          background="#fff"
          mx="auto"
          py={["38px", "90px"]}
          px={["0", "180px"]}
          mb="67px"
          display="flex"
          flexDir="column"
        >
          <Box
            display="flex"
            justifyContent={["center", "space-between"]}
            flexWrap="wrap"
          >
            <Box w={["100%", "370px"]}>
              <Text
                fontWeight="500"
                fontSize="18px"
                color={formik.touched.name && formik.errors.name && "#E52F2F"}
              >
                სახელი
              </Text>
              <Input
                type="text"
                placeholder="გრიშა"
                w={["100%", "370px"]}
                outlineColor={
                  formik.touched.name && formik.errors.name
                    ? "#E52F2F"
                    : "#98c7e6"
                }
                focusBorderColor="transparent"
                border="none"
                my="5px"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Text
                fontSize="14px"
                color={formik.touched.name && formik.errors.name && "#E52F2F"}
              >
                {formik.errors.name
                  ? formik.errors.name
                  : "მინიმუმ 2 სიმბოლო, ქართული ასოები"}
              </Text>
            </Box>
            <Box w={["100%", "370px"]}>
              <Text
                fontWeight="500"
                fontSize="18px"
                color={
                  formik.touched.surname && formik.errors.surname && "#E52F2F"
                }
              >
                გვარი
              </Text>
              <Input
                placeholder="ბაგრატიონი"
                w={["100%", "370px"]}
                outlineColor={
                  formik.touched.surname && formik.errors.surname
                    ? "#E52F2F"
                    : "#98c7e6"
                }
                focusBorderColor="transparent"
                border="none"
                my="5px"
                name="surname"
                id="surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Text
                fontSize="14px"
                color={
                  formik.touched.surname && formik.errors.surname && "#E52F2F"
                }
              >
                {formik.errors.surname
                  ? formik.errors.surname
                  : "მინიმუმ 2 სიმბოლო, ქართული ასოები"}
              </Text>
            </Box>
          </Box>
          <Select
            variant="filled"
            placeholder="თიმი"
            my="4"
            name="team"
            value={formik.values.team}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            focusBorderColor={
              formik.touched.team && formik.errors.team ? "#E52F2F" : "#98c7e6"
            }
            borderColor={
              formik.touched.team && formik.errors.team ? "#E52F2F" : "#98c7e6"
            }
          >
            <option value="დეველოპმენტი">დეველოპმენტი</option>
            <option value="HR">HR</option>
            <option value="გაყიდვები">გაყიდვები</option>
            <option value="დიზაინი">დიზაინი</option>
            <option value="მარკეტინგი">მარკეტინგი</option>
          </Select>

          <Select
            variant="filled"
            placeholder="პოზიცია"
            my="4"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            focusBorderColor={
              formik.touched.position && formik.errors.position
                ? "#E52F2F"
                : "#98c7e6"
            }
            borderColor={
              formik.touched.position && formik.errors.position
                ? "#E52F2F"
                : "#98c7e6"
            }
          >
            <option value="დეველოპმენტი">დეველოპმენტი</option>
            <option value="HR">HR</option>
            <option value="გაყიდვები">გაყიდვები</option>
            <option value="დიზაინი">დიზაინი</option>
            <option value="მარკეტინგი">მარკეტინგი</option>
          </Select>

          <Box w="100%" my="4">
            <Text
              fontWeight="500"
              fontSize="18px"
              color={formik.touched.email && formik.errors.email && "#E52F2F"}
            >
              მეილი
            </Text>
            <Input
              placeholder="grish666@redberry.ge"
              outlineColor={
                formik.touched.email && formik.errors.email
                  ? "#E52F2F"
                  : "#98c7e6"
              }
              focusBorderColor="transparent"
              border="none"
              my="5px"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Text
              fontSize="14px"
              color={formik.touched.email && formik.errors.email && "#E52F2F"}
            >
              უნდა მთავრდებოდეს @redberry.ge-ით
            </Text>
          </Box>
          <Box w="100%" my="4">
            <Text
              fontWeight="500"
              fontSize="18px"
              color={formik.touched.number && formik.errors.number && "#E52F2F"}
            >
              ტელეფონის ნომერი
            </Text>
            <Input
              placeholder="+995 598 00 07 01"
              outlineColor={
                formik.touched.number && formik.errors.number
                  ? "#E52F2F"
                  : "#98c7e6"
              }
              focusBorderColor="transparent"
              border="none"
              my="5px"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Text
              fontSize="14px"
              color={formik.touched.number && formik.errors.number && "#E52F2F"}
            >
              {formik.errors.number
                ? formik.errors.number
                : "ქართული მობ-ნომრის ფორმატი"}
            </Text>
          </Box>
          <Button
            backgroundColor="#62A1EB"
            color="#fff"
            w="132px"
            alignSelf="flex-end"
            type="submit"
            onClick={formik.handleSubmit}
          >
            შემდეგი
          </Button>
        </Box>
      </form>
      <Img src={logo} alt="logo" mx="auto" display={["none", "block"]} />
    </Box>
  );
}

export default TanamshrmolisInfo;
