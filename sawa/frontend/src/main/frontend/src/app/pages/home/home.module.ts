import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
