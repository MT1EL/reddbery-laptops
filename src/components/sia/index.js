import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SiaHeader from "./header";
import store from "../../store";
import PostItem from "./postItem";
function Sia() {
  const state = store.getState();
  const toMap = state.postContainerReducer.posts?.slice().reverse();
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
        {toMap.map((item, index) => (
          <PostItem item={item} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Sia;
