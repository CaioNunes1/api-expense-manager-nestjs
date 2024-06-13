import { IsInt, IsNotEmpty, IsString, } from "class-validator";


export class DtoCategory{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsInt()
    userId:number
}
// model Category{
//     id Int @id @default(autoincrement())
//     name String
//     expenses Expenses[]
//   }