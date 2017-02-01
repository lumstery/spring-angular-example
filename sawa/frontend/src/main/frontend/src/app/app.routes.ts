import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {HelpComponent} from "./pages/help/help.component";
import {ProfileDataResolver} from "./core/services/profile-data.resolver";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {TopComponent} from "./pages/top/top.component";
import {PrivatePageGuard} from "./core/services/private-page.guard";
import {PublicPageGuard} from "./core/services/public-page.guard";
import {NoContentComponent} from "./pages/no-content/no-content.component";

export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PrivatePageGuard]
  },
  {path: 'login', component: LoginComponent, canActivate: [PublicPageGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [PublicPageGuard]},
  {path: 'help', component: HelpComponent},
  {path: '', component: TopComponent, canActivate: [PublicPageGuard]},
  {path: '**', component: NoContentComponent}
];
