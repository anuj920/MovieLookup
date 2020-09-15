import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedService/shared-service.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  detailShow:boolean= false;
  movieDetail:any;
  genres:string="";
  postalUrl:string=";"

  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.shared.detailUpdate.subscribe(res=>{
      if(res.flag===true){
        this.getMovieDetail(res.id);
      }
      else{
        this.detailShow = false;
        this.shared.hideSpinner();
      }
    })

  }



  getMovieDetail(id){
    this.shared.showSpinner();
    this.shared.getMovieDetail(id).subscribe(res=>{
      this.genres = ""
      this.movieDetail = res;
      let genr = res.genres;
      genr.forEach(i => {
        this.genres = i.name + "  "+this.genres
      });
      this.getMovieImage(res.poster_path)
      this.detailShow = true;
      this.shared.hideSpinner();
    },
    err=>{
      alert("Something Wrong During Fetch Movie Detail");
    })
  }




  getMovieImage(Url_value){
    if(Url_value && Url_value.length>0){
      this.postalUrl = "https://image.tmdb.org/t/p/original"+Url_value;
    }
    else{
      this.postalUrl  =  "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png"    //No Image Found Url
    }
  }

}
