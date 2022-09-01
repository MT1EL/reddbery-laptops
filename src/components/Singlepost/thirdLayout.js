import React from "react";

import { Box, SimpleGrid, Text, Grid } from "@chakra-ui/react";
import ValuesGrid from "./valuesGrid";
import translator from "../../hooks/translate";
function ThirdLayout({ state, reduxState }) {
  const laptop = state.laptop;
  const left = [
    { key: "state", value: translator(laptop.state) },
    { key: "price", value: laptop.price },
    { key: "", value: "" },
    { key: "", value: "" },
  ];
  const right = [{ key: "purchase_date", value: laptop.purchase_date }];
  return (
    <SimpleGrid
      minChildWidth={["100%", "500px"]}
      justifyItems="center"
      alignContent="center"
    >
      <Box
        ml="8"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="space-around"
        justifyContent="space-around"
        py={["0", "10"]}
        pt={["10"]}
        h={["", "300px"]}
      >
        <ValuesGrid state={state} tomap={left} from={"itself"} />
      </Box>

      <Box
        ml="8"
        w="100%"
        display="flex"
        flexDirection="column"
        py={["0", "10"]}
        h={["", "300px"]}
      >
        <ValuesGrid state={state} tomap={right} from={"itself"} />
      </Box>
    </SimpleGrid>
  );
}

export default ThirdLayout;
