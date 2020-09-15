import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService/shared-service.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  search_query:string = 'Star Trek';

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.searchMovie(this.search_query)
  }


  searchMovie(value){
    if(value){
      this.shared.searchChanges.next(value);
    }
    else{
      alert("Please Provide a keyword")
    }
  }


}
