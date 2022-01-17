import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // // @Body('title') title: string, 
  // // @Body('description') description: string,
  // @Post('/') // 핸들러 레벨
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createdBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(createdBoardDto);
  // }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  
  // @Patch('/:id/status')
  // updateBoardStatus(@Param('id') id: string, @Body('status', BoardStatusValidationPipe) status: BoardStatus) { // 파리미터 레벨에서 status validate 체크
  //   return this.boardsService.updateBoardStatus(id, status);
  // }

}