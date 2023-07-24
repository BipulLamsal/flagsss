function Header({ round }) {
  return (
    <div className="game_header">
      <div className="game_rounded">Best : 20</div>
      <div className="game_title">
        <p className="game_title_main">Flaggsss</p>
        <p className="game_title_round">Round : {round}</p>
      </div>

      <div className="game_rounded">Score : 20</div>
    </div>
  );
}

export default Header;
