import {
  ModalOverlay,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Image,
  Flex,
} from "@chakra-ui/react";

import popupIcon from "../assets/popupIcon.png";

export default function BackdropExample({ open, close }) {
  const OverlayOne = () => <ModalOverlay bg="#4A4A4A" />;

  return (
    <>
      <Modal isCentered isOpen={open} onClose={close} size={["full", "md"]}>
        <OverlayOne />
        <ModalContent>
          <ModalBody
            mx="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Image src={popupIcon} alt="popup" mx="auto" />
            <Text fontSize="25px" fontWeight="700" textAlign="center">
              ჩანაწერი დამატებულია!
            </Text>
          </ModalBody>

          <ModalFooter mx="auto">
            <Flex flexDirection="column">
              <Button
                as="a"
                href="sia"
                backgroundColor="#62A1EB"
                color="#fff"
                mb={["38px", "28px"]}
              >
                სიაში გადაყვანა
              </Button>
              <Text
                color="#0089A7"
                textAlign="center"
                fontWeight="500"
                fontSize="20px"
                mb={["70px", "44px"]}
                cursor="pointer"
                as="a"
                href="/"
              >
                მთავარი
              </Text>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
