import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allTasks: boolean = true;
  doneTasks: boolean = false;
  pendingTasks: boolean = false;
  actual: string = "allTasks";

  constructor(private authService: AuthService, private router: Router){
    this.changePage("allTasks");
    this.getTasks();
  }

  changePage(target: string) {
    if (target == "allTasks" && this.actual != "allTasks") {
      this.allTasks = true;
      this.doneTasks = false;
      this.pendingTasks = false;
      this.actual = "allTasks";
    } else if (target == "doneTasks" && this.actual != "doneTasks") {
      this.allTasks = false;
      this.doneTasks = true;
      this.pendingTasks = false;
      this.actual = "doneTasks";
    } else if (target == "pendingTasks" && this.actual != "pendingTasks") {
      this.allTasks = false;
      this.doneTasks = false;
      this.pendingTasks = true;
      this.actual = "pendingTasks";
    }
  }

  logOut(){
    this.authService.logout();
    
    const data = {
      
    };

    this.authService.logOut(data).subscribe(
      response => {
        // Manejar la respuesta exitosa
        this.authService.logout();
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
      // this.router.navigate(['/']);
    }

    getTasks(){
      this.authService.getTask();
      
    }
  }
  