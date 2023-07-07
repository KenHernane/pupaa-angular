import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.authService.status;
        if (!isAuthenticated) {
          this.router.navigate(['/admin/login']);
        }

        return isAuthenticated;
    }

}
