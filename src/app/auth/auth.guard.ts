import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return this.authService.isLoggedInGuard;
      if (this.authService.isLoggedInGuard){
        // console.log("Access Granted");
        return true;
      }else {
        // console.log("access Denice");
        this.router.navigate(['/login']);
        return false;
      }
    }

}
