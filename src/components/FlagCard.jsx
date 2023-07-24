import { useState } from "react";
import Restart from './Restart'
function FlagCard({
  flag,
  setFlag,
  round,
  setRound,
  score,
  setScore,
  bestscore,
  setBestScore,
}) {
  const [selected, setSelected] = useState([]);
  const [over,setOver] = useState(0)
  const handleFlagClick = (item) => {
    if (
      !selected.some((element) => {
        return element.id === item.id;
      })
    ) {
      setSelected([...selected, item]);
      setScore(score + 1);
      shuffleDeck();
      setBestScore(score + 1 > bestscore ? score + 1 : bestscore);

      if (selected.length + 1 == flag.length) {
        setSelected([]);
        setRound(round + 1);
      }
    } else {
      setOver(item)
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
      {(over != 0)?<Restart detail={over} setDetail = {setOver}score={score} bestscore={bestscore} setScore={setScore} ></Restart>:<></>}
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
