import { Component, EventEmitter, Output } from '@angular/core';
import { ALBUMS } from '../../mock-albums';
import { Albums } from '../albums';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums = ALBUMS;
  userId!: string;
  sidebar: Albums| undefined

  constructor ( private service: ServiceService) {}

  @Output() passValue = new EventEmitter<boolean>();

  detail: boolean = false;

  aside(id:string) {
    this.sidebar = this.service.aside(id)
  }

  detailClick(id: string) {
    alert(id)
  }

  version(): void {
    alert('French-Version 5.6')
  }
}