import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieId:any=null;
  movieDetails:any={};
  movie:any=null;
  constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService) {
    this.movieId=_ActivatedRoute.snapshot.params.id;

    this.movie=_ActivatedRoute.snapshot.params.movieType;
    console.log(this.movie);
    
   }

   getTrendingDetails(mediaType:any){
     this._TrendingService.getDetails(mediaType,this.movieId).subscribe((response)=>{

      console.log(response)
      this.movieDetails=response
     })
  }
  ngOnInit(): void {

    this.getTrendingDetails(this.movie)

  }

}
