import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";

@Injectable({
    providedIn: "root"
})

export class CategoriesService{
    constructor(private angularFireStore: AngularFirestore) {
    }

    saveData(data: any){
        this.angularFireStore.collection('categories').add(data).then(docRef =>{
            console.log(docRef);
        }).catch(err => {
            console.log(err);
        });
    }

    loadData(){
        return this.angularFireStore.collection('categories').snapshotChanges().pipe(
            map(action =>{
                return action.map(a =>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {data, id};
                })
            })
        )
    }

    updateData(id: any, editData: any){
        this.angularFireStore.collection('categories').doc(id).update(editData).then(docRef =>{
            console.log(docRef);
        }).catch(err => {
          console.log(err);
        });
    }

    deleteData(id:any){
      this.angularFireStore.collection('categories').doc(id).delete().then(docRef =>{
        console.log(docRef);
      }).catch(err => {
        console.log(err);
      });
    }
}
