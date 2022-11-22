import { Component, Input, OnInit } from '@angular/core';
import { SpecialFormGroup } from '../../core/forms/special-forms';
@Component({
  selector: 'sp-form',
  templateUrl: './special-form.component.html',
  styleUrls: ['./special-form.component.scss'],
})
export class SpecialFormComponent implements OnInit {
  @Input() control: SpecialFormGroup;

  ngOnInit(): void {}
}
