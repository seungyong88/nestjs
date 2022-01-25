import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorater';
import { User } from 'src/auth/user.entity';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('Boards');
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Get('/all')
  getAllBoardById(@GetUser() user:User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardsService.getAllBoardsById(user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id:number) : Promise<Board> {
    return this.boardsService.getBoardById(id);  
  }

  // // @Body('title') title: string, 
  // // @Body('description') description: string,
  @Post('/') // 핸들러 레벨
  @UsePipes(ValidationPipe)
  createBoard(@Body() createdBoardDto: CreateBoardDto, @GetUser() user: User): Promise<Board> {
    this.logger.verbose(`User ${user.username} creating a new board. Payload: ${JSON.stringify(createdBoardDto)}`)
    return this.boardsService.createBoard(createdBoardDto, user);
  }

  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<void> {
    return this.boardsService.deleteBoard(id, user);
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