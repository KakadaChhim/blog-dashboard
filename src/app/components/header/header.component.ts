import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <mat-toolbar 
                style="background-color: white; color: var(--primary-color);" 
                class="w-full mx-auto border-0 fixed top-0 z-10 p-[10px] h-[60px] justify-center">
            <button mat-raised-button color="accent" style="border-radius: 15px; background-color: var(--primary-color)">
                <a routerLink="">Blog Learning</a>
            </button>
        </mat-toolbar>
    `
})

export class HeaderComponent{

}