import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DtoExpense } from './dto.expenses/expenses.dto';

@Injectable()
export class ExpensesService {
    constructor(private prisma:PrismaService){}

    async createExpense(dto:DtoExpense){
        try{
            const category= await this.prisma.expenses.create({
                data:{
                    amount:dto.amount,
                    description:dto.description,
                    categoryId:dto.categoryId,
                    userId:dto.userId
                }
            });
            console.log(category)
            return category
        }
        catch(error){
            console.log(error);
            throw error;
        }
        
    }

    async deleteExpense(dto:DtoExpense){
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

    async getUserExpenses(userId:number, categoryId:number){
        try{

            const expenses=await this.prisma.expenses.findFirst({
                where:{
                    userId:userId,
                    categoryId:categoryId
                }
            })

            return expenses;
        } 
        catch(error){
            console.log(error);
        }
    }

    async updateExpense(dto:DtoExpense){
        try{
            const updateCategory=await this.prisma.expenses.updateMany({
                where:{// where serve para especificar as condições para encontrar as 
                    //categorias que pertencem ao userId fornecido.
                    categoryId:dto.categoryId,
                },
                data:{//o data define o campo que vai ser atualizado
                    amount:dto.amount,
                    description:dto.description,
                }
            })
            return updateCategory
        }
        catch(error){
            console.log(error)
            throw error
        }
    }


    
}
