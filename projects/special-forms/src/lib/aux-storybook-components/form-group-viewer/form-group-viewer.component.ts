import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
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
  private fields: IFormStructure;

  @Input() theme;

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
    const dialogRef = this.dialog.open(ControlDialogComponent, {
      width: '80%',
      maxWidth: '1440px',
      maxHeight: '90vh',
      panelClass: 'dialog-panel-no-padding',
    });

    dialogRef.afterClosed().subscribe((field: IFormStructure) => {
      if (field) {
        this.fields = { ...this.fields, ...field };
        this.formGroup = this.specialFormBuilderService.group(this.fields);
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    const currentFields = Object.entries(this.fields).map(([key, value]) => ({
      [key]: value,
    }));
    moveItemInArray(currentFields, event.previousIndex, event.currentIndex);
    const fields = currentFields.reduce((prev, curr) => {
      return { ...prev, ...curr };
    }, {});
    this.fields = fields;
    this.formGroup = this.specialFormBuilderService.group(this.fields);
  }

  close(name: string) {
    const nextFields = { ...this.fields };
    delete nextFields[name];
    this.fields = nextFields;
    this.formGroup = this.specialFormBuilderService.group(this.fields);
  }

  generate() {
    console.log(JSON.stringify(this.fields));
  }
}
