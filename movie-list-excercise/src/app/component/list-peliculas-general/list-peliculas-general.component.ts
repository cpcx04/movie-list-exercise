import { Component } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { Film } from '../../models/movie-list.interface';

@Component({
  selector: 'app-list-peliculas-general',
  templateUrl: './list-peliculas-general.component.html',
  styleUrl: './list-peliculas-general.component.css'
})
export class ListPeliculasGeneralComponent {

  films : Film[]=[]

  constructor(private movieService: MovieListService){}

  ngOnInit(): void {
    this.movieService.getPopularFilmsList().subscribe(resp => {
      this.films=resp.results;
    })
  }
}


