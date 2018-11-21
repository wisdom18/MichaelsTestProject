import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.userService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.userService.form.valid) {
      if (this.userService.form.get('$key').value == null)
        this.userService.CreatUser(this.userService.form.value);
      else
        this.userService.UpdateUser(this.userService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.userService.form.reset();
      //this is to be done for proper reset operation
      this.userService.form.setValue({
        $key: null,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        campanyName: '',
        homeTown: ''
      });
    }
  }

}



