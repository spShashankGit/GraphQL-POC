import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BOOKS } from './graphql.operations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books_arr: any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_BOOKS,
    })
      .valueChanges.subscribe(results => {
        this.books_arr = results?.data;
        this.loading = results.loading;
        this.error = results.error
        console.log('CP 1', this.books_arr);
      })
  }
  title = 'graphql-api-consumer';
}
