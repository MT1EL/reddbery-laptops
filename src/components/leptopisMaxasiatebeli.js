import React from "react";
import { Box, Text, Flex, Img, Button } from "@chakra-ui/react";
import Header from "./shared/header";
import logo from "../assets/icon-logo.png";

import { useFormik } from "formik";
import * as yup from "yup";
import DropComponent from "./shared/laptopPage/dropzone";

import { useDispatch } from "react-redux";

import store from "../store";
import FirstLayout from "./shared/laptopPage/firstLayout";
import SecondLayout from "./shared/laptopPage/secondLayout";
import Footer from "./shared/laptopPage/footer";
import { useDisclosure } from "@chakra-ui/react";
import BackdropExample from "./popUp";
function LeptopisMaxasiatebeli() {
  const dispatch = useDispatch();
  const state = store.getState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      imageUrl: "",
      name: "",
      brand: "",
      cpu: "",
      cpuCore: "",
      cpuStream: "",
      RAM: "",
      memory: "",
      condition: "",
      price: "",
      PurchaseNumber: "",
    },

    validationSchema: yup.object({
      imageUrl: yup.string().required(),
      name: yup.string().required("ლათინური ასოები, ციფრები, !@#$%^&*()_+= "),
      brand: yup.string().required(),
      cpu: yup.string().required(),
      cpuCore: yup.string().required("მხოლოდ ციფრები"),
      cpuStream: yup.string().required("მხოლოდ ციფრები"),
      RAM: yup.string().required("მხოლოდ ციფრები"),
      memory: yup.string().required(),
      condition: yup.string().required(),
      price: yup.number().required("მხოლოდ რიცხვები"),
    }),
    onSubmit: async (values) => {
      dispatch({ type: "POSTLAPTOP", payload: { laptop: formik.values } });
      dispatch({
        type: "POSTCONTAINER",
        post: {
          user: state.postUserReducer.user,
          laptop: formik.values,
        },
      });
      onOpen();
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
        <DropComponent formik={formik} />
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
