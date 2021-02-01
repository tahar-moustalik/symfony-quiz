import React from "react";
import { Box, ListItem } from "@chakra-ui/react";
import "./App.css";
export default function AnswerOption({ selected, value, id, onClick,showAnswer,correct }) {

  function isAnswerCorrect() {

    if(selected === id ) {
      return correct ? "teal.200": "red.200";
    }

    return correct ? "teal.200" : "";
  }
  return (
    <ListItem
      padding="6"
      border="1px"
      cursor="pointer"
      fontSize="md"
      textAlign="center"
      borderRadius="5px"
      onClick={() => onClick(id)}
      borderColor={`${selected === id ? "teal.500" : "gray.200"}`}
      backgroundColor={showAnswer && isAnswerCorrect}
    >
      {value}
    </ListItem>
  );
}
