import { IsInt, IsNotEmpty, IsNumber, IsOptional, } from "class-validator";

export class DtoExpense{
    @IsNotEmpty()
    @IsNumber()
    amount:number

    @IsNotEmpty()
    @IsOptional()
    description:string

    @IsNotEmpty()
    @IsInt()
    categoryId:number

    @IsNotEmpty()
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