import "../assets/styles/model.css";

function Restart({ detail, score,setScore, bestscore,setDetail, }) {

    function handlePlayAgain()
    {
        console.log("hello")
        setScore(0)
        setDetail(0)
    }


  return (
    <div className="restart_container">
      <div className="model_overlay"></div>
      <div className="model_container">
        <p className="model_title">Game Over!</p>
        <p className="model_subtitle">You Selected {detail.name} Twice</p>
        <p className="flag_logo">{detail.flag}</p>
        <div className="model_header">
          <p className="game_rounded">Score : {score} </p>
          <button className="game_rounded" onClick={()=>{handlePlayAgain()}}>Play Again</button>
          <p className="game_rounded">Best Score : {bestscore}</p>
        </div>
      </div>
    </div>
  );
}
export default Restart;
