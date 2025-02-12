import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Typography, Button } from "@mui/material";
//font awesome for star wars and harry potter icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi, faMagic } from "@fortawesome/free-solid-svg-icons";
import AutorenewIcon from "@mui/icons-material/Autorenew";

//Some quotes from movies
const quotes = [
  "'It's LeviOooosa, not LeviosA!' – Hermione Granger",
  "'Hello There!' – Obi Wan Kenobi",
  "'Yer a wizard 'Arry!' – Hagrid",
  "'pip pup pip pup!' – R2-D2",
  "'I am your father!' – Darth Vader",
  "'Execute Order 66!' – Palpatine",
  "'Help me, Obi Wan Kenobi, you're my only hope.' – Leia Organa",
  "'Do. Or do not. There is no try.' – Master Yoda",
  "'Dobby is free!' – Dobby",
  "'Just because you have the emotional range of a teaspoon doesn’t mean we all have'. – Hermione Granger",
  "'This is the way.' - The Mandalorian",
  "'I've got a bad feeling about this.' - Most Star Wars characters",
  "'It's a trap!' - Admirant Ackbar",
  "'I solemnly swear that I am up to no good.' - Harry Potter",
  "'You're just as sane as I am' - Luna Lovegood",
  "'He's not Fred, I am' - George Weasley",
  "'I find your lack of faith disturbing.' - Darth Vader",
  "'I've always wanted to use that spell!' - Minerva McGonagall",
];

//This function will return a random quote from the quotes array
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default function App() {
  const [quote, setQuotes] = useState(getRandomQuote());

  //Sets a new quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes(getRandomQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Icons related to the quotes*/}
      <div style={{ fontSize: "50px", textAlign: "center", marginTop: "50px" }}>
        <FontAwesomeIcon icon={faJedi} title="Jedi Order" />
        <FontAwesomeIcon icon={faMagic} title="Magic Wand" />
      </div>

      {/*Title*/}
      <Container sx={{ textAlign: "center", mt: 15 }}>
        <Typography variant="h4" color="#1029af" sx={{ fontWeight: "bold" }}>
          Very profound quote generator
        </Typography>
        {/*Quotes*/}
        <Card sx={{ bgcolor: "#5c77ef", p: 3, boxShadow: 5, mt: 5 }}>
          <Typography variant="h5" color="white">
            {quote}
          </Typography>
        </Card>
        {/*New Quote Button*/}
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: "#eb4d62", color: "white" }}
          endIcon={<AutorenewIcon />}
          size="large"
          onClick={() => setQuotes(getRandomQuote())}
        >
          New Quote
        </Button>
      </Container>
    </>
  );
} //#efd45c
