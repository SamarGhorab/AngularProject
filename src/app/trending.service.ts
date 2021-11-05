import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }

  getTrending(mediaType:any,pageNum:any):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=85acd968ccdd8526daba148e54c2b07e&language=en-US&page=${pageNum}`)

  }
  getDetails(media_Type:any,id:any):Observable<any>
{
  return this.http.get(`https://api.themoviedb.org/3/${media_Type}/${id}?api_key=85acd968ccdd8526daba148e54c2b07e&language=en-US`)
}
}
