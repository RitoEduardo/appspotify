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

  error: Boolean = false;
  msjError: String = "";

  constructor( private spotifyService: SpotifyService ) {
    this.spotifyService.getNewReleases().subscribe( (data:any) =>{
      this.newRealeases = data;
      this.loading = false;
      this.error = false;
      console.log( this.newRealeases );
    }, e => {
      this.error = true;
      this.msjError = e.error.error.message;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
