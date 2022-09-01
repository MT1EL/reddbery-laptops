import React from "react";
import { Box, Image, SimpleGrid, Text, Grid } from "@chakra-ui/react";
import ValuesGrid from "./valuesGrid";

function FirstLayout({ state, reduxState }) {
  return (
    <>
      <SimpleGrid
        minChildWidth={["100%", "500px"]}
        justifyItems="center"
        alignContent="center"
      >
        <Image
          src={`https://pcfy.redberryinternship.ge/${state.laptop.image}`}
          alt="laptop"
          w="500px"
          h="342px"
          objectFit="cover"
        />
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
          <ValuesGrid
            tomap={Object.keys(state.user).slice(0, 2)}
            state={state}
            from={state.user}
          />

          <Grid
            templateColumns={"1fr 1fr"}
            justifyContent="space-between"
            w="100%"
          >
            <Text fontWeight="500" fontSize="20px">
              თიმი:
            </Text>
            <Text fontWeight="400" color="#797979" fontSize="20px">
              {reduxState.teamReducer.data.map(
                (item) => item.id === state.user.team_id && item.name
              )}
            </Text>
          </Grid>

          <Grid
            templateColumns={"1fr 1fr"}
            justifyContent="space-between"
            w="100%"
          >
            <Text fontWeight="500" fontSize="20px">
              პოზიცია:
            </Text>
            <Text fontWeight="400" color="#797979" fontSize="20px">
              {reduxState.positionReducer.data.map(
                (item) => item.id === state.user.position_id && item.name
              )}
            </Text>
          </Grid>

          <ValuesGrid
            tomap={Object.keys(state.user).slice(4)}
            state={state}
            from={state.user}
          />
        </Box>
      </SimpleGrid>
      <Box w="95.5%" h="3px" backgroundColor="#A5A5A5" mt="10" mx="auto" />
    </>
  );
}

export default FirstLayout;
