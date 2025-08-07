import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res.response;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      },
    });
  }

  deleteUser(id: string) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      this.userService.deleteUser(id).subscribe({
        next: () => this.getUsers(),
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
    }
  }

  editUser(user: any) {
    this.router.navigate(["users/update", user.id]);
  }
}
