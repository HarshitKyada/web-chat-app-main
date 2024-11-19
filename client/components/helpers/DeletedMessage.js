import React from "react";
import {
  Avatar,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineStop } from "react-icons/ai";
export default function ({ props }) {
  const userbg = useColorModeValue("#cfc9c9", "#1c2c3c");
  const userhoverbg = useColorModeValue("#bbb9b9", "#2a3a49");
  const friendhoverbg = useColorModeValue("#8fa4b1", "#09090b");
  const friendbg = useColorModeValue("#a0b7c7", "#161512");
  return (
    <Flex
      key={props.id}
      justifyContent={"space-between"}
      flexDirection={props.isUser ? "row" : "row-reverse"}
      px={"4"}
    >
      <Flex minW={"36%"}></Flex>
      <Flex
        position="relative"
        minW={"280px"}
        px={"2"}
        py={"2"}
        mt={"4"}
        ml={"2"}
        height="fit-content"
        flexDirection={props.isUser ? "row-reverse" : "row"}
        alignItems={"center"}
        bgColor={props.isUser ? userbg : friendbg}
        cursor="pointer"
        borderRadius={
          props.isUser ? "10px 0px 10px 10px" : "0px 10px 10px 10px"
        }
        key={props.id}
        gap={1}
        _hover={{ bgColor: props.isUser ? userhoverbg : friendhoverbg }}
        css={{
          "&::after": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "0",
            borderStyle: "solid",
            borderWidth: props.isUser
              ? "10px 0px 10px 10px"
              : "10px 10px 10px 0px", // Pointing direction
            borderColor: props.isUser
              ? `transparent transparent transparent ${userbg}`
              : `transparent ${friendbg} transparent transparent`,
            top: "10px",
            right: props.isUser ? "-10px" : "unset",
            left: props.isUser ? "unset" : "-10px",
          },
        }}
      >
        <Tooltip label={props.name} placement="bottom">
          <Avatar
            name={props.name}
            style={{
              border: "1px solid grey",
              height: "40px",
              width: "40px",
            }}
          />
        </Tooltip>
        <Flex flexGrow="1" flexDirection={"column"} justifyContent={"center"}>
          <Flex
            flexDirection={props.isUser ? "row-reverse" : "row"}
            h="7"
            pt={"2"}
            px={"4"}
            gap={"2.5"}
          >
            <Text
              fontSize={"12"}
              position={"relative"}
              top={"0"}
              color={"red.500"}
            >
              {new Date(props.time).toLocaleString()}
              {/* {props.time} */}
            </Text>
          </Flex>
          <Flex gap={2} alignItems={"center"} justifyContent={"end"}>
            <Icon  as={AiOutlineStop} w={5} h={5} color={"red.500"} />
            <Text color={"red.500"}>This message was deleted</Text>
          </Flex>
          <Text mb={"2"} pt={"2"} fontSize={"11"} color={"red.500"} textAlign={"end"}>
            {new Date(props.updated).toLocaleString()}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
