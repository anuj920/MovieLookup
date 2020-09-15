import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService/shared-service.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  keyword:string;
  movieListShow:boolean=false;
  movieList:Array<any>;
  totalpages:number;
  current_page:number;
  total_results:number;


  constructor(private shared: SharedService) { 
    this.movieList = new Array<any>();
  }

  ngOnInit(): void {

    this.shared.searchUpdate.subscribe(res=>{
      if(res){
        this.getMovieList(res);
        this.keyword = res;
      }
    })
  }


  getMovieList(value){
    this.movieList = new Array<any>();
    this.total_results = 0;
    this.shared.showSpinner();
    this.shared.getListBySearch(value).subscribe(res=>{
      if(res && res.total_results>0){
        this.filterData(res);
      }
      else{
        this.shared.hideSpinner();
        this.movieListShow = false;
        this.shared.detailChanges.next({"flag":false,"id":null})
        alert("No Result for this search keyword")
      }
    },
    err=>{
      alert("SomeGoes Wrong Or Invalid Keyword")
    }
    )
  }


  filterData(res){
        this.movieList = res.results;
        this.movieListShow = true;
        this.current_page = res.page;
        this.totalpages = res.total_pages;
        this.total_results = res.total_results;
        this.shared.hideSpinner();
  }

  getMovieImage(Url_value){
    let url = ""
    if(Url_value && Url_value.length>0){
      url = "https://image.tmdb.org/t/p/original"+Url_value;
    }
    else{
      url  =  "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png"    //No Image Found Url
    }
    return url
  }

  nextpage(){
    this.movieListShow = false;
    this.shared.showSpinner();
    this.shared.getListByPage(this.keyword,this.current_page+1).subscribe(res=>{
      if(res){
        this.filterData(res);
      }
    })
  }

  prevpage(){
    this.movieListShow = false;
    this.shared.showSpinner();
    this.shared.getListByPage(this.keyword,this.current_page-1).subscribe(res=>{
      if(res){
        this.filterData(res);
      }
    })
  }

  
  getMovieDetail(id){
    let data = {"id":id,"flag":true}
    this.shared.detailChanges.next(data)
  }

}
