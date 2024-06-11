import { AuthDtoSignIn, AuthDtoSignUp } from './dto/auth.dto';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService, private jwt:JwtService, private config:ConfigService){}
    async signup(dto:AuthDtoSignUp){
        try{
            const hash=await argon.hash(dto.password)
            
            const user=await this.prisma.user.create({
                data:{
                    email:dto.email,
                    firstname:dto.firstname,
                    lastname:dto.lastname,
                    hash,//o hash do prisma está recebendo o hash do argon
                }
            })
            return this.signToken(user.id,user.email);//retornando o token dizendo que o usuário existe e logou
        }

        catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code=='P2002'){
                    throw new ForbiddenException('Credentials taken')
                }
            }
            throw error
        }
        //chamar o signtoken
        
    }
    async signin(dto:AuthDtoSignIn){
        //find the user by email
        const user=await this.prisma.user.findUnique({
            where:{
                email:dto.email
            }
        })

        if(!user) throw new ForbiddenException('Credentials incorrect')
            console.log(dto)

        //compara as senhas
        const pwMatches= await argon.verify(
            user.hash,dto.password//verifica se a senha do usuário buscado é igual a senha da conta que foi buscado que está no banco
        );
        if(!pwMatches) throw new ForbiddenException('Password incorrect');

        console.log('usuário logado',dto)
        return this.signToken(user.id,user.email);
    }


    async signToken(userId:number,email:string,):Promise<{access_token:string}>{
        const secret=this.config.get('JWT_SECRET')

        const payload={
            sub:userId,
            email,
        }
        console.log('usuário logado')

        const token=await this.jwt.signAsync(payload,{
            expiresIn:'15m',
            //quando damos o token ao user, o usuário pode fazer ações na nossa plataforma que estamos contruindo por 15 min, como 
            //por exemplo o sigaa
            
            secret:secret,// basicamente a senha
        })

        return{
            access_token:token,
        };
    }
}
