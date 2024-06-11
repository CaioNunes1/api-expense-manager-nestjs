import { AuthGuard } from "@nestjs/passport";

export class JwtGuard extends AuthGuard('jwt'){
    constructor(){
        super();
    }
    // Proteger Rotas: O JwtGuard é utilizado para proteger 
    // rotas específicas, garantindo que apenas usuários autenticados 
    //com um JWT válido possam acessá-las.

    // Extensão de AuthGuard: A classe JwtGuard estende AuthGuard e especifica a estratégia 'jwt'. Isso significa 
    // que qualquer rota protegida por JwtGuard exigirá um JWT válido.Construtor: O construtor
    // chama super(), que inicializa a classe pai AuthGuard com a estratégia JWT. Isso é necessário para que o 
    // guardião utilize a lógica de autenticação JWT.
}