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

  private token = "BQANLmLHVanoe8mxv0mDRFmI1JyVqbplVAtMQQ28otS1D-FiOF2s-bzmsAKYhSntt8A9hYXUC6lXutZxLE8";

  constructor( private http:HttpClient) {
    console.log("Spotify service load");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .pipe( map( data =>{
          return data['albums']['items'];
      }));

  }

  getSearch( q :string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ q }&type=artist&limit=15`,{headers})
                    .pipe( map( data =>{
                      return data['artists']['items'];
                    }));

  }

}
