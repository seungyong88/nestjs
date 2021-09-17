import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoard(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(), // 유니크한 값을 게시판 id에 줄수 있음
      title: title,
      description: description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }

}