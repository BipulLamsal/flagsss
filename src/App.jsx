import { useEffect, useState } from "react";
import "./App.css";
import "./assets/styles/header.css";
import "./assets/styles/flags.css";
import Header from "./components/Header";
import FlagCard from "./components/FlagCard";

function App() {
  const [round, setRound] = useState(1);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    const imgId = [];
    function generateRandom(c) {
      if (c <= round * 2 + 1) {
        const random = Math.floor(Math.random() * 250);
        if (!imgId.includes(random)) {
          imgId.push(random);
          c++;
          generateRandom(c);
        } else {
          generateRandom(c);
        }
      }
    }

    const url = "https://restcountries.com/v3.1/all";
    async function fetchdata() {
      try {
        let newObj = [];
        const response = await fetch(url);
        const json = await response.json();
        generateRandom(1);
        imgId.map((item) => {
          newObj = [
            ...newObj,
            {
              id: item,
              flag: json[item]["flag"],
              name: json[item]["name"]["common"],
            },
          ];
        });

        setFlag([...newObj]);
      } catch (error) {
        console.log("error : ", error);
      }
    }
    fetchdata();
  }, [round]);

  return (
    <>
      <Header round={round}></Header>

      <div className="game_container">
        <FlagCard
          flag={flag}
          setFlag={setFlag}
          round={round}
          setRound={setRound}
        ></FlagCard>
      </div>
    </>
  );
}

export default App;
