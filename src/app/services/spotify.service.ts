import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
/* credentials 

ClientId: fa6f92f3930241c8afaa72ac6f538a03
ClientSecret: acee1166d0d743868e753e7a524b9e0f

*/

export class SpotifyService {

  private url = "https://api.spotify.com/v1/";
  private token = "BQCWQai5GL09sTlR-OSFODDJhq1saiODrfdZv3Z8cuM1GUuWuDrLjr7abT8pvLL_BBj0-SFS0DVSQDs20HM";

  constructor( private http:HttpClient) {
    console.log("Spotify service load");
  }

  get headAuth() : HttpHeaders{
    return new HttpHeaders({
      'Authorization': 'Bearer '+this.token
    })
  }

  getQuery( q: string ){
    return this.http.get(this.url + q,{
      headers:this.headAuth
    });
  }
 
  getNewReleases(){
    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums']['items'] ));
  }

  getSearch( q :string ){
    return this.getQuery(`search?q=${ q }&type=artist&limit=15`)
               .pipe( map( data => data['artists']['items'] ));
  }

}
