import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import { UserDataService } from '../../sessiondata/user-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  pword: string = '';

  constructor(private auth:AuthServiceService, private userDataService:UserDataService , private router:Router) {}

  login() {
    console.log('email:', this.email);
    console.log('password:', this.pword);

    // url http://127.0.0.1:8000/api/login

    // body
    //   {
    //     "email": "",
    //     "password": ""
    //   }

    // response

    // {"access_token":"","token_type":"Bearer","user":{"id":,"name":"","role":"","email":""}}

    let data = {
      email: this.email,
      password: this.pword
    }

    this.auth.login(data).subscribe(
      {
        next: (response:any) => {
          console.log(response);
          localStorage.setItem('token',`${response.token_type}` +' '+ `${response.access_token}`);

          this.getUser();

        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      }

    );

  }
  
  getUser() {
   
    this.auth.getUser().subscribe({
      next: (response:any) => {
        console.log(response);
        this.userDataService.updateUser(response);

        //redirect to home page

        this.router.navigate(['/home']);

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }
}

@NgModule({
  imports: [FormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
