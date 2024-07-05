import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDtoSignIn, AuthDtoSignUp } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    
    @HttpCode(HttpStatus.OK)
    @Post('signup')//cadastrando
    async signup(
        @Body() dto:AuthDtoSignUp){
            console.log(dto)
            return this.authService.signup(dto)
        }

    
    @HttpCode(HttpStatus.OK)
    @Post('signin')//logando na conta
    async signin(
        @Body() dto:AuthDtoSignIn
    ){
        console.log('logando usuário',dto);
        return this.authService.signin(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Get('getUser')//logando na conta
    async getUserController(
        @Query('email') email:string
    ){
        console.log('logando usuário',email);
        return this.authService.getUser(email);
    }

}
