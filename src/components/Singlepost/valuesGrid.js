import React from "react";
import { Text, Grid } from "@chakra-ui/react";
import translator from "../../hooks/translate";
function ValuesGrid({ tomap, from, translatorSufix }) {
  return tomap.map((key, index) => {
    return (
      <Grid
        templateColumns={"1fr 1fr"}
        key={index}
        justifyContent="space-between"
        w="100%"
      >
        <Text fontWeight="500" fontSize="20px">
          {translator(
            translatorSufix
              ? translatorSufix + key
              : from === "itself"
              ? key.key
              : key
          )}
          {key.key !== "" && key !== "" && ":"}
        </Text>
        <Text fontWeight="400" color="#797979" fontSize="20px">
          {from === "itself" ? key.value : from[key]}
        </Text>
      </Grid>
    );
  });
}

export default ValuesGrid;
