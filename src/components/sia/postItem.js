import React from "react";
import { Box, Grid, Image, Link, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function PostItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    dispatch({ type: "SETCURRENTPOST", payload: { item } });
    navigate("/Singlepost");
  };
  console.log(item);
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
            h="178px"
            objectFit="cover"
            objectPosition="50%"
            src={item.laptop.imageUrl}
            alt="laptop"
            borderRadius={"10px"}
          />
        </Box>
        <Box
          display="flex"
          marginLeft="28px"
          justifyContent="space-around"
          flexDirection="column"
          py="8"
        >
          <Text fontWeight="500">{item.user.სახელი}</Text>
          <Text>{item.laptop.CPU}</Text>
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
