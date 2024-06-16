import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class DtoIncomes{
    @IsNotEmpty()
    @Type(()=>Number)//Transforma o valor em número
    @IsNumber()
    amount:number

    @IsNotEmpty()
    @IsOptional()
    description:string

    @IsNotEmpty()
    @Type(()=>Number)//Transforma o valor em número
    @IsInt()
    categoryId:number

    @IsNotEmpty()
    @Type(()=>Number)//Transforma o valor em número
    @IsInt()
    userId:number
}