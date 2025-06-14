import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  showLoginModal: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openLogin() {
    this.showLoginModal = true;
  }

  openRegister(event?: Event) {
    if (event) event.preventDefault();
    // For now, just open login modal (replace with register modal if implemented)
    this.showLoginModal = true;
  }

  closeModal(event?: Event) {
    if (event) event.preventDefault();
    this.showLoginModal = false;
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    alert('Login clicked!');
    this.closeModal();
  }

  forgotPassword(event: Event) {
    event.preventDefault();
    alert('Forgot password clicked! Implement recovery flow here.');
  }
}
