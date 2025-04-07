import { Component, Input } from '@angular/core';

@Component({
  // selector has been changed from 'app-button' to this selector:
  // with this, we tell Angular that any button elements, ANYWHERE in the application that also has the appButton atribute on it, should be controlled by THIS component.
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {}
