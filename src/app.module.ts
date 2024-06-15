import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ExpensesModule } from './expenses/expenses.module';
import { CategoryModule } from './category/category.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    ExpensesModule,
    CategoryModule,
    IncomesModule],
})
export class AppModule {}
