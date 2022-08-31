import {
  Component, Input,
} from '@angular/core';
import { SpecialFormControl } from '../../core/forms/special-forms';
import { IDropdownSettings } from './special-dropdown.interface';

@Component({
  selector: 'sp-dropdown',
  templateUrl: './special-dropdown.component.html',
  styleUrls: ['./special-dropdown.component.scss'],
})
export class SpecialDropdownComponent {
  @Input() control: SpecialFormControl<IDropdownSettings>;

  // @Input('readOnly') _readOnly = false;
  // @Input() enableLabel = true;
  // @Input('sfcontrol') _sfcontrol: SpecialFormControl & {
  //   data: DropdownTypesData;
  // };
  // @Output('sendObject') _sendObject: EventEmitter<Object> = new EventEmitter();

  // value: any = '';

  // ngOnInit() {}

  selectItem(item) {
  //   this._sendObject.emit(item);
  }
}
