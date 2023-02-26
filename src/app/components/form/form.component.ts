import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'app/models/user.model';

@Component({
    selector: 'user-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
})
export class FormComponent {
    constructor() {}

    @Output() updateUser = new EventEmitter<IUser>();

    validateHttpRegex =
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    validatePhoneNumberRegex = /^\d{10}$/;

    handleSubmit(form: NgForm) {
        if (form.valid) {
            this.updateUser.emit(form.value);
        } else {
            form.form.setErrors({
                error: 'Form is invalid',
            });
            console.error(form.form.getError('error'));
        }
    }
}
