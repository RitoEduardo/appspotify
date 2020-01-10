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
  private token = "-BQDVVgg6H--6fKFQoo52qbUd1Cz4UcoHxiWVCVSKh5dB7QXwTebdcfnFCOYpA13-YQW0Nc2RZEdiste21xo";

  constructor( private http:HttpClient) {
    console.log("Spotify service load");
  }

  get headAuth(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  getQuery(q: string){
    return this.http.get(this.url + q, {
      headers: this.headAuth
    });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums']['items'] ));
  }

  getSearch(q: string) {
    return this.getQuery(`search?q=${ q }&type=artist&limit=15`)
               .pipe( map( data => data['artists']['items'] ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTraksForArtist(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks'] ));
  }

}
