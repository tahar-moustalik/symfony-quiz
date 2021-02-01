import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import AnswerOption from "./AnswerOption";

export default function SingleChoice({ index, row, current }) {
  const [qData] = useState(row);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerSelected = (answerIndex) => {
    setSelected(answerIndex);
  };

  return (
    current === index && (
      <Flex direction="column">
        <Heading as="h2" textAlign="center">
          Question n° {index + 1}
        </Heading>
        <Text fontSize="xl" textAlign="center">
          {qData.question}
        </Text>

        <UnorderedList spacing={8} marginTop="4" listStyleType="none">
          {qData.answers.map((answer, key) => (
            <AnswerOption
              selected={selected}
              value={answer.value}
              id={key}
              onClick={handleAnswerSelected}
              key={key}
              showAnswer={showAnswer}
              correct={answer.correct}
            />
          ))}
        </UnorderedList>
        <Button
          marginTop="4"
          onClick={() => setShowAnswer(!showAnswer)}
          alignSelf="flex-end"
        >
          Show answer
        </Button>
      </Flex>
    )
  );
}
