import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import MultiAnswerOption from "./MultiAnswerOption";

export default function MultiChoice({ index, row, current }) {
  const [qData] = useState(row);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleAnswerSelected = (answerIndex) => {
    if (selectedAnswers.includes(answerIndex)) {
      let newS = selectedAnswers.filter((elt) => elt !== answerIndex);
      setSelectedAnswers(newS);
    } else {
      let newS = selectedAnswers;
      newS.push(answerIndex);
      setSelectedAnswers(newS);
    }
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
        {qData.multi && (
          <Text fontSize="md">Multiple answers maybe possible</Text>
        )}
        <UnorderedList spacing={8} marginTop="4" listStyleType="none">
          {qData.answers.map((answer, key) => (
            <MultiAnswerOption
              value={answer.value}
              id={key}
              onClick={handleAnswerSelected}
              key={key}
              showAnswer={showAnswer}
              correct={answer.correct}
              selectedAnswers={selectedAnswers}
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


