# ChessGame-QueenMovement
Multiple queens are placed in a chessboard and their movements are tracked and manipulated

Three queens(q, q2, q3) are placed in a chessboard and their initial positions are already defined.
The following operations are performed on a selected queen
1. moveForward - The queen is moved one step in a given direction(N, S, E, W, NE, NW, SE, SW)
2. jumpForward - The queen is moved 'd' number of steps in a given direction(N, S, E, W, NE, NW, SE, SW)
3. showPos - Position of the queen is displayed

When a queen's position caused by a movement clashes with another, the moved queen is backtracked to her original position
