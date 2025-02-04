import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public auth:AuthService){
    
  }
}
