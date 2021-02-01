import React from "react";
import { ListItem } from "@chakra-ui/react";
export default function AnswerOption({ selected, value, id, onClick,showAnswer,correct }) {

  function isAnswerCorrect() {

    if(selected === id ) {
      return correct ? "teal.500": "red.500";
    }

    return correct ? "teal.500" : "";
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
      borderColor={`${selected === id ? "teal.200" : "gray.200"}`}
      backgroundColor={showAnswer && isAnswerCorrect}
    >
      {value}
    </ListItem>
  );
}
