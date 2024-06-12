import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DtoExpense } from './dto.expenses/expenses.dto';

@Injectable()
export class ExpensesService {
    constructor(private prisma:PrismaService){}

    async createCategory(dto:DtoExpense){
        try{
            const category= await this.prisma.expenses.create({
                data:{
                    amount:dto.amount,
                    description:dto.description,
                    categoryId:dto.categoryId,
                    userId:dto.userId
                }
            });
            return category
        }
        catch(error){
            console.log(error);
            throw error;
        }
        
    }
    
}
