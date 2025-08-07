import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistryComponent } from "./components/registry/registry.component";
import { UsersComponent } from "./components/users/users.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
