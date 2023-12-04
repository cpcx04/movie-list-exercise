import { Component, Input } from '@angular/core';
import { Film } from '../../models/movie-list.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  @Input() film !: Film;

    
  getMovieImage() {
      return "https://image.tmdb.org/t/p/w500" + this.film.poster_path;
  }

  getTitle() {
      return this.film.original_title;
  }
}
