import React, { useCallback } from "react";

import { Box, Image, Text, Button, Input } from "@chakra-ui/react";

import camera from "../../../assets/camera.png";
import Dropzone from "react-dropzone";

import error from "../../../assets/errorIcon.png";
function DropComponent({ formik }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        formik.setValues({
          ...formik.values,
          imageUrl: e.target.result,
        });
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <Box
          {...getRootProps()}
          w={
            formik.values.imageUrl ? "fit-content" : ["100%", "min(90%, 878px)"]
          }
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          backgroundColor={formik.errors.imageUrl ? "#FFEDED" : "#F7F7F7"}
          border="2px dashed"
          borderColor={formik.errors.imageUrl ? "#E52F2F" : "#4386A9"}
          borderRadius="18px"
          height="min(70vw, 423px)"
          mx="auto"
        >
          {formik.values.imageUrl ? (
            <Image
              src={formik.values.imageUrl}
              height="100%"
              objectFit="cover"
              backgroundSize="cover"
              objectPosition="50% 50%"
              borderRadius="18px"
            />
          ) : (
            <>
              <Image src={camera} alt="camera" display={["block", "none"]} />
              <Box mt="6" display={["block", "none"]}>
                <Text color={formik.errors.imageUrl ? "#E52F2F" : "#4386A9"}>
                  ლეპტოპის ფოტოს <br /> ატვირთვა
                </Text>
              </Box>

              <Text
                color="#4386A9"
                fontWeight="500"
                size="20px"
                display={["none", "block"]}
              >
                ჩააგდე ან ატვირთე <br />
                ლეპტოპის ფოტო
              </Text>
              <Input {...getInputProps()} />
              <Button
                backgroundColor="#62A1EB"
                color="#fff"
                display={["none", "block"]}
                mt="16"
                padding="18px 60px 36px 60px"
                textAlign="center"
              >
                ატვირთე
              </Button>
              <Image
                mt={["6", "16"]}
                src={error}
                display={formik.errors.imageUrl ? "block" : "none"}
              />
            </>
          )}
        </Box>
      )}
    </Dropzone>
  );
}

export default DropComponent;
