import Square from "./components/Square";
import "./index.css";
import ChessPiece from "./utils/ChessPieces.js";

// board will be refectored in the reducer/hooks
// const board = Array(8).fill(Array(8).fill(null));
// update board array to hold pices
const getStartingBoard = () => {
  const newBoard = [];
  let nextRow = [];
  /*
  nextRow[0] = new ChessPiece(3, "black");
  nextRow[1] = new ChessPiece(2, "black");
  nextRow[2] = new ChessPiece(4, "black");
  nextRow[3] = new ChessPiece(5, "black");
  nextRow[4] = new ChessPiece(6, "black");
  nextRow[5] = new ChessPiece(4, "black");
  nextRow[6] = new ChessPiece(2, "black");
  nextRow[7] = new ChessPiece(3, "black");
  */
  for (let i = 0; i <= 7; i++) {
    nextRow = [];
    switch (i) {
      case 0:
        nextRow[0] = new ChessPiece(3, "black");
        nextRow[1] = new ChessPiece(2, "black");
        nextRow[2] = new ChessPiece(4, "black");
        nextRow[3] = new ChessPiece(5, "black");
        nextRow[4] = new ChessPiece(6, "black");
        nextRow[5] = new ChessPiece(4, "black");
        nextRow[6] = new ChessPiece(2, "black");
        nextRow[7] = new ChessPiece(3, "black");
        // add row to board
        newBoard.push(nextRow);
        break;
      case 1: {
        for (let j = 0; j <= 7; j++) {
          nextRow[j] = new ChessPiece(1, "black");
        }
        newBoard.push(nextRow);
        break;
      }
      case 6: {
        for (let j = 0; j <= 7; j++) {
          nextRow[j] = new ChessPiece(1, "white");
        }
        newBoard.push(nextRow);
        break;
      }
      case 7: {
        nextRow[0] = new ChessPiece(3, "white");
        nextRow[1] = new ChessPiece(2, "white");
        nextRow[2] = new ChessPiece(4, "white");
        nextRow[3] = new ChessPiece(5, "white");
        nextRow[4] = new ChessPiece(6, "white");
        nextRow[5] = new ChessPiece(4, "white");
        nextRow[6] = new ChessPiece(2, "white");
        nextRow[7] = new ChessPiece(3, "white");
        // add row to board
        newBoard.push(nextRow);
        break;
      }
      default: {
        // most rows start empty
        for (let j = 0; j <= 7; j++) {
          nextRow[j] = null;
        }
        newBoard.push(nextRow);
        break;
      }
    }
    /*
    for (let j = 0; j <= 7; j++) {
      if (i === 1) {
        newBoard[i][j] = new ChessPiece(1, "black");
      } else if (i === 6) {
        newBoard[i][j] = new ChessPiece(1, "white");
      } else {
        newBoard[i][j] = null;
      }
    }
    */
  }

  return newBoard;
};

const board = getStartingBoard();

// grid-template-columns: repeat(8, 1fr);

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="board">
        {board.map((row, index1) =>
          row.map((square, index2) => (
            <Square
              key={index1 + "-" + index2}
              id={index1 + "-" + index2}
              squareClass={nextSquareClass(index1, index2)}
              // handle click
              marker={getPieceImage(board[index1][index2])}
            />
          ))
        )}
      </div>
    </main>
  );
}

// move to utils
const nextSquareClass = (col, row) => {
  if (row % 2 === 0) {
    if (col % 2 === 0) {
      return "whiteSquare";
    } else {
      return "blackSquare";
    }
  } else {
    if (col % 2 === 0) {
      return "blackSquare";
    } else {
      return "whiteSquare";
    }
  }
};

const getPieceImage = (piece) => {
  if (piece === null) {
    return " ";
  }
  if (piece.color === "black") {
    // switch on piced type
    switch (piece.type) {
      case 1: {
        // return call to function for piece's moves
        return "black pawn";
      }
      case 2: {
        return "black knight";
      }
      case 3: {
        return "black rook";
      }
      case 4: {
        return "black bishop";
      }
      case 5: {
        return "black queen";
      }
      case 6: {
        return "black king";
      }
      default: {
        return "Error, not a valid piece";
      }
    }
  } else {
    switch (piece.type) {
      case 1: {
        // return call to function for piece's moves
        return "white pawn";
      }
      case 2: {
        return "white knight";
      }
      case 3: {
        return "white rook";
      }
      case 4: {
        return "white bishop";
      }
      case 5: {
        return "white queen";
      }
      case 6: {
        return "white king";
      }
      default: {
        return "Error, not a valid piece";
      }
    }
  }
};

//

export default App;
