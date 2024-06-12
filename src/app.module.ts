import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    ExpensesModule,
    CategoryModule],
  providers: [CategoryService],
})
export class AppModule {}
