const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      {/* <div>
        <select
          className="question"
          onChange={(e) =>
            dispatch({
              type: "noOfQuestionsSelected",
              payload: Number(e.target.value),
            })
          }
        >
          <option defaultValue={0}>Choose No Of Question</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select> 
         <select className="level">
          <option selected disabled>
            Filter Questions
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select> 
      </div>*/}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
