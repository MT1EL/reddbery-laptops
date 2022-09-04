import React, { useEffect, useState } from "react";
import { Box, Select, Button, Img } from "@chakra-ui/react";
import CustomInput from "./shared/input";
import CustomSelect from "./shared/select";
import logo from "../assets/icon-logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Header from "./shared/header";
import { api } from "../api";
import store from "../store";
function TanamshrmolisInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = store.getState().postUserReducer.user;

  const [teamData, setTeamData] = useState();
  const [posData, setPosData] = useState();

  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      team: user.team_id,
      position: user.position_id,
      email: user.email,
      number: user.phone_number,
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოები")
        .required("მინიმუმ 2 სიმბოლო, ქართული ასოები")
        .matches(/[ა-ჰ]/g, "გამოიყენე ქართული ასოები"),
      surname: yup
        .string()
        .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოები")
        .required("მინიმუმ 2 სიმბოლო, ქართული ასოები")
        .matches(/[ა-ჰ]/g, "გამოიყენე ქართული ასოები"),
      team: yup.string().required("required"),
      position: yup.string().required("required"),
      email: yup
        .string()
        .email()
        .required()
        .matches(/@redberry.ge/g, "უნდა მთავრდებოდეს @redberry.ge-ით"),
      number: yup
        .string()
        .min(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
        .max(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
        .required("უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
        .matches(/\S/g, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"),
    }),
    // .test(/\S/g, "არასწორი ფორმატი")
    onSubmit: async (values) => {
      dispatch({
        type: "POSTUSER",
        payload: {
          user: {
            name: values.name,
            surname: values.surname,
            team: values.team,
            position: values.position,
            email: values.email,
            number: values.number,
          },
        },
      });
      navigate("/leptopis-maxasiateblebi");
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
            variant={"filled"}
            name="team"
            placeholder={"თიმი"}
            value={formik.values.team}
            onChange={(e) => {
              formik.handleChange(e);
              dispatch({
                type: "POSTUSER",
                payload: {
                  user: {
                    ...formik.values,
                    team: e.target.value,
                  },
                },
              });
            }}
            onBlur={formik.handleBlur}
            my="4"
            focusBorderColor={
              formik.touched.team && formik.errors.team && "#E52F2F"
            }
            borderColor={formik.touched.team && formik.errors.team && "#E52F2F"}
          >
            {teamData?.data?.map((option) => (
              <option value={JSON.stringify(option)} key={option.id}>
                {option.name}
              </option>
            ))}
          </Select>

          <CustomSelect
            name="position"
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
