import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {

  name:string = '';
  age: number = 0;
  
  @Output() personAdded = new EventEmitter<{name:string,age:number}>();
  onAdd() {
    const newPerson = { name: this.name, age: this.age };
    this.personAdded.emit(newPerson);
    this.name = '';
    this.age = 0;
  }


}
