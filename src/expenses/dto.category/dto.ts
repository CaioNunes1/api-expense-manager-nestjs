import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { DtoExpense } from "../dto.expenses";

export class DtoCategory{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DtoExpense)
    expenses: DtoExpense[];
}
// model Category{
//     id Int @id @default(autoincrement())
//     name String
//     expenses Expenses[]
//   }