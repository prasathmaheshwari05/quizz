import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private auth:AuthService){}
    ngOnInit():void{
      this.auth.canAccess();

    }
  

}
