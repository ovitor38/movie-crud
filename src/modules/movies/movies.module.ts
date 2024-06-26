import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MovieEntity } from './entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheService } from '../cache/redis/redis.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MoviesController],
  providers: [MoviesService, RedisCacheService],
})
export class MoviesModule {}
