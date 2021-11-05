import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeMovies:any=[];
homeTv:any=[]
homePeople:any=[]
  constructor(private _TrendingService:TrendingService,private spinner:NgxSpinnerService) {
  
   }
   getTrendingItems(pageNum:any){
    this.spinner.show();


  

     this._TrendingService.getTrending('movie',pageNum).subscribe((response)=>{
      this.homeMovies=response.results

      })
      this._TrendingService.getTrending('tv',pageNum).subscribe((response)=>{
        this.homeTv=response.results
        })
        this._TrendingService.getTrending('person',pageNum).subscribe((response)=>{
          this.homePeople=response.results

          })
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
  }

  ngOnInit(): void {
     this.getTrendingItems('1')
  }

}
