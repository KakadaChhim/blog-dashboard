import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "../category/categories.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "./post";
import {PostsService} from "./posts.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as diagnostics_channel from "diagnostics_channel";

@Component({
  selector: 'app-new-post',
  template: `
    <div class="w-full">
      <div class="text-center py-5">
        <h2 style="font-size: 20px">{{formStatus}} Post</h2>
        <p>You can {{formStatus}} post here!</p>
      </div>
      <div *ngIf="postForm">
        <form [formGroup]="postForm" (ngSubmit)="onSubmit()">
          <div class="container flex justify-center pb-10">
            <div class="w-[70%] grid grid-cols-5 gap-6 ">
              <div class="col-span-3 px-2"
                   style="box-shadow: 2px 2px 2px 4px white,0.2em 0.2em 3em rgba(0, 0, 0, 0.09);">
                <div class="py-2">
                  <label for="title" class="block w-fit text-sm font-medium leading-6 text-gray-900">Title</label>
                  <textarea id="title" class="block w-full rounded-[5px] border-0 py-1.5 pl-2 pr-2 text-gray-900
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                sm:text-sm sm:leading-0" (keyup)="onTitleChange($event)" formControlName="title"></textarea>
                </div>
                <div class="py-2">
                  <label for="permalink" class="block w-fit text-sm font-medium leading-6 text-gray-900">Permalink</label>
                  <textarea name="permalink" id="permalink" class="block w-full rounded-[5px] border-0 py-1.5 pl-2 pr-2 text-gray-900
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                sm:text-sm sm:leading-0" [(ngModel)]="permalink" formControlName="permalink"></textarea>
                </div>

                <div class="py-2">
                  <label for="excerpt" class="block w-fit text-sm font-medium leading-6 text-gray-900">Excerpt</label>
                  <textarea name="export" id="excerpt" class="block w-full rounded-[5px] border-0 py-1.5 pl-2 pr-2 text-gray-900
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                sm:text-sm sm:leading-0" rows="10" formControlName="excerpt"></textarea>
                </div>
              </div>

              <div class="col-span-2 px-2"
                   style="box-shadow: 2px 2px 2px 3px white,0.2em 0.2em 4em rgba(0, 0, 0, 0.09);">
                <div class=" inset-y-0 right-0 text-center items-center py-2">
                  <label for="category" class="block w-fit text-sm font-medium leading-6 text-gray-900">
                    Put Select a post category
                  </label>
                  <select id="category" name="category" formControlName="category"
                          class="w-full rounded-[5px] border-2 border-gray-300 bg-transparent py-1.5 pl-2 pr-5 text-gray-500
                      focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option value="">Select a post category</option>
                    <option *ngFor="let category of categories" value="{{category.id}}-{{category.data.category}}">{{ category.data.category }}</option>
                  </select>
                </div>

                <div class="py-2">
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <div class="shrink-0 mb-5">
                      <img [src]="imgSrc"
                           class="w-full object-cover "
                           alt="No files chosen" />
                    </div>
                    <input type="file" class="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                " (change)="showPreview($event)" formControlName="postImg" accept="*/*"/>
                  </label>
                </div>
              </div>

              <div class="col-span-5 px-2"
                   style="box-shadow: 2px 2px 2px 3px white,0.2em 0.2em 4em rgba(0, 0, 0, 0.09);">
                <div class="py-2">
                  <label for="content" class="block w-fit text-sm font-medium leading-6 text-gray-900">Content</label>
                  <angular-editor placeholder="Add your content here" formControlName="content"></angular-editor>
                </div>

                <div class="py-2 flex justify-end">
                  <button class="p-2 mx-5" style="border-radius: 5px; background-color: var(--primary-color)">
                    <a class="text-white" >Save</a>
                  </button>
                  <button class="p-2 bg-red-600 rounded-[5px]">
                    <a class="text-white" >Cancel</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
})

export class NewPostComponent implements OnInit{

  postData!: any;
  permalink: string = '';
  imgSrc: any = './assets/none-image.png';
  selectedImg: any = '';
  categories!: any;
  postForm!: FormGroup;
  formStatus: string = "Add New";
  docId: any;
  test = false;
  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private postService: PostsService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
      this.categoriesService.loadData().subscribe(value => {
        this.categories = value;
      })

    this.route.queryParams.subscribe(value => {
      // console.log(value);
      this.docId = value;
      let Id = this.docId.id;
      console.log(Id)

      if (Id){
        this.postService.loadOneData(value).subscribe(post =>{
          // console.log(post);
          this.postData = post;
          // console.log(this.postData.title)
          this.postForm = this.fb.group({
            title: [ this.postData.title , Validators.required],
            permalink: [this.postData.permalink, Validators.required],
            excerpt: [this.postData.excerpt , [Validators.required, Validators.minLength(10)]],
            category: [`${this.postData.category.categoryId}-${this.postData.category.category}` , Validators.required],
            postImg: ['', Validators.required],
            content: [this.postData.content , Validators.required]
          });
          this.imgSrc = this.postData.postImagePath;
          // console.log(this.postForm.value);
          this.formStatus = 'Edit';
        })
      }else {
        this.postForm = this.fb.group({
          title: [ '' , Validators.required],
          permalink: [ '' , Validators.required],
          excerpt: [ '' , [Validators.required, Validators.minLength(10)]],
          category: [ '' , Validators.required],
          postImg: [ '', Validators.required],
          content: [ '' , Validators.required]
        });
      }
    })
  }



  get fc(){
    return this.postForm.controls;
  }

  onTitleChange($event: any){
    // console.log($event.target.value);
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
    // console.log(this.permalink);
  }

  showPreview($event: any){
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target!.result;
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

  onSubmit(){
    // console.log(this.postForm.value);
    let split = this.postForm.value.category.split('-');
    console.log(split)
    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      excerpt: this.postForm.value.excerpt,
      category: {
        categoryId: split[0],
        category: split[1]
      },
      postImagePath: '',
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createAt: new Date()
    }
    this.postService.uploadImage(this.selectedImg, postData, this.formStatus, this.docId);
    this.postForm.reset();
    this.imgSrc = './assets/none-image.png';
  }
}
