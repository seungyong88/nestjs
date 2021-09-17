import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from "./boards.service";
import { Board } from "./board.model";
import { CreateBoardBto } from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoard();
  }
 
  // @Param() params: string[]
  @Post('/:id')
  deleteBoard(@Param('id') id: string): void {
    console.log("22222222222222");
    this.boardsService.deleteBoard(id);
  }

  // @Body('title') title or @Body('desctiption') desctiption
  // @Post('/')
  // createBoard(
  //   @Body() createBoardBto: CreateBoardBto
  // ):Board {
  //   return this.boardsService.createBoard(createBoardBto);
  // }

  // @Param() params: string[]
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

}