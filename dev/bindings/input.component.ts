import {Component} from 'angular2/core';

@Component({
   selector: 'my-input',
   template: `
    <h1>Your details, please</h1>
    <div>
        <label for="name">Your Name</label>
        <input type="text" id="name">
    </div>
    <div>
        <label for="age">Your age</label>
        <input type="text" id="age">
    </div>
    <br>
    <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
    <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
    <br>
    <button [disabled]="!isValid">Submit</button> 
   ` 
})
// fajna sprawa ze mozna sobie tutaj string interpolation
// od razu uzyc z ternary operatorem 
export class InputComponent {
   myself = {name: '', age: ''};
   ifFilled = false;
   isValid = false;  
}
