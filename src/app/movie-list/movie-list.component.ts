import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  /*
  data;
  title = 'Movies';
  results = '';
  */

  results = '';
  title;
  year;
  genre;
  duration;
  director;
  cast;
  description;
  rating;
  data;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:40252/Api/Movieinfoes').subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

  onRequest() {

    this.data = {
      // "Username": this.Username,
      "Title": this.title,
      "Year": this.year,
      "Genre": this.genre,
      "Duration": this.duration,
      "Director": this.director,
      "Cast": this.cast,
      "Description": this.description,
      "Rating": this.rating
    }
  }
}