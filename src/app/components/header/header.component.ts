import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
import { Observable} from "rxjs";

@Component({
    selector: 'app-header',
    template: `
        <div
                style="background-color: var(--navbar-footer-text); color: var(--primary-color);"
                class="w-full mx-auto border-0 fixed top-0 z-10 p-[10px] h-[60px] flex items-center"
                *ngIf="isLoggedIn$ | async"
>
            <div class="flex justify-end w-[50%] items-center">
              <button class="p-2" style="border-radius: 15px; background-color: var(--primary-color)">
                <a class="text-white" routerLink="">Blog Learning</a>
              </button>
            </div>

          <div class="flex items-center justify-end w-[50%]" >
            <span>{{emailAddress}}</span>
            <button class="p-2 ml-2" style="border-radius: 15px; background-color: var(--primary-color)">
              <a class="text-white" (click)="onLogOut()">Logout</a>
            </button>
          </div>
        </div>
    `
})

export class HeaderComponent implements OnInit{

  isLoggedIn$?: Observable<boolean>;
  emailAddress: string = '';
  constructor(private authService: AuthService) {
  }

    ngOnInit(): void {
        const localStorageObject = localStorage.getItem('user');
        if (localStorageObject !== null) {
            const parsedObject = JSON.parse(localStorageObject);
            this.emailAddress = parsedObject.email;
            // console.log(this.emailAddress);
        }
        this.isLoggedIn$ = this.authService.isLoggedIn();
    }

    onLogOut(){
      this.authService.logOut();
    }
}
