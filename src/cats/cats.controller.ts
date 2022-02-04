import { Body, Controller, Get, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
// @UseInterceptors(SuccessIn)
export class CatsController {
  constructor(private readonly catsService: CatsService) {} 

  @Get()
  gettAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat'
  }

  @ApiResponse({
    status: 500,
    description: 'ServerError',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @Put(':id')
  updateCat() {
    return 'update cat'
  }
  
  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat'
  }
}