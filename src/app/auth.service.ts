import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public authToken: any = '';

  constructor(private http: HttpClient) {}

  // Método para establecer el estado de inicio de sesión
  login() {
    this.isLoggedIn = true;
  }

  // Método para cerrar sesión
  logout() {
    this.isLoggedIn = false;
    this.authToken = '';
  }

  // Método para obtener el estado de inicio de sesión
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  // Método para establecer el token de autenticación
  setToken(token: string) {
    this.authToken = token;
  }

  // Método para obtener el token de autenticación
  getToken() {
    return this.authToken;
  }

  // Método para registrar un nuevo usuario
  registerUser(data: any): Observable<any> {
    // Aquí deberías realizar la llamada HTTP para el registro en el servidor
    // Debes cambiar la URL según la estructura de tu backend
    const registerUrl = 'http://localhost:8000/register';

    // Realizar la solicitud POST al servidor
    return this.http.post(registerUrl, data);
  }

  loginUser(data: any): Observable<any> {
    // Aquí deberías realizar la llamada HTTP para el registro en el servidor
    // Debes cambiar la URL según la estructura de tu backend
    const loginUrl = 'http://localhost:8000/login';

    // Realizar la solicitud POST al servidor
    return this.http.post(loginUrl, data);
  }

  logOut(data: any): Observable<any> {
    // Aquí deberías realizar la llamada HTTP para el registro en el servidor
    // Debes cambiar la URL según la estructura de tu backend
    const logOutUrl = 'http://localhost:8000/logout';

    // Realizar la solicitud POST al servidor
    return this.http.post(logOutUrl, data);
  }

  getTask() {
    const url = 'http://localhost:8000/task';
      console.log(this.authToken)
      this.http.get(url).subscribe(
        response => {
          // Manejar la respuesta exitosa
          console.log("aaaa")
          console.log(response);
        },
        error => {
          // Manejar errores de red u otros errores
          console.error("Error:", error);
          // Puedes mostrar un mensaje de error al usuario
        }
      );
    }
}
