import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: AngularFireDatabase) { }
  userList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    campanyName: new FormControl(''),
    homeTown: new FormControl('')
  });


  GetUser() {
    this. userList = this.firebase.list('users');
    return this. userList.snapshotChanges();
  }


  CreatUser (user) {
     
    this. userList.push({
      firstName: user.firstName,
       lastName : user.lastName, 
       email : user.email, 
       mobile : user.mobile, 
       campanyName : user.campanyName,
       homeTown : user.homeTown
    });
  }

  PopulateForm(user) {
    this.form.setValue(user);
  }

  UpdateUser(user) {
    this. userList.update(user.$key,
      {
        firstName: user.firstName,
       lastName : user.lastName, 
       email : user.email, 
       mobile : user.mobile, 
       campanyName : user.campanyName,
       homeTown : user.homeTown
      });
  }

  DeleteUser($key: string) {
    this. userList.remove($key);
  }

}
