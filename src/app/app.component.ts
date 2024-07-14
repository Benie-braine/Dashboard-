import { HeaderComponent } from './composant/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './composant/sidenav/sidenav.component';
import { HomeComponent } from './composant/home/home.component';
import { DashboardComponent } from './composant/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent , SidenavComponent,HomeComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashbord';
}
