import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IInputSettings } from './special-input.interface';

@Component({
  selector: 'sp-input',
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.scss']
})
export class SpecialInputComponent implements OnInit {
  @Input() control: SpecialFormControl<IInputSettings>;

  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onEnter: EventEmitter<any> = new EventEmitter();
  @Output() iconAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
