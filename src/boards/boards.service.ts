import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';
import { CreateBoardBto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoard(): Board[] {
    return this.boards;
  }

  createBoard(createBoardBto: CreateBoardBto) {
    const { title, description }  = createBoardBto;
    const board: Board = {
      id: uuid(), // 유니크한 값을 게시판 id에 줄수 있음
      title,
      description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string) :Board{
    return this.boards.find(board => board.id === id);
  }

  deleteBoard(id: string) :void{
    this.boards = this.boards.filter(board => board.id !== id);
  }

}