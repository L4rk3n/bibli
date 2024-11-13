import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivresComponent } from "./livres.component";

const routes: Routes = [
    { path: '', component: LivresComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class BookRoutingModule {

}