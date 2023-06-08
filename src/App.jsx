import Square from "./components/Square";
import "./index.css";

// board will be refectored in the reducer/hooks
const board = Array(8).fill(Array(8).fill(null));

let squareIsWhite = true;

// grid-template-columns: repeat(8, 1fr);

function App() {
  return <main>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="board">
          {board.map((row, index1) => (
            row.map((square, index2) => (
            <Square
              key={index1+"-"+index2}
              id={index1+"-"+index2}
              squareClass={nextSquareClass(index1, index2)}
              // handle click
              marker={" "}
          />
        ))))}
      </div>
    </main>;
}

const nextSquareClass = (col, row) => {
    if(row%2 === 0) {
      if(col%2 === 0) {
        return "whiteSquare";
      }
      else {
        return "blackSquare";
      }
    }
    else {
      if(col%2 === 0) {
        return "blackSquare";
      }
      else {
        return "whiteSquare";
      }
    }
}

export default App;
