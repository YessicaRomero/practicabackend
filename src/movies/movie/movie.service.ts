import { Injectable, NotFoundException } from '@nestjs/common';
import { iMovie } from './movie.interface';
import { error } from 'console';
const base_url: string = "http://localhost:3030/movies/"

@Injectable()
export class MovieService {
    async getMovies(): Promise<iMovie[]>{
        const res = await fetch(base_url);
        const movies = await res.json()
        return movies;

    }

    async getMovieById(id: number): Promise<iMovie>{
        try{
            const res = await fetch(base_url + id);
            const movie = await res.json()
            return movie;
        } catch ( error ){
            throw new NotFoundException(`La pelicula con el id:  ${id} no se encuentra disponible`)
        }
    }
    
}
