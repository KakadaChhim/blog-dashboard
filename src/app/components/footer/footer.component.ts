import {Component} from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <div
                style="background-color: var(--navbar-footer-text); color: var(--body-text-color);"
                class="w-full flex mx-auto border-0 fixed bottom-0 p-[15px] justify-center">
            <div class="w-full flex justify-center py-3">
                <button style="border-radius: 15px; background-color: var(--primary-color)">
                    <a routerLink="" style="color:#000;">Blog Learning</a>
                </button>
            </div>
            <div class="w-full " >
                <a  >Term and Conditions</a>
                <a  >About</a>
                <a >Contact</a>
            </div>
            <div class="w-full" >
                <a  >Copyright 2023 Angular Blog learning</a>
            </div>
        </div>
    `,
    styles: [
        `
          .mat-grid-list{
            display: flex;
            //position: absolute;
          }
          div a{
            color: var(--body-text-color);
          }
        `
    ]
})

export class FooterComponent{

}
