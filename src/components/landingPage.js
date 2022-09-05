import React from "react";
import { Box, Img, Button } from "@chakra-ui/react";

import landingPc from "../assets/landing-pc.png";
import landingMobile from "../assets/landing-mobile.png";
import logo from "../assets/text-logo.png";
// import useClearData from "../hooks/clearData";
function LandingPage() {
  // useClearData();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      height="100vh"
    >
      <Img src={logo} alt="logo" />
      <Img
        src={landingPc}
        alt="landing"
        maxWidth="90%"
        display={["none", "block"]}
      />
      <Img src={landingMobile} alt="landing" display={{ sm: "none" }} />
      <Box
        width="min(358px, 90%)"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Button
          color="#fff"
          backgroundColor="#62A1EB"
          height="60px"
          borderRadius="8px"
          size="xl"
          as="a"
          href="/tanamshromeliInfo"
          fontWeight="500"
          fontSize="20px"
        >
          ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </Button>
        <Button
          color="#fff"
          backgroundColor="#62A1EB"
          height="60px"
          borderRadius="8px"
          fontWeight="500"
          size="xl"
          as="a"
          href="/sia"
          fontSize="20px"
        >
          ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
