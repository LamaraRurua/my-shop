import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";

export function ageValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        return (value && value < minAge) ? { ageError: `Age must be at least ${minAge} years old.`} : null;
    }
}

export function usernameAvailableValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const forbiddenUsernames = ['admin', 'user'];
        return of(forbiddenUsernames.includes(control.value)).pipe(
            delay(2000),
            map((isTaken) => { return isTaken ? { usernameTaken: true } : null })
        );
    }
}