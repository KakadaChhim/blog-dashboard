import {Component, OnInit} from "@angular/core";
import {PostsService} from "../new-post/posts.service";

@Component({
  selector: 'app-all-post',
  template: `
    <div class="w-full">
      <div class="flex justify-center">
        <div class="min-w-[300px] w-[80%] bg-secondary p-5">
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

      <!--        Table Show Categories-->
      <div class="flex justify-center">
        <div class="min-w-[300px] w-[80%] bg-secondary p-5">
          <table class="min-w-full bg-white border rounded-lg shadow-sm">
            <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Post Image
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Excerpt
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Feature
              </th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let post of postArray; let i = index">
              <td class="px-6 py-4 whitespace-nowrap">
                {{i+1}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <img class="w-16 h-16" src="{{post.data.postImagePath}}" alt="">
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{post.data.title}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{post.data.excerpt}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{post.data.category.category}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{post.data.createAt.toMillis() | date}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap">
                <button class="px-4 py-2 bg-amber-300 rounded-[5px] text-white"
                        routerLink="/post/new" [queryParams]="{id: post.id}">Edit</button>
                <button class="px-4 py-2 bg-red-600 rounded-[5px] ml-2 text-white"
                       (click)="onDelete(post.data.postImagePath, post.id)">Delete</button>
              </td>
              <td class="px-6 py-2 whitespace-nowrap">
                <button *ngIf="!post.data.isFeatured" class="px-4 py-2 bg-green-700 text-white rounded-[5px]"
                        (click)="onFeatured(post.id, true)">Mark Feature</button>
                <button *ngIf="post.data.isFeatured" class="px-4 py-2 bg-red-600 rounded-[5px] ml-2 text-white"
                        (click)="onFeatured(post.id, false)">Remove Feature</button>
              </td>
            </tr>
            <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class AllPostComponent implements OnInit{

  postArray: any;
  constructor(private postService: PostsService) {
  }
    ngOnInit(): void {
        this.postService.loadData().subscribe( value => {
          console.log(value);
          this.postArray = value;
        })
    }

    onDelete(postImagePath: any, id: any){
      console.log(postImagePath)
      console.log(id)
      this.postService.deleteImage(postImagePath, id);
    }

    onFeatured( id:any, value: boolean ){
      const featuredData = {
        isFeatured: value
      }
    }
}
