import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import MultiChoice from "./MultiChoice";
import SingleChoice from "./SingleChoice";

function Quiz() {
  const { category } = useParams();
  const [data, setData] = useState({
    questions: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nav, setNav] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/tahar-moustalik/data-symfony-quiz-app/main/data/${category}.json`)
      .then((response) => response.json())
      .then((data) => {
        data.questions.forEach((element, index) => {
          data.questions[index].multi =
            element.answers.filter((answer) => answer.correct).length > 1;

          data.questions[index].answers.forEach((answer) => {
            answer.selected = false;
          });
        });
        setData(data);
        setNav([...Array(data.questions.length)].map((v, i) => i + 1));
      });
  },[] );

  function goToQuestion(number) {
    setCurrentQuestion(number-1);
  }

  function nextQuestion() {
    const next = (nav.length + currentQuestion + 1) % nav.length;
    setCurrentQuestion(next);
  }

  function previousQuestion() {
    const previous = (nav.length + currentQuestion - 1) % nav.length;
    setCurrentQuestion(previous);
  }

  return (
    <Container maxW="6xl">
      <Header
        textAlign="center"
        paddingTop="8"
        paddingBottom="8"
        text={`${category.toUpperCase()} QUIZ`}
      />
      <HStack wrap="wrap" justifyContent="center">
        {nav.map((elt, index) => (
          <Button
            backgroundColor={currentQuestion === index && "teal.200"}
            key={elt}
            onClick={() => goToQuestion(elt)}
            marginBottom="2"
          >
            {elt}
          </Button>
        ))}
      </HStack>

      <Flex justifyContent="space-between" marginY="6" alignItems="stretch">
        <Button
          fontSize="24px"
          onClick={previousQuestion}
          backgroundColor="teal.200"
        >
          👈
        </Button>
        <Box marginX="2" flex="1">
          {data.questions.map((row, index) => {
            return row.multi ? (
              <MultiChoice
                row={row}
                index={index}
                current={currentQuestion}
                key={index}
              />
            ) : (
              <SingleChoice
                key={index}
                index={index}
                row={row}
                current={currentQuestion}
              />
            );
          })}
        </Box>

        <Button
          fontSize="24px"
          onClick={nextQuestion}
          backgroundColor="teal.200"
        >
          👉
        </Button>
      </Flex>
    </Container>
  );
}

export default Quiz;
