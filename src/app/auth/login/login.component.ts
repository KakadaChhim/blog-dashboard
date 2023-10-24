import {Component} from "@angular/core";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  template: `
    <div class="w-full">
      <div class="flex justify-center">
        <div class="min-w-[300px] w-[400px] bg-secondary p-5">
          <div class="text-center pb-3">
            <h2 style="font-size: 20px"> Login</h2>
            <p>Please Login Your Admin Account Here To Post Blog!</p>
          </div>
          <div class="w-full flex justify-center">
            <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
                <div class="m-2">
                  <input type="email" name="email" id="email"  required
                         class=" rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                         placeholder="Email"
                         ngModel
                         email
                         #Email="ngModel"
                         [ngClass]="{'invalid': Email.touched && Email.invalid}"
                  >
                  <div *ngIf="Email.touched && Email.invalid">
                    <div *ngIf="Email.errors?.['required']" class="text-red-500"> Email cannot be empty </div>
                    <div *ngIf="Email.errors?.['email']" class="text-red-500"> Please provide valid email </div>
                  </div>
                </div>

                <div class="m-2">
                  <input type="password" name="password" id="password"  required
                         class=" rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                         placeholder="Password"
                         ngModel
                         #Password="ngModel"
                         [ngClass]="{'invalid': Password.touched && Password.invalid}"
                  >
                  <div *ngIf="Password.touched && Password.invalid" class="text-red-500">
                    Password cannot be empty
                  </div>
                </div>

                <div class="m-2">
                  <button  class="p-2 rounded-md w-full"
                           style=" background-color: var(--primary-color)"
                  [disabled]="loginForm.invalid">
                    <a class="text-white"> Login </a>
                  </button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  `
})

export class LoginComponent{

  user: any;
  constructor(private authService: AuthService) {
  }
  onSubmit(loginData: any){
    this.user = {
      email: loginData.value.email,
      password: loginData.value.password
    }
    // console.log(loginData);
    this.authService.login(this.user.email, this.user.password);
    loginData.reset();
  }

}
