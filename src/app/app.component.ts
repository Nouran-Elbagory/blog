import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  persons: { name: string; age: number }[] = [];
  onPersonAdded(person: any) {
    this.persons.push(person);
  }
}
