import {Injectable} from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: "root"
})
export class AuthService{

  isLoggedInGuard: boolean = false;
  constructor(
    private AngularFireAuth: AngularFireAuth,
    private router: Router
  ) {
  }
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  login(email: any, password: any){
    this.AngularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.isLogin.next(true);
      this.isLoggedInGuard = true;
      // console.log("Login Successfully");
      this.loadUser();
      this.router.navigate(['/']);
    }).catch(e => {
      console.log(e)
    });
  }

  loadUser(){
    this.AngularFireAuth.authState.subscribe((user) =>{
      console.log(JSON.parse(JSON.stringify(user)));
      localStorage.setItem('user', JSON.stringify(user));
    })
  }

  logOut(){
    this.AngularFireAuth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.isLogin.next(false);
      this.isLoggedInGuard = false;
      // console.log("logout success");
      this.router.navigate(['/login']);
    })
  }
  isLoggedIn(){
    return this.isLogin.asObservable();
  }

}
