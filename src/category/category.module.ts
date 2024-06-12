import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers:[CategoryService,PrismaService],
  controllers: [CategoryController]
})
export class CategoryModule {}
