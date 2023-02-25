import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'user-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
})
export class FormComponent {
    constructor() {}

    validateHttpRegex =
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    validatePhoneNumberRegex = /[+]{1}[7]{1}[0-9]{10}$/;

    // pattern="[+][7]{1}[-][0-9]{3}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}"

    handleSubmit(form: NgForm) {
        if (form.valid) console.log(form.value);
        else console.log('Invalid');
    }
}
