import { AtSignIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

function Navbar(props) {
  const color = useColorModeValue("#000", "#fff");

  return (
    <Flex
      height="8vh"
      flexDirection="row"
      alignItems="center"
      gap="4"
      px="10"
      pt="5"
    >
      <AtSignIcon boxSize="5" color={color} />
      <Text
        color={color}
        fontSize="20"
        fontWeight="semibold"
        fontStyle="oblique"
        ml="-1.5"
      >
        {props.name}
      </Text>
      <Container color="white" />
    </Flex>
  );
}

export default Navbar;
