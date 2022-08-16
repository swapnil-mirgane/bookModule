import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[
    TypeOrmModule.forFeature([BookEntity])
  ],
})
export class BookModule {}
