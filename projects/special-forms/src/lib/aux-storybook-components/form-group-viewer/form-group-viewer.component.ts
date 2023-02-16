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
import { BehaviorSubject, filter, map, Subject } from 'rxjs';
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
  private fieldsSub: BehaviorSubject<IFormStructure> = new BehaviorSubject({});
  formGroup$ = this.fieldsSub
    .asObservable()
    .pipe(map((fields) => this.specialFormBuilderService.group(fields)));

  @Input('fields') set fieldSetter(fields: IFormStructure) {}

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
        this.fieldsSub.next({
          ...this.fieldsSub.value,
          ...field,
        });
      }
    });
  }

  trackByFn(
    _index: number,
    { name }: { name: string; control: AbstractControl }
  ) {
    return name;
  }

  drop(event: CdkDragDrop<string[]>) {
    const currentFields = Object.entries(this.fieldsSub.value).map(
      ([key, value]) => ({ [key]: value })
    );
    moveItemInArray(currentFields, event.previousIndex, event.currentIndex);
    const fields = currentFields.reduce((prev, curr) => {
      return { ...prev, ...curr };
    }, {});
    this.fieldsSub.next(fields);
  }

  close(name: string) {
    const nextFields = { ...this.fieldsSub.value };
    delete nextFields[name];
    this.fieldsSub.next(nextFields);
  }

  generate() {
    console.log(JSON.stringify(this.fieldsSub.value));
  }
}
