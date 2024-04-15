import { Controller, Get, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { MovieService } from './movie.service';

import { iMovie } from './movie.interface';

@Controller('movies')
export class MovieController {
   public constructor(private readonly movieService: MovieService){}
    @Get()
    getMovies(): Promise<iMovie[]>{
        return this.movieService.getMovies();
    }
    @Get()
   async getMovieById(@Param('id' , new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
)
id: number,
): Promise<any> {
    return await this.movieService.getMovieById(id)
}
    
}
