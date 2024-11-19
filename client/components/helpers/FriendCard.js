import React from "react";
import {
  Avatar,
  Flex,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

export default function (props) {
  const selected = useColorModeValue("#dee4e7", "#373838");
  const bg = useColorModeValue("#f9fafa", "#272727");
  const hover = useColorModeValue("#dee4e7", "#424242");
  const color = useColorModeValue("#000", "#fff");
  return (
    <Tooltip placement="right-end" hasArrow label={props.name}>
      <Flex
        px={"2"}
        py={"2"}
        height="fit-content"
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2"}
        bgColor={props.select == props.id ? selected : bg}
        cursor="pointer"
        _hover={{ bgColor: hover }}
      >
        <Avatar
          name={props.name}
          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${props.name}`}
          size={props.sideBarToggle ? "sm" : "md"}
        />
        {!props?.sideBarToggle && (
          <Text fontWeight={"bold"} fontSize={"md"} color={color}>
            {props.name.slice(0, 11) === props.name
              ? props.name
              : props.name.slice(0, 10) + "..."}
          </Text>
        )}
      </Flex>
    </Tooltip>
  );
}
