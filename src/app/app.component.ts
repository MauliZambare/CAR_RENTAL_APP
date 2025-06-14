import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoginModal = false;
  showRegisterModal = false;
  showPassword = false;

  // Login fields
  email = '';
  password = '';

  // Register fields
  name = '';
  registerEmail = '';
  registerPassword = ''; // ✅ This line is important!

  openLoginModal(event: Event) {
    event.preventDefault();
    this.showLoginModal = true;
    this.showRegisterModal = false;
  }

  openRegister(event: Event) {
    event.preventDefault();
    this.showRegisterModal = true;
    this.showLoginModal = false;
  }

  closeModal() {
    this.showLoginModal = false;
    this.showRegisterModal = false;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log('Login:', this.email, this.password);
    this.closeModal();
  }

  register() {
    console.log('Register:', this.name, this.registerEmail, this.registerPassword);
    this.closeModal();
  }

  forgotPassword(event: Event) {
    event.preventDefault();
    alert('Password reset functionality to be implemented.');
  }
}
