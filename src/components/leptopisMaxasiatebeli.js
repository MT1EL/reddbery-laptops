import React, { useState } from "react";
import { Box, Text, Flex, Img, Button } from "@chakra-ui/react";
import Header from "./shared/header";
import logo from "../assets/icon-logo.png";

import { useFormik } from "formik";
import * as yup from "yup";
import DropComponent from "./shared/laptopPage/dropzone";

import store from "../store";
import FirstLayout from "./shared/laptopPage/firstLayout";
import SecondLayout from "./shared/laptopPage/secondLayout";
import Footer from "./shared/laptopPage/footer";
import { useDisclosure } from "@chakra-ui/react";
import BackdropExample from "./popUp";
import { api } from "../api";
import FormData from "form-data";
import axios from "axios";
function LeptopisMaxasiatebeli() {
  const state = store.getState();
  const user = state.postUserReducer.user;
  let formData = new FormData();
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      laptop_image: "",
      laptop_name: "",
      laptop_brand_id: "",
      laptop_ram: "",
      laptop_hard_drive_type: "",
      laptop_cpu: "",
      laptop_cpu_cores: "",
      laptop_cpu_threads: "",
      laptop_state: "",
      laptop_price: "",
      laptop_purchase_date: "",
    },

    validationSchema: yup.object({
      laptop_image: yup.string().required(),
      laptop_name: yup
        .string()
        .required("ლათინური ასოები, ციფრები, !@#$%^&*()_+= "),
      laptop_brand_id: yup.number().required(),
      laptop_cpu: yup.string().required(),
      laptop_cpu_cores: yup.string().required("მხოლოდ ციფრები"),
      laptop_cpu_threads: yup.string().required("მხოლოდ ციფრები"),
      laptop_ram: yup.string().required("მხოლოდ ციფრები"),
      laptop_hard_drive_type: yup.string().required(),
      laptop_state: yup.string().required(),
      laptop_price: yup.number().required("მხოლოდ რიცხვები"),
    }),
    onSubmit: async (values) => {
      Object.keys(user).map((key) => formData.append(key, user[key]));
      Object.keys(values).map((key) => formData.append(key, values[key]));

      axios({
        method: "post",
        url: `${api}/laptop/create`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => onOpen())
        .catch((res) =>
          setError("wrong laptop image format. valid formats(.jpeg, .jpg, png)")
        );
    },
  });

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
    </Box>
  );
}

export default LeptopisMaxasiatebeli;
