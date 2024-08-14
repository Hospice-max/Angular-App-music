import { Injectable } from '@angular/core';
import { ALBUMS } from '../mock-albums';
import { Albums } from './albums';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  albums: Albums[] = ALBUMS; 
  album: Albums | undefined;
  
  
  constructor() { }

  aside(id:string){
   return  this.albums.find((el) => el.id === id)
  }

  getAlbums(id:string): Albums | undefined {
    return this.album = this.albums.find((el: Albums) => el.id === id);
  }
}
