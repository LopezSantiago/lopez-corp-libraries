import {
  Component,
  OnInit,
  Input,
  ContentChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import {
  SpecialFormArray,
  SpecialFormGroup,
} from '../../core/forms/special-forms';
@Component({
  selector: 'sp-array',
  templateUrl: './special-form-array.component.html',
  styleUrls: ['./special-form-array.component.scss'],
})
export class SpecialArrayComponent implements OnInit {
  @Input() set control(formArray: SpecialFormArray) {
    this.dataSource.data = formArray.controls;
    this.formArray = formArray;
    this.columns = this.getColumns(formArray.form);
  }

  columns = 3;
  formArray: SpecialFormArray;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  get withFormHeader() {
    return !!this.formArray.settings.withFormHeader;
  }

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  constructor() {}

  getColumns(form: SpecialFormGroup) {
    return Object.keys(form.controls).length + 1;
  }

  removeItem(index) {
    this.formArray.removeAt(index);
  }

  ngOnInit() {}

  addItem() {
    this.formArray.addItem();
    console.log(this.formArray);
  }
}
