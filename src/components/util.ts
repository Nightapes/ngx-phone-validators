import { AbstractControl } from "@angular/forms";

export class Util {
  static isNotPresent(control: AbstractControl): boolean {
    const value = control.value;
    if (value === undefined || value === null) {
      return true;
    }
    return value !== "" ? false : true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static addError(control: AbstractControl, errorId: string, value: any) {
    if (!control.errors) {
      control.setErrors({ [errorId]: value });
    } else if (!control.hasError(errorId)) {
      control.errors[errorId] = value;
    }
  }

  static removeError(control: AbstractControl, errorId: string) {
    if (control.errors && control.hasError(errorId)) {
      delete control.errors[errorId];
    }
  }
}
