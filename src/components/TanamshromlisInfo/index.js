import React, { useEffect, useState } from "react";
import { Box, Select, Button, Img } from "@chakra-ui/react";
import CustomInput from "../shared/input";
import CustomSelect from "../shared/select";
import logo from "../../assets/icon-logo.png";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Header from "../shared/header";
import { api } from "../../api";
import { validation } from "./Formik/.";
import { Persist } from "formik-persist";
import { error } from "jquery";
function TanamshrmolisInfo() {
  const navigate = useNavigate();

  const [teamData, setTeamData] = useState();
  const [posData, setPosData] = useState();

  useEffect(() => {
    fetch(`${api}/teams`)
      .then((res) => res.json())
      .then((res) => {
        setTeamData(res);
        localStorage.setItem("teams", JSON.stringify(res));
      })
      .catch((e) => console.log(e));

    fetch(`${api}/positions`)
      .then((res) => res.json())
      .then((res) => {
        setPosData(res);
        localStorage.setItem("positions", JSON.stringify(res));
      })
      .catch((e) => console.log(e));
  }, []);

  const handleClick = (errors, setFieldTouched, touched) => {
    ["name", "surname", "team", "position", "email", "phone_number"].map(
      (item) => setFieldTouched(item, true)
    );
    Object.keys(errors).length === 0 && navigate("/leptopis-maxasiateblebi");
  };

  return (
    <Box>
      <Header title="თანამშრომლის ინფო" pageNumber={"1"} />
      <Formik
        initialValues={{
          name: "",
          surname: "",
          team: "",
          position: "",
          email: "",
          phone_number: "",
        }}
        validationSchema={validation}
      >
        {({ errors, touched, setFieldTouched }) => (
          <Form>
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
                    type="text"
                    helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  />
                </Box>
                <Box w={["100%", "370px"]}>
                  <CustomInput
                    formlabel="გვარი"
                    inputname="surname"
                    placeholder="ბაგრატიონი"
                    type="text"
                    helperText="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                  />
                </Box>
              </Box>

              <CustomSelect name="team" placeholder="თიმი" data={teamData} />

              <CustomSelect
                name="position"
                placeholder="პოზიცია"
                data={posData}
              />

              <Box w="100%" my="4">
                <CustomInput
                  formlabel="მეილი"
                  inputname="email"
                  placeholder="grish666@redberry.ge"
                  type="email"
                  helperText="უნდა მთავრდებოდეს @redberry.ge-ით"
                />
              </Box>
              <Box w="100%" my="4">
                <CustomInput
                  formlabel="ტელეფონის ნომერი"
                  inputname="phone_number"
                  placeholder="+995 598 00 07 01"
                  helperText="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
                />
              </Box>
              <Button
                backgroundColor="#62A1EB"
                color="#fff"
                w="132px"
                alignSelf="flex-end"
                onClick={() => handleClick(errors, setFieldTouched, touched)}
              >
                შემდეგი
              </Button>
            </Box>
            <Persist />
          </Form>
        )}
      </Formik>
      <Img src={logo} alt="logo" mx="auto" display={["none", "block"]} />
    </Box>
  );
}

export default TanamshrmolisInfo;
