import {Component} from "@angular/core";

@Component({
  selector: 'app-all-post',
  template: `
    <div class="w-full">
      <div class="flex justify-center">
        <div class="min-w-[300px] w-[70%] bg-secondary p-5">
          <div class="text-center mb-2">
            <h2 style="font-size: 20px">All Blog Posts</h2>
            <p>From here you can manage your post!</p>
          </div>
          <div class="w-full flex justify-center gap-4">
            <button class="p-1 rounded-md" style=" background-color: var(--primary-color)" routerLink="/post/new">
              <a class="text-white">Add New Post</a>
            </button>
            <button class="p-1 rounded-md bg-amber-300 " routerLink="">
              <a class="text-white">Back To Dashboard</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AllPostComponent{

}
