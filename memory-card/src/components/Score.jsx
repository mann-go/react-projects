import "./styles/score.css";

function Score({ score, highScore }) {    
    return (
        <div className="score-container">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}

export default Score;