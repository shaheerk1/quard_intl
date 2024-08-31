import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  pword: string = '';

  constructor(private auth:AuthServiceService) {}

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

    this.auth.login(data).subscribe((res:any) => {
      console.log(res);
    });

  }
}

@NgModule({
  imports: [FormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
