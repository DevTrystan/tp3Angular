import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  groupes: any[] = [
    {
      name:'Dupond',
      prenom: 'Jean-Pierre',
      email: 'Jp@mail.com',
      entreprise: 'Angular',
      telephone: '01234567891'
    }
  ];

  groupe: FormGroup = this.formBuilder.group({
    name: ['', [Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    entreprise: ['',[ Validators.minLength(2), Validators.required]],
    telephone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addGroupe() {
    this.groupes.push(this.groupe.value);
    this.groupe.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.groupe.valid) {
      this.addGroupe();
    } else {
      console.log('Formulaire invalide');
    }
  }
  get form() {
    return this.groupe.controls;
  }
}
