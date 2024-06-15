import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class DtoIncomes{
    @IsNumber()
    @IsNotEmpty()
    @Type(()=>Number)
    amount:number

    @IsString()
    @IsOptional()
    description?:string

    @IsInt()
    @IsNotEmpty()
    @Type(()=>Number)
    categoryId:number

    @IsInt()
    @IsNotEmpty()
    @Type(()=>Number)
    userId:number
}