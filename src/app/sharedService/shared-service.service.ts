import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchChanges = new BehaviorSubject(null);
  searchUpdate = this.searchChanges.asObservable();


  detailChanges = new BehaviorSubject({"flag":false,"id":null});
  detailUpdate = this.detailChanges.asObservable();


  TMDBAPIKEY = "bd46925f551018cd0bb1c5054928e7b1";

  constructor(private http:HttpClient, private ngxSpinner: NgxSpinnerService) { }

  // Spinner Methods for show and hide.

  showSpinner(): void{
    this.ngxSpinner.show();
  }

  hideSpinner(): void{
    this.ngxSpinner.hide();
  }


  // API Call function for get list and detail

  getListBySearch(value): Observable<any>{
    return this.http.get(`${environment.TMDBserviceUrl}/search/movie?api_key=${this.TMDBAPIKEY}&query=${value}`)
  }

  getMovieDetail(id:number): Observable<any>{
    return this.http.get(`${environment.TMDBserviceUrl}/movie/${id}?api_key=${this.TMDBAPIKEY}`)
  }

  getListByPage(value,page):Observable<any>{
    return this.http.get(`${environment.TMDBserviceUrl}/search/movie?api_key=${this.TMDBAPIKEY}&query=${value}&page=${page}`)
  }


}
