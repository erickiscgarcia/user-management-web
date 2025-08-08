import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistryComponent } from "./components/registry/registry.component";
import { UsersComponent } from "./components/users/users.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

const routes: Routes = [
  { path: "", redirectTo: "registry", pathMatch: "full" },
  { path: "registry", component: RegistryComponent },
  { path: "users", component: UsersComponent },
  { path: "users/update/:id", component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
