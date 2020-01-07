import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];

  constructor( private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search( src: string){
    console.log( src );
    this.spotifyService.getSearch(src).subscribe( (data:any) =>{
      console.log(data);
      this.artists = data;
    })
  }

}
