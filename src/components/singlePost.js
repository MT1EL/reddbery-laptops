import React from "react";
import { Box, Flex, Image, SimpleGrid, Text, Grid } from "@chakra-ui/react";
import store from "../store";
import SiaHeader from "./sia/header";
function SinglePost() {
  const state = store.getState().setCurrentReducer;
  console.log(state);
  return (
    <Box>
      <SiaHeader title="ლეპტოპის ინფო" />
      <Box w={["90%", "min(1100px, 90%)"]} mx="auto">
        <SimpleGrid
          minChildWidth={["100%", "500px"]}
          justifyItems="center"
          alignContent="center"
        >
          <Image
            src={state.laptop.imageUrl}
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
            {Object.keys(state.user).map((key, index) => {
              console.log(state.user[key.toString()]);
              return (
                <Grid
                  templateColumns={"1fr 1fr"}
                  key={index}
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text fontWeight="500" fontSize="20px">
                    {key}:
                  </Text>
                  <Text fontWeight="400" color="#797979" fontSize="20px">
                    {state.user[key]}
                  </Text>
                </Grid>
              );
            })}
          </Box>
        </SimpleGrid>
        <Box w="95.5%" h="3px" backgroundColor="#A5A5A5" mt="10" mx="auto" />
        {/* second layout */}
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
            {Object.keys(state.laptop)
              .slice(1)
              .slice(0, 4)
              .map((key, index) => (
                <Grid
                  templateColumns={"1fr 1fr"}
                  key={index}
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text fontWeight="500" fontSize="20px">
                    {key}:
                  </Text>
                  <Text fontWeight="400" color="#797979" fontSize="20px">
                    {state.laptop[key]}
                  </Text>
                </Grid>
              ))}
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
            {Object.keys(state.laptop)
              .slice(1)
              .slice(4, 7)
              .map((key, index) => (
                <Grid
                  templateColumns={"1fr 1fr"}
                  key={index}
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text fontWeight="500" fontSize="20px">
                    {key}:
                  </Text>
                  <Text fontWeight="400" color="#797979" fontSize="20px">
                    {state.laptop[key]}
                  </Text>
                </Grid>
              ))}
          </Box>
        </SimpleGrid>
        <Box w="95.5%" h="3px" backgroundColor="#A5A5A5" mt="10" mx="auto" />
        {/* third layout */}
        <SimpleGrid
          minChildWidth={["100%", "500px"]}
          justifyItems={"center"}
          alignContent={["flex-start", "center"]}
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
            h={["", "200px"]}
          >
            {Object.keys(state.laptop)
              .slice(8, 10)
              .map((key, index) => (
                <Grid
                  templateColumns={"1fr 1fr"}
                  key={index}
                  justifyContent="space-between"
                  w="100%"
                  mb={["2", "0"]}
                >
                  <Text fontWeight="500" fontSize="20px">
                    {key}:
                  </Text>
                  <Text fontWeight="400" color="#797979" fontSize="20px">
                    {state.laptop[key]}
                    {key === "ლეპტოპის ფასი" && " ₾"}
                  </Text>
                </Grid>
              ))}
          </Box>

          <Box
            ml="8"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-around"
            py={["0", "10"]}
            h={["", "200px"]}
          >
            <Grid
              templateColumns={"1fr 1fr"}
              justifyContent="space-between"
              w="100%"
            >
              <Text fontWeight="500" fontSize="20px">
                შეძენის რიცხვი:
              </Text>
              <Text fontWeight="400" color="#797979" fontSize="20px">
                {state.laptop["შეძენის რიცხვი"]}
              </Text>
            </Grid>
            <Box />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default SinglePost;
