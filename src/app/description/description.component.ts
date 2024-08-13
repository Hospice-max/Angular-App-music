import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../albums';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit{
  album?: Albums;
  albumId?: string

  constructor(private route: ActivatedRoute, private service: ServiceService) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id') || '';
      this.album = this.service.getAlbums(this.albumId)
    })
   }
}
