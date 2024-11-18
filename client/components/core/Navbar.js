import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../hooks";
import { AtSignIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Container,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import Axios from "axios";

function Navbar(props) {
  const color = useColorModeValue("#000", "#fff");
  const toast = useToast();
  const dispatch = useDispatch();
  const { REMOVEFRIEND, REMOVEUSERMESSAGE, SETCHAT } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const removeFriend = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
        data: { chatId: props.id },
      };

      props.socket.emit("delete chat", {
        chatId: props.id,
        friend: props.friend,
      });

      const { data } = await Axios.delete(`http://localhost:5000/chat`, config);
      toast({
        title: "Chat deleted successfully!",
        description: `Removed chat of ${props.name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });

      REMOVEFRIEND(props.name);
      REMOVEUSERMESSAGE(props.id);
      SETCHAT("", -1);
    } catch (err) {
      toast({
        title: "Error occurred!",
        description: `Failed to delete chat of ${props.name}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.error(err);
    }
  };

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
