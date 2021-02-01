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
            return correct ? "teal.500" : "red.500";
        }
        return correct ? "teal.500" : "";
    }

    return (
        <ListItem
            padding="6"
            border="2px"
            cursor="pointer"
            borderColor={selected ? "teal.200" : "gray.100"}
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