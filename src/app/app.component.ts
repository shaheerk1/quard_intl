import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoldersComponent } from "./components/folders/folders.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoldersComponent, FoldersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rsc_mng';
}
