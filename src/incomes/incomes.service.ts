import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DtoIncomes } from './dto';

@Injectable()
export class IncomesService {
    constructor(private prisma:PrismaService){}
    //todos os end points foram testados, só falta o back-end
    async createIncome(dto:DtoIncomes){
        try{
            const income= await this.prisma.incomes.create({
                data:{
                    amount:dto.amount,
                    description:dto.description,
                    categoryId:dto.categoryId,
                    userId:dto.userId
                }
            });
            return income
        }
        catch(error){
            console.log(error);
            throw error;
        }
        
    }

    async deleteIncome(dto:DtoIncomes){
        try{
            const category=await this.prisma.incomes.findFirst({
                where:{
                    categoryId:dto.categoryId,//encontrando o nome da categoria
                }
            });

            return this.prisma.incomes.delete({
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

    async getUserIncomes(userId:number){
        try{

            const incomes=await this.prisma.incomes.findMany({
                where:{
                    userId:userId
                }
            })

            return incomes;
        }
        catch(error){
            console.log(error);
        }
    }

    async updateIncomes(dto:DtoIncomes){
        try{
            const updateIncomes=await this.prisma.incomes.updateMany({
                where:{// where serve para especificar as condições para encontrar as 
                    //categorias que pertencem ao userId fornecido.
                    categoryId:dto.categoryId,
                    
                },
                data:{//o data define o campo que vai ser atualizado
                    amount:dto.amount,
                    description:dto.description,
                }
            })
            return updateIncomes
        }
        catch(error){
            console.log(error)
            throw error
        }
    }
}
