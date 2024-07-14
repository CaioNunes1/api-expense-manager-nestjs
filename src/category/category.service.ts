import { Injectable } from '@nestjs/common';
import { DtoCategory } from 'src/category/dto.category/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    
    constructor(private prisma:PrismaService,){}

    async createCategory(dto:DtoCategory)/*: Promise<DtoCategory>*/ {
        try{
            const category= await this.prisma.category.create({
                data:{
                    name:dto.name,
                    userId:dto.userId,
                }
            });
            console.log("Categoria criada")
            return category;
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
                    id:category.id,//depois deletando a categoria
                    name:dto.name,
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
            return this.prisma.category.findMany({
                where:{
                    userId:userId
                }
            })

        }
        catch(error){
            console.log(error);
        }
    }

    async updateCategory(dtoCategory:DtoCategory){
        try{
            return this.prisma.category.updateMany({
                where:{// where serve para especificar as condições para encontrar as 
                    //categorias que pertencem ao userId fornecido.
                    userId:dtoCategory.userId,
                    name:dtoCategory.name
                },
                data:{//o data define o campo que vai ser atualizado
                    name:dtoCategory.newCategoryName
                }
            });
        }
        catch(error){
            console.log(error)
            throw error
        }
    }

    async getCategoryId(name:string){
        try{
            const category= await this.prisma.category.findFirst({
                where:{
                 name:name   
                }
            })
            return category.id;
        }
        catch(e){
            console.log(e);
        }
    }
}
