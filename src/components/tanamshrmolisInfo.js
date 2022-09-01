import React, { useEffect, useState } from "react";
import { Box, Select, Button, Img } from "@chakra-ui/react";
import CustomInput from "./shared/input";
import CustomSelect from "./shared/select";
import logo from "../assets/icon-logo.png";
import getLanguage from "../hooks/getLanguage";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Header from "./shared/header";
import { api } from "../api";
function TanamshrmolisInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [teamData, setTeamData] = useState();
  const [posData, setPosData] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      team: "",
      position_id: "",
      email: "",
      number: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("მინიმუმ 2 სიმბოლო, ქართული ასოები"),
      surname: yup.string().required("მინიმუმ 2 სიმბოლო, ქართული ასოები"),
      team: yup.string().required("required"),
      position_id: yup.number().required("required"),
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
            name: values.name,
            surname: values.surname,
            team: JSON.parse(values.team).id,
            position_id: values.position_id,
            email: values.email,
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

      if (
        !formik.values.position_id &&
        typeof formik.values.position_id !== "number"
      ) {
        errors.position_id = "required";
      }

      const email = formik.values.email;
      const startingIndex = email.length - 12;
      let redberry = email.slice(startingIndex);

      if (redberry !== "@redberry.ge") {
        errors.email = "უნდა მთავრდებოდეს @redberry.ge-ით";
      }
      let number = formik.values.number;
      const numberValidation = number.match(/\+995/g);
      if (numberValidation === null || /\s/.test(number) === true) {
        errors.number = "არასწორი ფორმატი";
      }

      return errors;
    },
  });

  useEffect(() => {
    fetch(`${api}/teams`)
      .then((res) => res.json())
      .then((res) => setTeamData(res))
      .catch((e) => console.log(e));

    fetch(`${api}/positions`)
      .then((res) => res.json())
      .then((res) => {
        setPosData(res);
        dispatch({ type: "POSTPOSITION", res });
      })
      .catch((e) => console.log(e));
  }, []);

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
              <CustomInput
                formlabel="სახელი"
                inputname="name"
                placeholder="გრიშა"
                formik={formik}
                type="text"
                helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              />
            </Box>
            <Box w={["100%", "370px"]}>
              <CustomInput
                formlabel="გვარი"
                inputname="surname"
                placeholder="ბაგრატიონი"
                formik={formik}
                type="text"
                helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              />
            </Box>
          </Box>

          <Select
            variant="filled"
            placeholder={"თიმი"}
            name={"team"}
            value={formik.values.team}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            my="4"
            focusBorderColor={
              formik.touched.team && formik.errors.team ? "#E52F2F" : "#98c7e6"
            }
            borderColor={
              formik.touched.team && formik.errors.team ? "#E52F2F" : "#98c7e6"
            }
          >
            {teamData?.data?.map((option) => (
              <option value={JSON.stringify(option)} key={option.id}>
                {option.name}
              </option>
            ))}
          </Select>

          <CustomSelect
            name="position_id"
            placeholder="პოზიცია"
            formik={formik}
            data={posData}
          />

          <Box w="100%" my="4">
            <CustomInput
              formlabel="მეილი"
              inputname="email"
              placeholder="grish666@redberry.ge"
              formik={formik}
              type="email"
              helperText="უნდა მთავრდებოდეს @redberry.ge-ით"
            />
          </Box>
          <Box w="100%" my="4">
            <CustomInput
              formlabel="ტელეფონის ნომერი"
              inputname="number"
              placeholder="+995 598 00 07 01"
              formik={formik}
              helperText="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
            />
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
