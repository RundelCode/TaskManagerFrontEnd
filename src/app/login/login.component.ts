import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  showErrorMessage: boolean = false;

  login() {
    const email=  document.getElementById("emailInput") as HTMLInputElement;
    const emailText = email.value;
    const password= document.getElementById("passwordInput") as HTMLInputElement;
    const passwordText = password.value;

    const data = {
      email: emailText,
      password: passwordText,
    };
    this.authService.loginUser(data).subscribe(
      response => {
        // Manejar la respuesta exitosa
        // Redirigir al usuario a otra página (por ejemplo, la página de inicio de sesión)
        this.authService.login();
        this.showErrorMessage = true;
        const cookieValue = response.headers.get('Set-Cookie');
        document.cookie = cookieValue;
        //this.router.navigate(['/']);
      },
      error => {
        // Manejar errores de red u otros errores
        this.showErrorMessage = true;
        console.error("Registration error:", error);
        // Imprimir el cuerpo del error
        console.error("Error body:", error.error);
        // Puedes mostrar un mensaje de error al usuario
      }
    );
  }
}
