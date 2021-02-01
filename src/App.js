import { Container, Grid, GridItem, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Quiz from "./Quiz";

const CATEGORIES = [
  "php",
  "architecture",
  "automated-tests",
  "cache-http",
  "command-line",
  "config",
  "controllers",
  "dependency-injection",
  "forms",
  "http",
  "misc",
  "process",
  "psr",
  "routing",
  "security",
  "standardization",
  "validation",
  "yaml",
];

function Home() {
  return (
    <Container maxW="6xl">
      <Header text="Symfony Certification Quiz" />
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {CATEGORIES.map((category) => (
          <Link key={category} to={`/quiz/${category}`}>
            <GridItem
              h="40"
              p={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              borderRadius="md"
              color="white"
              bgGradient="linear(to-r, teal.500,green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              <Center>{category.replace("-", " ").toUpperCase()}</Center>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz/:category" exact>
          <Quiz />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
