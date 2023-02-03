import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SpecialFormGroup } from '../../core/forms/special-forms';
@Component({
  selector: 'sp-form',
  templateUrl: './special-form.component.html',
  styleUrls: ['./special-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialFormComponent implements OnInit {
  @Input() set control(form: SpecialFormGroup) {
    this.form = form;
  }

  form: SpecialFormGroup;

  ngOnInit(): void {}

  get controls(): { name: string; control: AbstractControl }[] {
    if (!this.form) return [];
    return Object.entries(this.form.controls).map(([name, control]) => ({
      name,
      control,
    }));
  }

  trackByFn(
    _index: number,
    { name }: { name: string; control: AbstractControl }
  ) {
    return name;
  }
}
