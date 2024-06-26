import { Body, Controller, Delete, Get, HttpCode, HttpStatus, ParseIntPipe, Post, Put } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { DtoIncomes } from './dto';

@Controller('incomes')
export class IncomesController {
    constructor(private readonly incomeService:IncomesService){}
    //todos os end points foram testados, só falta o back-end
    @HttpCode(HttpStatus.OK)
    @Post('create')
    async createIncome(@Body() dtoIncome: DtoIncomes) {
        return this.incomeService.createIncome(dtoIncome);
    }

    @HttpCode(HttpStatus.OK)
    @Delete('delete')
    async deleteIncome(@Body() dtoIncome:DtoIncomes){
        return this.incomeService.deleteIncome(dtoIncome);
    }

    @HttpCode(HttpStatus.OK)
    @Get('getUserIncome')
    async getUserIncomeById(
        @Body('userId',ParseIntPipe) userId:number){
        return this.incomeService.getUserIncomes(userId);
    }

    @HttpCode(HttpStatus.OK)
    @Put('updateIncome')
    async updateIncome(@Body() dtoIncome:DtoIncomes){
        return this.incomeService.updateIncomes(dtoIncome);
    }
}
