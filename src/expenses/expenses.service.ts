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

    async deleteCategory(dto:DtoExpense){
        try{
            const category=await this.prisma.expenses.findFirst({
                where:{
                    categoryId:dto.categoryId,//encontrando o nome da categoria
                }
            });

            return this.prisma.expenses.delete({
                where:{
                    id:category.id//depois deletando a categoria
                },
            })
        }
        catch(error){
            console.log(error)
            
            throw error
        
        }
    }
    
}
