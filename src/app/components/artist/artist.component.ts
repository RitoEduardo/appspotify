import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe( params => {
      const idArtist = params['id'];
      this.getArtis(idArtist);
      this.getTopTraks(idArtist);
    });
  }

  ngOnInit() {

  }

  getArtis(id: string){
    this.spotifyService.getArtist(id).subscribe( data => {
      this.artist = data;
      this.loadingArtist = false;
    });
  }

  getTopTraks(id: string){
    this.spotifyService.getTopTraksForArtist(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
      // this.loadingArtist = false;
    });
  }

}
