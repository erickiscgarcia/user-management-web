import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { ApiCustomResponse } from "src/app/models/api-response.model";

@Component({
  selector: "app-registry",
  templateUrl: "./registry.component.html",
  styleUrls: ["./registry.component.scss"],
})
export class RegistryComponent {
  userForm: FormGroup;
  serverErrorMessage: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
    });
  }

  onSubmit(): void {
    this.serverErrorMessage = null;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe({
      next: (res: ApiCustomResponse<any>) => {
        alert("User created successfully");
        this.userForm.reset();
      },
      error: (err) => {
        console.log("Error inesperado");
      },
    });
  }
}
