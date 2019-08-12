import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService, Account } from "../../../services/auth.services";

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  backimg = {
    img: "./assets/img/login/2desierto.jpg"
  }
  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private auth : AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.backimg.img = "./assets/img/login/" + String(Math.floor(Math.random() * 4) + 1) + '.jpg';
  }

  send() {
    let loginform = this.form.value;
    
    this.auth.loginAdmin(loginform.username, loginform.password).subscribe((account) =>{
      this.auth.setAccount(account);
      
      this.router.navigate(['/dashboard']);
    }, error =>{
      console.log(error);
        if(error.status === 409){
          this.snackbar.open('Usuario y/o password invalidos', 'OK', {
            duration: 5000
          });
        }
      }
    )
    //this.router.navigate(['/dashboard']);
    /*
    this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'GOT IT', {
      duration: 10000
    });
    */
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
