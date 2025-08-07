import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { ApiCustomResponse } from "src/app/models/api-response.model";

@Component({
  selector: "app-registry",
  templateUrl: "./registry.component.html",
  styleUrls: ["./registry.component.scss"],
})
export class RegistryComponent {
  userForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
    });
  }

  goToUsers() {
    this.router.navigate(["users"]);
  }

  onSubmit(): void {
    this.errorMessage = null;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe({
      next: (res: ApiCustomResponse<any>) => {
        if (res.success) {
          alert("User created successfully");
          this.userForm.reset();
          this.goToUsers();
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
