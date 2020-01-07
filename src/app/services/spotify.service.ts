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
  private token = "BQAWF19FZ2rlcXeQY3iJlhN5yTZw9H_3CK0N-B2DmmYAlcP2JSVRiwWEGPkpFh9Ef2OXMLi075yxi9jVxWA";

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
