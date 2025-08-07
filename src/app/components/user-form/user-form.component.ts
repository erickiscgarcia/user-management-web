import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  errorMessage: string | null = null;
  userId: string = "";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id") || "";
    this.userForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [""],
      enabled: [true],
    });

    this.loadUser();
  }

  loadUser() {
    this.userService.getUserById(this.userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.userForm.patchValue(res.response);
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }

  onSubmit() {
    if (this.userForm.invalid) return;

    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(["/users"]);
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }

  cancel() {
    this.router.navigate(["/users"]);
  }
}
