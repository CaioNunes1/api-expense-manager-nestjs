import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, } from "class-validator";


export class DtoCategory{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @Type(()=>Number)//Transforma o valor em número
    @IsInt()
    userId:number
}
// model Category{
//     id Int @id @default(autoincrement())
//     name String
//     expenses Expenses[]
//   }