import { Body, Controller, Delete, Get, HttpCode, HttpStatus, ParseIntPipe, Post, Put, Query, } from '@nestjs/common';
import { CategoryService } from './category.service';
import { DtoCategory } from './dto.category';

@Controller('category')
export class CategoryController {
    constructor(private readonly category:CategoryService){}

    @HttpCode(HttpStatus.OK)
    @Post('create')
    async createCategoryController(
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

    @HttpCode(HttpStatus.OK)
    @Get('getUserCategoryById')
    async getUserCategoryById(@Query('userId',ParseIntPipe) userId:number){
        console.log('buscando usuário de id',userId)
        return this.category.getUserCategory(userId);
    }

    @HttpCode(HttpStatus.OK)
    @Put('updateCategory')
    async updateCategory(@Body() dtoCategory:DtoCategory,@Query('newName') newName:string){
        console.log(dtoCategory)
        console.log("chamando updateCategory")
        return this.category.updateCategory(dtoCategory,newName);
        
    }

    @HttpCode(HttpStatus.OK)
    @Get('getCategoryId')
    async getCategoryIdController(@Query() dto:DtoCategory){
        console.log('getting category');
        return this.category.getCategoryId(dto)
    }
}
