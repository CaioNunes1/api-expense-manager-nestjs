import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DtoCategory } from './dto.category';

@Injectable()
export class ExpensesService {
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
