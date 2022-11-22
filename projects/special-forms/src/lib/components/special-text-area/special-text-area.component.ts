import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { ITextAreaField } from './special-text-area.interface';

@Component({
  selector: 'sp-text-area',
  templateUrl: './special-text-area.component.html',
  styleUrls: ['./special-text-area.component.scss'],
})
export class SpecialTextAreaComponent implements OnInit {
  @Input() control: SpecialFormControl<ITextAreaField>;

  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onEnter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
