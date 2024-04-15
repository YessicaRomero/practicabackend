import { Module } from '@nestjs/common';
import { MovieModule } from './movies/movie/movie.module';


@Module({
  imports: [MovieModule],
  
})
export class AppModule {}
