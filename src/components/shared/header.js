import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import circle from "../../assets/backIconCircle.png";
import arrow from "../../assets/backIcon.png";
import { useNavigate } from "react-router";
function Header({ title, pageNumber }) {
  const navigate = useNavigate();
  const route = pageNumber === "1" ? "/" : "/tanamshromeliInfo";
  return (
    <Box
      backgroundColor={["#fff", "#F6F6F6"]}
      maxWidth="100vw"
      maxHeight="100vh"
      overflowX="hidden"
    >
      <Box
        position={"absolute"}
        top={["20px", "53px"]}
        left={["20px", "70px"]}
        justifySelf="flex-start"
        alignSelf="flex-start"
      >
        <Box
          position="relative"
          width={["16px", "fit-content"]}
          height={["16px", "fit-content"]}
          as="a"
          href="/"
        >
          <Image src={circle} alt="cirlce" display={["none", "block"]} />

          <Image
            src={arrow}
            alt="go back arrow"
            position={"absolute"}
            top="calc(50% - 8px)"
            right="calc(50% - 4.75px)"
          />
        </Box>
      </Box>
      <Box
        display={["flex", "none"]}
        justifyContent="space-around"
        alignItems="center"
        pt="30px"
        pb="10px"
        backgroundColor="#f6f6f6"
      >
        <Image
          src={arrow}
          alt="go back arrow"
          mt="-4"
          onClick={() => navigate(route)}
        />

        <Box textAlign="center">
          <Text fontWeight="700" fontSize="16px">
            {title}
          </Text>
          <Text fontSize="14" color="#898989">
            {pageNumber}/2
          </Text>
        </Box>
        <Box />
      </Box>

      <Box
        display={["none", "flex"]}
        justifyContent="space-between"
        mx="auto"
        width="min(560px, 80%)"
        paddingTop="90px"
        paddingBottom="27px"
      >
        <Box position="relative" as="a" href="/tanamshromeliInfo">
          <Text fontSize="20px" p="10px" textAlign="center">
            თანამშრომლის ინფო
          </Text>
          <Box
            position="absolute"
            height="2px"
            width="75%"
            backgroundColor="#000"
            left="12.5%"
            display={pageNumber === "2" && "none"}
          />
        </Box>
        <Box position="relative" as="a" href="/leptopis-maxasiateblebi">
          <Text fontSize="20px" p="10px" textAlign="center">
            ლეპტოპის მახასიათებლები
          </Text>
          <Box
            position="absolute"
            height="2px"
            width="75%"
            backgroundColor="#000"
            left="12.5%"
            display={pageNumber === "1" && "none"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
