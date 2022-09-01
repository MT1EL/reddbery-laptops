import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SiaHeader from "./header";
import store from "../../store";
import PostItem from "./postItem";
import { apiCall } from "../../hooks/apiCall";
import { api } from "../../api";
function Sia() {
  const state = store.getState();
  const [data, setData] = useState();
  useEffect(() => {
    apiCall("get", `${api}/laptops`, {
      params: {
        token: state.postUserReducer.user.token,
      },
    })
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box>
      <SiaHeader title="ჩანაწერების სია" />
      <SimpleGrid
        gap={["25px"]}
        justifyItems="center"
        alignContent="center"
        minChildWidth="400px"
        w="min(100%, 1160px)"
        mx="auto"
      >
        {data
          ?.slice()
          .reverse()
          .map((item, index) => (
            <PostItem item={item} key={index} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Sia;
