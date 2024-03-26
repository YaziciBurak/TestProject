import { Movie } from './movie.interface';

export class OldMovie implements Movie {
  name: string;
  director: string;
  year: number;
  constructor(name:string, director:string, year:number) {
    this.name = name;
    this.director = director;
    this.year = year;
  }
  }
