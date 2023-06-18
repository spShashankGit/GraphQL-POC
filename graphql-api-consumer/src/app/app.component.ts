import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BOOKS, GET_MOVIES, GET_BOOKS_AND_MOVIES } from './graphql.operations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books_arr: any;
  loading = true;
  error: any;
  movies_arr: any;
  movies_loading: any;
  movies_err: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_BOOKS
    })
      .valueChanges.subscribe(results => {
        this.books_arr = results?.data;
        this.loading = results?.loading;
        this.error = results?.error
        console.log('CP 1', this.books_arr);
      })

    this.apollo.watchQuery({
      query: GET_MOVIES
    })
      .valueChanges.subscribe(results => {
        this.movies_arr = results?.data;
        this.movies_loading = results?.loading;
        this.movies_err = results?.error
        console.log('CP 2', results?.data);
      })

    this.apollo.watchQuery({
      query: GET_BOOKS_AND_MOVIES
    })
      .valueChanges.subscribe(results => {
        console.log('CP 3', results);
      })
  }
  title = 'graphql-api-consumer';
}
