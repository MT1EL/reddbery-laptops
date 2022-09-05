import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ValuesGrid from "./valuesGrid";
function SecondLayout({ state }) {
  const laptop = state.laptop;
  const brands = JSON.parse(localStorage.getItem("brands"));
  const leftSide = [
    { key: "laptop_name", value: laptop.name },
    {
      key: "laptop_brand",
      value: brands.data[laptop.brand_id - 1].name,
    },
    { key: "RAM", value: laptop.ram },
    { key: "hard_drive_type", value: laptop.hard_drive_type },
  ];
  const rightSide = [...Object.keys(laptop.cpu), ""];
  return (
    <>
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
          <ValuesGrid state={state} tomap={leftSide} from={"itself"} />
        </Box>

        <Box
          ml="8"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="space-around"
          justifyContent="space-around"
          py={["0", "10"]}
          h={["", "300px"]}
        >
          <ValuesGrid
            state={state}
            tomap={rightSide}
            from={laptop.cpu}
            translatorSufix="CPU"
          />
        </Box>
      </SimpleGrid>
      <Box w="95.5%" h="3px" backgroundColor="#A5A5A5" mt="10" mx="auto" />
    </>
  );
}

export default SecondLayout;
