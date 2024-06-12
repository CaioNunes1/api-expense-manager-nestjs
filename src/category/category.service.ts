import { Injectable } from '@nestjs/common';
import { DtoCategory } from 'src/category/dto.category/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    
    constructor(private prisma:PrismaService){}

    async createCategory(dto:DtoCategory){
        try{
            const category= await this.prisma.category.create({
                data:{
                    name:dto.name,
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
