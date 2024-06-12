import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, } from "class-validator";

export class DtoExpense{
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
// model Expenses{
//     id Int @id @default(autoincrement())
//     amount Float
//     description String?
//     date DateTime @default(now())
//     categoryId Int
//     userId Int
//     user User @relation(fields: [userId], references: [id])
//     category Category @relation(fields: [categoryId],references: [id])
//   }
  
//   model Category{
//     id Int @id @default(autoincrement())
//     name String
//     expenses Expenses[]
//   }