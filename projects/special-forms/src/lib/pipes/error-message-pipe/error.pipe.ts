import { Pipe, PipeTransform } from "@angular/core";
import { FormControl } from "@angular/forms";

@Pipe({
  name: "errorMessage",
})
export class ErrorMessagePipe implements PipeTransform {
  transform(
    errorsObj: { [key: string]: any },
    errorMessages: { [key: string]: any },
    control?: FormControl
  ): any {
    const errors = errorsObj ? Object.keys(errorsObj) : [];
    const error = errors[0];
    const message = errorMessages[error] || error;
    if (control) {
      control.setErrors(errorsObj);
    }
    return message;
  }
}
