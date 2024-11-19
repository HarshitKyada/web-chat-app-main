"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import ChatLoader from "../animation/ChatLoader";
import MessageCard from "../helpers/MessageCard";

const ScrollBar = ({ bg, messageData, chatData, socket, userData }) => {
  return (
    <Box
      bgColor={bg}
      overflowY="scroll"
      height={"80vh"}
      mb={"4"}
      py={"2"}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },

        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <ScrollableFeed forceScroll={true} >
        <Flex flexDirection={"column"} px={"2"} pt={"4"} pb={"1"}>
          {messageData[chatData.id] === undefined ? (
            <ChatLoader number={15} />
          ) : (
            messageData[chatData.id].map((v, i) => {
              return (
                <Box key={i}>
                  <MessageCard
                    socket={socket}
                    num={i}
                    isDeleted={v.isDeleted}
                    message={v.content}
                    name={v.sender.username}
                    id={v._id}
                    updated={v.updatedAt}
                    time={v.createdAt}
                    isUser={v.sender._id === userData._id}
                  />
                </Box>
              );
            })
          )}
        </Flex>
      </ScrollableFeed>
    </Box>
  );
};

export default ScrollBar;
