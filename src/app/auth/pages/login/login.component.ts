import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router,    private fb: FormBuilder) {}
  miFormulario2: FormGroup = this.fb.group({
    usuario:[,[Validators.required]],
    password:['',[Validators.required]],
  })
  login() {
    if(!this.miFormulario2.status) {
      return
    }
    this.authService.login(this.miFormulario2.value.usuario,this.miFormulario2.value.password)
    .subscribe(resp =>{
      console.log(resp);
      
      if(resp)
      this.router.navigate(['/meeting']);
    })
  }

}
