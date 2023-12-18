const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const persentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (persentage === 100) emoji = "🥇";
  if (persentage >= 80 && persentage < 100) emoji = "🥈";
  if (persentage >= 60 && persentage < 80) emoji = "🥉";
  if (persentage >= 40 && persentage < 60) emoji = "🏅";
  if (persentage < 40 && persentage >= 0) emoji = "😔";
  if (persentage === 0) emoji = "😢";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of
        {maxPossiblePoints} {Math.ceil(persentage)}%
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
