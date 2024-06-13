import { Body, Controller, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { DtoCategory } from './dto.category';

@Controller('category')
export class CategoryController {
    constructor(private readonly category:CategoryService){}

    @HttpCode(HttpStatus.OK)
    @Post('create')
    async categoryInfo(
        @Body() dto: DtoCategory
    ){
        return this.category.createCategory(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Delete('delete')
    async deleteCategoryController(
        @Body() dtoCategory:DtoCategory){
            console.log('deletando categoria');
            return this.category.deleteCategory(dtoCategory);
    }
}
