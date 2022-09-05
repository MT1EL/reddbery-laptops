import React, { useState } from "react";
import { Box, Text, Flex, Img, Button } from "@chakra-ui/react";
import Header from "../shared/header";
import logo from "../../assets/icon-logo.png";
// import store from "../../store";

import DropComponent from "./dropzone";
import FirstLayout from "./firstLayout";
import SecondLayout from "./secondLayout";
import Footer from "./footer";

import { useDisclosure } from "@chakra-ui/react";
import BackdropExample from "../popUp";
import { api } from "../../api";
import axios from "axios";
import { Persist } from "formik-persist";
import { Formik, Form } from "formik";
import { validation, initialValues } from "./Formik/.";
function LeptopisMaxasiatebeli() {
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (values) => {
    let formData = new FormData();
    //creates new form data elements with formik values
    Object.keys(values).map((key) => formData.append(key, values[key]));
    //adds position id to formdata
    formData.append("position_id", JSON.parse(values.position).id);
    //adds team id to formdata
    formData.append("team_id", JSON.parse(values.team).id);
    //sends request to backend
    formData.append("token", process.env.REACT_APP_TOKEN);
    axios({
      method: "post",
      url: `${api}/laptop/create`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => onOpen())
      .catch((res) => {
        setError("wrong laptop image format. valid formats(.jpeg, .jpg, png)");
      });
  };
  return (
    <Box backgroundColor={["#fff", "#F6F6F6"]}>
      <Header title="ლეპტოპის მახასიათებლები" pageNumber={"2"} />
      <Box
        width="min(90%, 1226px)"
        background="#fff"
        mx="auto"
        py={["38px", "90px"]}
        px={["0", "min(180px, 10%)"]}
        mb="67px"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={async (values, { resetForm }) => {
            resetForm();
            handleSubmit(values);
          }}
        >
          <Form>
            <DropComponent />
            <FirstLayout />
            <SecondLayout />
            <Footer />
            <Flex
              justifyContent={"space-between"}
              w={["100%", "90%"]}
              mx="auto"
            >
              <Text
                color="#62A1EB"
                fontWeight="500"
                fontSize="18px"
                as="a"
                href="tanamshromeliInfo"
              >
                უკან
              </Text>

              {error?.message && <Text color="#E52F2F">{error.message}</Text>}
              <Button backgroundColor={"#62A1EB"} color="#fff" type="submit">
                დამახსოვრება
              </Button>
            </Flex>
            <Persist />
          </Form>
        </Formik>
      </Box>
      <Img src={logo} alt="logo" mx="auto" display={["none", "block"]} />
      <BackdropExample open={isOpen} close={onClose} />
    </Box>
  );
}

export default LeptopisMaxasiatebeli;
