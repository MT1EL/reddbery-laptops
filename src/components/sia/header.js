import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import arrow from "../../assets/backIcon.png";
import circle from "../../assets/backIconCircle.png";
function SiaHeader({ title }) {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" py="8" px="6">
        <Image src={arrow} alt="go back" display={["block", "none"]} />
        <Box
          position="relative"
          display={["none", "block"]}
          as="a"
          href={title === "ჩანაწერების სია" ? "/" : "/sia"}
        >
          <Image src={circle} alt="go back" />
          <Image
            src={arrow}
            alt="go back"
            position="absolute"
            top="calc(50% -  8px)"
            left="calc(50% -  5px)"
          />
        </Box>
        <Box alignSelf="center" justifySelf="center">
          <Text textAlign="center" fontWeight="700" fontSize={["16px", "25px"]}>
            {title}
          </Text>
        </Box>
        <Box w={["10px", "53px"]} h={["16px", "53px"]} />
      </Flex>
    </Box>
  );
}

export default SiaHeader;
