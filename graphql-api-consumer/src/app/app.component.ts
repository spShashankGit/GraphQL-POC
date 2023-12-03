import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BOOKS, GET_MOVIES, GET_BOOKS_AND_MOVIES } from './graphql.operations';
import { map } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core/types';

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
  btnTextIsHere = 'Click Me';

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_BOOKS
    })
      .valueChanges
      .pipe(map((result: ApolloQueryResult<any>) => result.data))
      .subscribe(results => {
        this.books_arr = results?.data;
        this.loading = results?.loading;
        this.error = results?.error
        console.log('CP 1', this.books_arr);
      })

    //please create the unit test case for the below code

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

  // Write a function to add two numbers
  add(a: number, b: number) {
    return a + b;
  }

}
