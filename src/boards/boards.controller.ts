import { Controller, Get } from '@nestjs/common';
import { BoardsService } from "./boards.service";
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
     
  }

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoard();
  }


  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(), // 유니크한 값을 게시판 id에 줄수 있음
      title,
      description,
      status: BoardStatus.PUBLIC
    }
  }

}
