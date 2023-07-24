import { useState } from "react";
function FlagCard({ flag, setFlag, round, setRound }) {
  const [selected, setSelected] = useState([]);

  const handleFlagClick = (item) => {
    if (
      !selected.some((element) => {
        return element.id === item.id;
      })
    ) {
      setSelected([...selected, item]);
      shuffleDeck();

      if (selected.length + 1 == flag.length) {
        setSelected([]);
        setRound(round + 1);
      }
    } else {
      console.log("You lost");
      setRound(1);
      setSelected([]);
    }
  };

  function shuffleDeck() {
    const shuffleFlag = [...flag];
    for (let i = shuffleFlag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffleFlag[i], shuffleFlag[j]] = [shuffleFlag[j], shuffleFlag[i]];
    }
    setFlag(shuffleFlag);
  }

  return (
    <>
      {flag.map((item) => {
        return (
          <div
            className="flag_card"
            key={item.name}
            onClick={() => {
              handleFlagClick(item);
            }}
          >
            <p className="flag_logo">{item.flag}</p>
            <p className="flag_name">{item.name}</p>
          </div>
        );
      })}
    </>
  );
}
export default FlagCard;
