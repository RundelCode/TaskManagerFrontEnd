import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  constructor(private authService: AuthService, private router: Router) { }

  register() {

    const email=  document.getElementById("emailInput") as HTMLInputElement;
    const emailText = email.value;
    console.log(emailText)
    const password1= document.getElementById("passwordInput1") as HTMLInputElement;
    const password1Text = password1.value;
    const password2= document.getElementById("passwordInput2") as HTMLInputElement;
    const password2Text = password2.value;

    console.log(password1Text)
    
    console.log(email);
    // Verificar si las contraseñas coinciden
    if (password1Text !== password2Text) {
      console.error("Passwords do not match");
      // Puedes mostrar un mensaje de error al usuario
      return;
    }

    const data = {
      email: emailText,
      password: password1Text,
    };
    console.log(data)

    this.authService.registerUser(data).subscribe(
      response => {
        // Manejar la respuesta exitosa
        console.log(response);
        // Redirigir al usuario a otra página (por ejemplo, la página de inicio de sesión)
        this.router.navigate(['/login']);
      },
      error => {
        // Manejar errores de red u otros errores
        console.error("Registration error:", error);
        // Imprimir el cuerpo del error
        console.error("Error body:", error.error);
        // Puedes mostrar un mensaje de error al usuario
      }
    );
  }
}
