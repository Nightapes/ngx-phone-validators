# ngx-phone-validators

[![npm](https://david-dm.org/nightapes/ngx-phone-validators.svg)](https://david-dm.org/nightapes/ngx-phone-validators)

An implementation of various angular validators for Angular 2+.

# List of validators

1. Phone

# Install

`npm install ngx-phone-validators --save`

## [Angular CLI](https://github.com/angular/angular-cli)

No config needed

## [Angular Seed](https://github.com/mgechev/angular-seed)

Add following to `project.config.ts`

```ts
let additionalPackages: ExtendPackages[] = [
  {
    name: "google-libphonenumber",
    path: "node_modules/google-libphonenumber/dist/libphonenumber.js"
  },
  {
    name: "ngx-phone-validators",
    path:
      "node_modules/ngx-phone-validators/bundles/ngx-phone-validators.umd.min.js"
  }
];

this.addPackagesBundles(additionalPackages);
```

For AOT add

```ts
this.ROLLUP_NAMED_EXPORTS = [
  ...this.ROLLUP_NAMED_EXPORTS,
  {
    "node_modules/google-libphonenumber/dist/libphonenumber.js": [
      "PhoneNumberUtil"
    ]
  }
];
```

## Install

```
npm install ngx-phone-validators --save
```

## How to use [model driven]

needs: `ReactiveFormsModule`

### Phones

```ts
import {PhoneValidators} from 'ngx-phone-validators'

...
phone: FormControl = new FormControl('', Validators.compose([
    PhoneValidators.isValidRegionCode,
    PhoneValidators.isPhoneNumber('DE'),
    PhoneValidators.isPossibleNumberWithReason('DE'),
    ]));
```

```
regionCode: FormControl = new FormControl('', PhoneValidators.isValidRegionCode);
phoneNumber: FormControl = new FormControl('', PhoneValidators.isPhoneNumber('DE'));
possiblePhoneNumber: FormControl = new FormControl('', PhoneValidators.isPossibleNumberWithReason('DE'));
```

## How to use [template driven]

needs `FormsModule and PhoneValidatorsModule`

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PhoneValidatorsModule } from "ngx-phone-validators";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, PhoneValidatorsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Phone

```html
<form>
  <input
    [(ngModel)]="model.phone"
    name="phone"
    #formControl="ngModel"
    phone="DE"
  />
  <span *ngIf="formControl.hasError('noValidRegionCode')"
    >Invalid region code</span
  >
  <span *ngIf="formControl.hasError('noPhoneNumber')"
    >No valid phone number</span
  >
</form>
```

### Country Code

```html
<form>
  <input
    [(ngModel)]="model.phone"
    name="phone"
    #formControl="ngModel"
    countryCode
  />
  <span *ngIf="formControl.hasError('noValidRegionCode')"
    >Invalid region code</span
  >
</form>
```

### Possible phone

```html
<form>
  <input
    [(ngModel)]="model.phone"
    name="phone"
    #formControl="ngModel"
    possiblePhone="DE"
  />
  <span *ngIf="formControl.hasError('noValidRegionCode')"
    >Invalid region code</span
  >
  <span *ngIf="formControl.hasError('noPhoneNumber')"
    >No valid phone number</span
  >
  <span *ngIf="formControl.hasError('phoneNumberTooLong')"
    >Phone number too long</span
  >
  <span *ngIf="formControl.hasError('phoneNumberTooShort')"
    >Phone number too short</span
  >
</form>
```

Get the complete changelog here: https://github.com/Nightapes/ngx-phone-validators/releases
