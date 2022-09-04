import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import store from "../../store";
import SiaHeader from "../sia/header";
import { apiCall } from "../../hooks/apiCall";
import { api } from "../../api";
import { useLocation } from "react-router-dom";
import FirstLayout from "./firstLayout";
import SecondLayout from "./secondLayout";
import ThirdLayout from "./thirdLayout";
function SinglePost() {
  const location = useLocation();
  const reduxState = store.getState();
  const [state, setState] = useState();
  useEffect(() => {
    apiCall("get", `${api}/laptop/${location.state.id}`, {
      params: {
        token: reduxState.postUserReducer.user.token,
      },
    })
      .then((res) => {
        setState(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  if (!state) {
    return <Text>Loading</Text>;
  }
  return (
    <Box>
      <SiaHeader title="ლეპტოპის ინფო" />
      <Box w={["90%", "min(1100px, 90%)"]} mx="auto">
        <FirstLayout state={state} reduxState={reduxState} />
        <SecondLayout state={state} reduxState={reduxState} />
        <ThirdLayout state={state} reduxState={reduxState} />
      </Box>
    </Box>
  );
}

export default SinglePost;
