import React, { useState } from "react";
import { Box, Text, Flex, Img, Button } from "@chakra-ui/react";
import Header from "../shared/header";
import logo from "../../assets/icon-logo.png";

import { useFormik } from "formik";
import { Formik, Field, Form } from "formik";
import DropComponent from "./dropzone";

import store from "../../store";
import FirstLayout from "./firstLayout";
import SecondLayout from "./secondLayout";
import Footer from "./footer";
import { useDisclosure } from "@chakra-ui/react";
import BackdropExample from "../popUp";
import { api } from "../../api";
import FormData from "form-data";
import axios from "axios";
import { validation } from "./formik/validation";
import { Persist } from "formik-persist";
function LeptopisMaxasiatebeli() {
  const state = store.getState();
  const user = state.postUserReducer.user;
  const laptop = state.postLaptopReducer.laptop;
  let formData = new FormData();
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: { laptop_image: "", ...laptop },
    validationSchema: validation,
    onSubmit: async (values) => {
      Object.keys(user).map((key) => formData.append(key, user[key]));
      Object.keys(values).map((key) => formData.append(key, values[key]));
      formData.append("position_id", JSON.parse(user.position_id).id);
      formData.append("team_id", JSON.parse(user.team_id).id);
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
          console.log(res.response.data);
          setError(
            "wrong laptop image format. valid formats(.jpeg, .jpg, png)"
          );
        });
    },
  });
  console.log(formik.values);
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
        <DropComponent formik={formik} setError={setError} />
        <FirstLayout formik={formik} />
        <SecondLayout formik={formik} />
        <Footer formik={formik} />
        <Flex justifyContent={"space-between"} w={["100%", "90%"]} mx="auto">
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
          <Button
            backgroundColor={"#62A1EB"}
            color="#fff"
            onClick={formik.handleSubmit}
          >
            დამახსოვრება
          </Button>
        </Flex>
      </Box>
      <Img src={logo} alt="logo" mx="auto" display={["none", "block"]} />
      <BackdropExample open={isOpen} close={onClose} />
      <Persist name="formik" />
    </Box>
  );
}

export default LeptopisMaxasiatebeli;
