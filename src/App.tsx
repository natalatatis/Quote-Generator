import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

//Some quotes from movies
const quotes = [
  "It's LeviOooosa, not LeviosA! – Hermione Granger",
  "Hello There! – Obi Wan Kenobi",
  "Yer a wizard Harry! – Hagrid",
  "pip pup pip pup! – R2-D2",
  "I am your father! – Darth Vader",
  "Execute order 66! – Palpatine",
  "Help me, Obi Wan Kenobi, you're my only hope! – Leia Organa",
  "Do. Or do not. There is no try! – Master Yoda",
  "Dobby is free! – Dobby",
  "Just because you have the emotional range of a teaspoon doesn’t mean we all have. – Hermione Granger",
];

//This function will return a random quote from the quotes array
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default function App() {
  const [quote, setQuotes] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes(getRandomQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="text-center mt-5">
      <h2 className="mb-5 text-primary">Very profound quote generator</h2>
      <Card className="shadow-lg p-3">
        <div className="display-4 text-dark">{quote}</div>
      </Card>
    </Container>
  );
}
