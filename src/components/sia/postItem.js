import React from "react";
import { Box, Grid, Image, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
function PostItem({ item }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/Singlepost", { state: { id: item.laptop.id } });
  };
  return (
    <Box
      backgroundColor="#EAFAFF"
      border="1px solid #AED1EA "
      borderRadius="20px"
    >
      <Grid templateColumns="1fr 1fr">
        <Box p="2" alignSelf="center">
          <Image
            w="266px"
            h={["109px", "178px"]}
            objectFit="cover"
            objectPosition="50%"
            src={`https://pcfy.redberryinternship.ge/${item.laptop.image}`}
            alt="laptop"
            borderRadius={"10px"}
          />
        </Box>
        <Box
          display="flex"
          marginLeft="28px"
          justifyContent="space-around"
          flexDirection="column"
          h={["109px", "178px"]}
          my="auto"
        >
          <Text fontWeight="500">
            {item.user.name + " " + item.user.surname}
          </Text>
          <Text>{item.laptop.name}</Text>
          <Link
            color="#4386A9"
            textDecoration="underline"
            onClick={handleClick}
          >
            მეტის ნახვა
          </Link>
        </Box>
      </Grid>
    </Box>
  );
}

export default PostItem;
