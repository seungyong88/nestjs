import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(
    // @Body('title') title: string, 
    // @Body('description') description: string,
    @Body() createdBoardDto: CreateBoardDto 
  ): Board {
    return this.boardsService.createBoard(createdBoardDto);
  }


}