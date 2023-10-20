import {Component} from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <mat-grid-list
                cols="3"
                style="background-color: var(--navbar-footer-text); color: var(--body-text-color);"
                class="w-full flex mx-auto border-0 fixed bottom-0 p-[15px] justify-center">
            <div class="w-full flex justify-center py-3">
                <button mat-raised-button color="accent" style="border-radius: 15px; background-color: var(--primary-color)">
                    <a routerLink="" style="color:#000;">Blog Learning</a>
                </button>
            </div>
            <div class="w-full " >
                <a mat-button >Term and Conditions</a>
                <a mat-button >About</a>
                <a mat-button >Contact</a>
            </div>
            <div class="w-full" >
                <a mat-button >Copyright 2023 Angular Blog learning</a>
            </div>
        </mat-grid-list>
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