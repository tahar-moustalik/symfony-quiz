import React, {useState} from "react";
import {ListItem} from "@chakra-ui/react";

export default function MultiAnswerOption({value, id, onClick, showAnswer, selectedAnswers, correct}) {
    const [selected, setSelected] = useState(false);

    function handleSelected() {
        setSelected(!selected);
        onClick(id);
    }

    function isAnswerCorrect() {
        if (selectedAnswers.includes(id)) {
            return correct ? "teal.200" : "red.200";
        }
        return correct ? "teal.200" : "";
    }

    return (
        <ListItem
            padding="6"
            border="2px"
            cursor="pointer"
            borderColor={selected ? "teal.400" : "gray.100"}
            backgroundColor={showAnswer && isAnswerCorrect}
            fontSize="md"
            textAlign="center"
            borderRadius="5px"
            onClick={handleSelected}
            key={id}
        >
            {value}
        </ListItem>
    );
}