import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllTask(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
  
  @Get('/:id')
  getBoardById(@Param('id') id:number) : Promise<Board> {
    return this.boardsService.getBoardById(id);  
  }

  // // @Body('title') title: string, 
  // // @Body('description') description: string,
  @Post('/') // 핸들러 레벨
  @UsePipes(ValidationPipe)
  createBoard(@Body() createdBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createdBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id)
  }

  @Patch('/:id/status')
  updateBoardStatus(@Param('id', ParseIntPipe) id: number, @Body('status', BoardStatusValidationPipe) status: BoardStatus) { // 파리미터 레벨에서 status validate 체크
    return this.boardsService.updateBoardStatus(id, status);
  }

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