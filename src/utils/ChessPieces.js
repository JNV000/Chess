// chess piece class
class ChessPiece {
  /* turns taken will be used for tracking
        things such as if castling, a pawn's first movment,
        and en passants.
    */
  turnsTaken;
  captured;

  /* Types:
  1.pawn, 2. Knight, 3. Rook, 4. Bishop, 5. Queen, 6. King
  */
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.captured = false;
    this.turnsTaken = 0;
  }

  // called when a piece makes a move
  incrementTurnsTaken() {
    this.turnsTaken += 1;
  }

  // not yet implemented, get moves
  getMoves() {
    // return 2d array containing indices of spaces
    // the piece may be moved to.
    // use switch statement to determine piece type
    switch (this.type) {
      case 1: {
        // return call to function for pieces moves
        alert("Pawn, Not Implemented");
        break;
      }
      case 2: {
        alert("Knight, Not Implemented");
        break;
      }
      case 3: {
        alert("Rook, Not Implemented");
        break;
      }
      case 4: {
        alert("Bishop, Not Implemented");
        break;
      }
      case 5: {
        alert("Queen, Not Implemented");
        break;
      }
      case 6: {
        alert("King, Not Implemented");
        break;
      }
      default: {
        alert("Error, not a valid piece");
      }
    }

    alert("Not Implemented");
  }

  // not yet implemented, promotion
}

// returns a list of chess pieces
/*
export default function getPieces() {
  return new ChessPiece();
}
*/
