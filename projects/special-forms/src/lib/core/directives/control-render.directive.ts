import { Directive, Input, ViewContainerRef } from '@angular/core';
import { SpecialFormControl } from '../forms/special-forms';

@Directive({
  selector: `[controlRender]`,
})
export class FormControlsRenderDirective {
  @Input('components') componentsBuffer: { [key: string]: any } = {};
  @Input('control') set controlSetter(control: SpecialFormControl<any>) {
    this.viewContainer.clear();
    const component = this.componentsBuffer[control.type];
    if (component) {
      const componentRef = this.viewContainer.createComponent(component);
      (componentRef.instance as any).control = control;
    }
  }

  constructor(private viewContainer: ViewContainerRef) {}
}
