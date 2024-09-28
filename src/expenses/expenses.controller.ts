import { Body, Controller, Delete, Get, HttpCode, HttpStatus, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DtoExpense } from './dto.expenses/expenses.dto';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly service:ExpensesService){}
    //CREATE
    @HttpCode(HttpStatus.OK)
    @Post('create')
    async ExpenseInfoController(
        @Body() dto:DtoExpense
    ){
        console.log(dto)
        return this.service.createExpense(dto);
    }

    //DELETE
    @HttpCode(HttpStatus.OK)
    @Delete('delete')
    async deleteExpenseController(
        @Body() dto:DtoExpense
    ){
        return this.service.deleteExpense(dto)
    }

    //GET
    @HttpCode(HttpStatus.OK)
    @Get('getUserExpensesById')
    async getUserExpensesController(
        @Query('userId',ParseIntPipe) userId:number, @Query('categoryId',ParseIntPipe) categoryId:number
    ){
        console.log("chamando função getUserExpenses")
        return this.service.getUserExpenses(userId,categoryId);
    }

    @HttpCode(HttpStatus.OK)
    @Put('updateExpense')
    async updateExpense(@Body() dtoExpense:DtoExpense){
        console.log(dtoExpense)
        return this.service.updateCategory(dtoExpense);
    }


}
