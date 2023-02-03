import { ICON_NAMES } from '@lib/core/aux-data/all-icons';
import { EControlTypes } from '@lib/core/aux-data/control-types.enum';
import { TRawFields } from '@lib/core/interfaces/form.interfaces';
import { Subject } from 'rxjs';

export class CommonFormClass {
  protected iconField(label:string): Partial<TRawFields> {
    const iconSUb = new Subject<any[]>();
    return {
      placeholder: 'Buscar',
      label,
      tooltip: 'Selecciona una opción',
      styleClasses: 'px-2 box-border md:w-1/4',
      icon: 'format_italic',
      type: EControlTypes.autocomplete,
      settings: {
        fieldId: 'name',
        fieldName: 'name',
        source: iconSUb.asObservable(),
        getData: (query) => {
          const filteredIcons = ICON_NAMES.filter((icon) =>
            icon.includes(query)
          )
            .slice(0, 10)
            .map((icon) => ({ name: icon }));
          iconSUb.next(filteredIcons);
        },
      },
    };
  }
}
