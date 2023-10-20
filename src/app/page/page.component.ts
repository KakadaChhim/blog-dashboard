import {Component} from "@angular/core";

@Component({
  selector: 'app-page',
  template: `
    <div class="w-full h-auto mt-[80px] px-[20%] flex justify-center">
      <div routerLink="/categories" class="grid grid-cols-3 gap-4">
        <div class="min-w-[300px] bg-secondary p-5">
          <div class="text-center pb-3">
            <h1 style="font-size: 50px"><i class="fas fa-list-alt"></i></h1>
            <h2 style="font-size: 20px">Category</h2>
            <p>You can add new category here!</p>
          </div>
          <div class="w-full flex justify-center">
            <button class="p-2" style=" background-color: var(--primary-color)">
              <a class="text-white">Add Category</a>
            </button>
          </div>
        </div>
      </div>

      <div routerLink="/posts" class="grid grid-cols-3 gap-4">
        <div class="min-w-[300px] bg-secondary p-5">
          <div class="text-center pb-3">
            <h1 style="font-size: 50px"><i class="fas fa-file-image"></i></h1>
            <h2 style="font-size: 20px">Post</h2>
            <p>You can manage your post here!</p>
          </div>
          <div class="w-full flex justify-center">
            <button class="p-2" style=" background-color: var(--primary-color)">
              <a class="text-white">Add Posts</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class PageComponent{

}
