import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EControlTypes } from '../../core/aux-data/control-types.enum';
import { SpecialFormGroup } from '../../core/forms/special-forms';
import { IFormStructure } from '../../core/interfaces/form.interfaces';
import { SpecialFormBuilderService } from '../../core/services';
import { ControlDialogComponent } from './components/control-dialog.component';

@Component({
  selector: 'spf-form-group-viewer',
  templateUrl: './form-group-viewer.component.html',
  styleUrls: ['./form-group-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormGroupViewerComponent implements OnInit {
  fields: {
    test: {
      placeholder: 'Esto es una prueba';
      label: 'Label';
      tooltip: 'Tooltip';
      icon: 'accessible';
      elementId: 'Element-id';
      styleClasses: '';
      length: 0;
      required: true;
      readOnly: false;
      type: EControlTypes.input;
      settings: {};
      errorMessages: {};
      asyncValidators: null;
      validators: null;
    };
    test2: {
      placeholder: 'Esto es una prueba';
      label: 'Label';
      tooltip: 'Tooltip';
      icon: 'accessible';
      elementId: 'Element-id';
      styleClasses: '';
      length: 0;
      required: true;
      readOnly: false;
      type: EControlTypes.input;
      settings: {};
      errorMessages: {};
      asyncValidators: null;
      validators: null;
    };
  };
  @Input('fields') set fieldSetter(fields: IFormStructure) {
    // this.formGroup = this.specialFormBuilderService.group(fields);
  }

  @Input() theme;

  // @Input('theme') set themeSetter(theme: 'light' | 'dark') {
  //   const classes = document.querySelector('body.sb-show-main').classList;
  //   theme === 'dark'
  //     ? classes.add('dark', 'mat-app-background')
  //     : classes.remove('dark', 'mat-app-background');
  // }

  @Output() getData: EventEmitter<string> = new EventEmitter();

  formGroup: SpecialFormGroup;

  constructor(
    private specialFormBuilderService: SpecialFormBuilderService,
    public dialog: MatDialog
  ) {}

  get controlTypes(): typeof EControlTypes {
    return EControlTypes;
  }

  ngOnInit(): void {}

  addControl() {
    this.dialog.open(ControlDialogComponent, {
      width: '80%',
      maxWidth:'1440px',
      maxHeight: '90vh',
      panelClass: 'dialog-panel-no-padding',
    });
  }
}
