import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  providers: [UserService]
})
export class RegisterformComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder : FormBuilder) { }
  userToRegister!: User;
  userRegisterForm!: FormGroup;

  createUserForm(){
    this.userRegisterForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      GSM: ["", Validators.required],
      Email: ["", Validators.required],
      BirthDate: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createUserForm();
  }
  
  addUser(){
    if(this.userRegisterForm.valid){
      this.userToRegister = Object.assign({}, this.userRegisterForm.value)  
      this.userService.addUser(this.userToRegister);
    }
  }
}
