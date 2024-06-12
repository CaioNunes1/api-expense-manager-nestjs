import { IsNotEmpty, IsString, } from "class-validator";


export class DtoCategory{
    @IsNotEmpty()
    @IsString()
    name:string

}
// model Category{
//     id Int @id @default(autoincrement())
//     name String
//     expenses Expenses[]
//   }