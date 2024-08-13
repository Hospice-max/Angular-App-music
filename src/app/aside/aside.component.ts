import { Component, Input } from '@angular/core';
import { aside } from '../albums';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
@Input() index?:aside

handleClick(): void {
  alert("Vous devez d'abord vous connecter...")
}
}
