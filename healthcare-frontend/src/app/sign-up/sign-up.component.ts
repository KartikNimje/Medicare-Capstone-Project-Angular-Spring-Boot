import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe( data => {
      console.log(data);
      this.goToHome();
    },
    error => console.log(error));
  }

  goToHome(){
    this.router.navigate(['/log-in']);
  }

  onSubmit(){
    this.saveUser();
  }
}
