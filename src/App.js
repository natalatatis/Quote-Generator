import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Typography } from "@mui/material";
//font awesome for star wars and harry potter icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi, faMagic } from "@fortawesome/free-solid-svg-icons";

//Some quotes from movies
const quotes = [
  "'It's LeviOooosa, not LeviosA!' – Hermione Granger",
  "'Hello There!' – Obi Wan Kenobi",
  "'Yer a wizard Harry!' – Hagrid",
  "'pip pup pip pup!' – R2-D2",
  "'I am your father!' – Darth Vader",
  "'Execute order 66!' – Palpatine",
  "'Help me, Obi Wan Kenobi, you're my only hope.' – Leia Organa",
  "'Do. Or do not. There is no try' – Master Yoda",
  "'Dobby is free!' – Dobby",
  "'Just because you have the emotional range of a teaspoon doesn’t mean we all have'. – Hermione Granger",
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
    <>
      {/* Icons related to the quotes*/}
      <div style={{ fontSize: "50px", textAlign: "center" }}>
        <FontAwesomeIcon icon={faJedi} title="Jedi Order" />
        <FontAwesomeIcon icon={faMagic} title="Magic Wand" />
      </div>

      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" color="#e67151">
          Very profound quote generator
        </Typography>
        <Card sx={{ bgcolor: "#ebf6c2", p: 3, boxShadow: 5, mt: 5 }}>
          <Typography variant="h5" color="#2f6871">
            {quote}
          </Typography>
        </Card>
      </Container>
    </>
  );
}
