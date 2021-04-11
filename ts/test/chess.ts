export class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      new King("White", "E", 1),
      new King("Black", "E", 8),
      new Queen("White", "D", 1),
      new Queen("Black", "D", 8),
      new Bishop("White", "C", 1),
      new Bishop("White", "F", 1),
      new Bishop("Black", "C", 8),
      new Bishop("Black", "F", 8),
    ];
  }
}

// 坐标
type Color = "Black" | "White";
type FileChar = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: FileChar, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}
// 棋子，抽象类
abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: FileChar, rank: Rank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}
// 棋子分类
class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {
  canMoveTo(position: Position): boolean {
    return true;
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position): boolean {
    return true;
  }
}
class Knight extends Piece {
  canMoveTo(position: Position): boolean {
    return true;
  }
}
class Rook extends Piece {
  canMoveTo(position: Position): boolean {
    return true;
  }
}
class Pawn extends Piece {
  canMoveTo(position: Position): boolean {
    return true;
  }
}
