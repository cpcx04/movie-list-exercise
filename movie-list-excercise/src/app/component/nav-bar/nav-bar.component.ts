import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  successSession: boolean = false;
 

  constructor(private authService: AuthService, private accountService: AccountService){}
  
  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.successSession = true;
      }
    })
  }

  logging() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('request_token', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('request_token')}?redirect_to=http://localhost:4200/approved`;
    })
  }

}   
