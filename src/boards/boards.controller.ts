import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from "./boards.service";
import { Board } from "./board.model";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
     
  }

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoard();
  }
 
  // @Body('title') title or @Body('desctiption') desctiption
  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ):Board {
    return this.boardsService.createBoard(title, description);
  }

}
