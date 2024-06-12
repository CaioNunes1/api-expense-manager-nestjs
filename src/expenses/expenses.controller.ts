import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DtoExpense } from './dto.expenses/expenses.dto';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly service:ExpensesService){}
    
    @HttpCode(HttpStatus.OK)
    @Post('create')
    async ExpenseInfo(
        @Body() dto:DtoExpense
    ){
        console.log(dto)
        return this.service.createCategory(dto);
    }
}
