function Header({ round,score,bestscore }) {
  return (
    <div className="game_header">
      <div className="game_rounded">Best : {bestscore}</div>
      <div className="game_title">
        <p className="game_title_main">Flaggsss</p>
        <p className="game_title_round">Round : {round}</p>
      </div>

      <div className="game_rounded">Score : {score}</div>
    </div>
  );
}

export default Header;
