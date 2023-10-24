import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "./categories.service";
import {Category} from "./category";

@Component({
  selector: 'app-category',
  template: `
    <div class="w-full mt-[80px]">
        <div class="flex justify-center">
            <div class="min-w-[300px] w-[70%] bg-secondary p-5">
                <div class="text-center pb-3">
                    <h2 style="font-size: 20px">{{formStatus}} Category</h2>
                    <p>You can {{formStatus}} new category from here!</p>
                </div>
                <div class="w-full flex justify-center">
                    <form action="" #categoryForm = "ngForm" (ngSubmit)="onSubmit(categoryForm)">
                        <div class="flex">
                            <div class="mx-2">
                                <input type="text" name="category" id="category" #newCategory="ngModel" required
                                       [ngClass]="{'invalid': newCategory.touched && newCategory.invalid}"
                                       class=" rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       placeholder="Name" [(ngModel)]="formCategory">
                                <div class="bg-red-600" *ngIf="newCategory.touched && newCategory.invalid">
                                    <p class="text-white">category filed is required</p>
                                </div>
                            </div>
                            <button [disabled]="categoryForm.invalid" class="p-1 rounded-md" style=" background-color: var(--primary-color)">
                                <a class="text-white">{{formStatus}} Category</a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!--        Table Show Categories-->
        <div class="flex justify-center">
            <div class="min-w-[300px] w-[70%] bg-secondary p-5">
                <table class="min-w-full bg-white border rounded-lg shadow-sm">
                    <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            No.
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let cate of categoryArray; let i = index">
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{i+1}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{cate.data.category}}
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap">
                            <button class="px-4 py-2 bg-amber-300 rounded-[5px]"
                                    (click)="onEdit(cate.id ,cate.data.category || 0)">Edit</button>
                            <button class="px-4 py-2 bg-red-600 rounded-[5px] ml-2"
                                  (click)="onDelete(cate.id || 0)">Delete</button>
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

export class CategoryComponent implements OnInit{

  categoryArray!: any;
  formCategory!: string;
  formStatus: string = 'Add';
  categoryId!: string;
  constructor(
    private categoriesService: CategoriesService) {
  }

    ngOnInit(): void {
      this.categoriesService.loadData().subscribe( value => {
          this.categoryArray = value;
          // console.log(this.categoryArray)
      });
    }
  onSubmit(formData: any){
    // console.log(formData);
    let categoryData: Category = {
      category: formData.value.category
    }
    if (this.formStatus == 'Add'){
      this.categoriesService.saveData(categoryData);
      formData.reset();
    }else if (this.formStatus == 'Edit'){
      this.categoriesService.updateData(this.categoryId, categoryData);
      formData.reset();
    }
  }

  onEdit(Id: any, category: any){
    // console.log(category);
    //   this.categoriesService.updateData(Id,category);
      this.formCategory = category;
      this.formStatus = 'Edit';
      this.categoryId = Id;
  }

  onDelete(Id: any){
    this.categoriesService.deleteData(Id);
  }
}
