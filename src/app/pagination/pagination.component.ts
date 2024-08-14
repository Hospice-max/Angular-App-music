import { Component } from '@angular/core';
import { ALBUMS } from '../../mock-albums';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
albums = ALBUMS;
keyword: string = ''

search():void {
  this.albums = ALBUMS.filter(el=> el.title.toLowerCase().includes(this.keyword.toLowerCase()))
}

}
