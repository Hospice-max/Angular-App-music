import { Component } from '@angular/core';
import { ALBUMS } from '../../mock-albums';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
albums = ALBUMS

}
