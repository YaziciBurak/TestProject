import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { OldMovie } from './old-movie.class';
import { CommonModule } from '@angular/common';
//decorator => attribute,annotation
@Component({
  selector: 'app-root', // angularda bir component başka bir component içerisinde kullanılabilir.
  standalone: true, // birim testlerinin veya modullerin kendi başına çalışabilir olması
  imports: [
    RouterOutlet,
     FormComponent,
     FormsModule,
     CommonModule
    ], // hangi dış angular modüllerini kullanabileceğini belirtir.
  templateUrl: './app.component.html', // bu compenentin hangi html görüntüsünü göstereceğini belirtir
  styleUrl: './app.component.scss' // stil dosyası
})
export class AppComponent {
  title = 'testproject';
  option: string = ' ';
  movie: OldMovie = new OldMovie ('Star Wars: Episode IV  A New Hope', 'George Lucas', 1977);
  age: number = 0;
}
