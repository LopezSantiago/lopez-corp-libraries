import { ICheckboxSettings } from "@lib/components/special-checkbox/special-checkbox.interface";
import { EControlTypes } from "@lib/core/aux-data/control-types.enum";
import { IFormStructure } from "@lib/core/interfaces/form.interfaces";
import { of } from "rxjs";
import { CommonFormClass } from "./common.form";
import { CommonFormCreator } from "./common.form.interface";

interface ICheckboxSettingsFormData {
  labelPosition?: 'before' | 'after';
  indeterminate?: boolean;
}
export class CheckboxFormClass
  extends CommonFormClass
  implements CommonFormCreator
{
  public settingsFields(): IFormStructure {
    return {
      labelPosition: {
        label: 'Data del campo',
        styleClasses: 'px-2 box-border md:w-2/4',
        type: EControlTypes.dropdown,
        settings: {
          source: of([
            {
              name: 'before',
            },
            {
              name: 'after',
            },
          ]),
          fieldId: 'name',
          fieldName: 'name',
        },
      },
      indeterminate: {
        label: 'Ideterminado',
        type: EControlTypes.checkbox,
      },
    };
  }

  public getSettings({
    indeterminate,
    labelPosition,
  }: ICheckboxSettingsFormData): ICheckboxSettings {
    return {
      indeterminate,
      labelPosition,
    };
  }
}
