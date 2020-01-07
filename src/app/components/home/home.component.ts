import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newRealeases: any[] = [];
  loading:Boolean = true;

  constructor( private spotifyService: SpotifyService ) { 
    this.spotifyService.getNewReleases().subscribe( (data:any) =>{
      this.newRealeases = data;
      this.loading = false;
      console.log( this.newRealeases );
    })
  }

  ngOnInit() {
  }

}
