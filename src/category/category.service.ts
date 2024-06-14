import { Injectable } from '@nestjs/common';
import { DtoCategory } from 'src/category/dto.category/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    
    constructor(private prisma:PrismaService,){}

    async createCategory(dto:DtoCategory){
        try{
            const category= await this.prisma.category.create({
                data:{
                    name:dto.name,
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

    async deleteCategory(dto:DtoCategory){
        try{
            const category=await this.prisma.category.findFirst({
                where:{
                    name:dto.name,//encontrando o nome da categoria
                }
            });

            return this.prisma.category.delete({
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

    async getUserCategory(userId:number){
        try{
            const expenses=await this.prisma.category.findFirst({
                where:{
                    userId:userId
                }
            })

            return expenses;
        }
        catch(error){
            console.log(error);
        }
    }

    async updateCategory(dtoCategory:DtoCategory){
        try{
            const updateCategory=await this.prisma.category.updateMany({
                where:{// where serve para especificar as condições para encontrar as 
                    //categorias que pertencem ao userId fornecido.
                    userId:dtoCategory.userId,
                    name:dtoCategory.name
                },
                data:{//o data define o campo que vai ser atualizado
                    name:dtoCategory.name
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
