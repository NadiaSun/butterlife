import { Component, OnInit } from '@angular/core';
import { PopupService } from '../shared/popup.service';
import { Card, Email } from '../shared/interfaces';
import { CatalogService } from '../shared/catalog.service';
import { EmailService } from '../shared/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorName } from '../shared/form.validator';

@Component({
  selector: 'app-popup-messenger',
  templateUrl: './popup-messenger.component.html',
  styleUrls: ['./popup-messenger.component.css']
})
export class PopupMessengerComponent implements OnInit {
  card!: Card;
  form: FormGroup;
  status: boolean = false

  constructor(
    public popupService: PopupService,
    public catalogService: CatalogService,
    private emailService: EmailService) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required, ValidatorName
      ]),
      phone: new FormControl(null, Validators.required)
    })
  }

  sendEmail() {
    if (this.form.invalid) {
      this.form.touched
      return
    }
    console.log(this.form)
    const data: Email = {
      from_name:  this.form.value.name,
      from_email: 'whitefox1331@gmail.com',
      message:  this.form.value.phone ? `Phone: ${this.form.value.phone.internationalNumber}, id-site: ${this.popupService.card.id}` : ''
    };
    this.status = true

    this.emailService.sendEmail(data).then(() => {
      this.popupService.card.status = true;
      this.form.reset()
    })
    .catch(() => {
    this.status = false
    });
  }
}
