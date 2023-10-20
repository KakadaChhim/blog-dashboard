import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <div
                style="background-color: var(--navbar-footer-text); color: var(--primary-color);"
                class="w-full mx-auto border-0 fixed flex top-0 z-10 p-[10px] h-[60px] justify-center">
            <button class="p-2" style="border-radius: 15px; background-color: var(--primary-color)">
                <a class="text-white" routerLink="">Blog Learning</a>
            </button>
        </div>
    `
})

export class HeaderComponent{

}
