import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { IUserItem } from 'src/app/shared/model/user';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-boot-user',
  templateUrl: './boot-user.component.html',
  styleUrls: ['./boot-user.component.scss']
})
export class BootUserComponent implements OnInit {
  userItems: IUserItem[] = [];
  userTextInput = new FormControl();
  userList: string[] = [];
  public errorMsg;

  constructor(private httpClient: HttpClient, private mockService: MockService) { }

  userSearch() {
    console.log("check userTextInput " + this.userTextInput.value);
    if (this.userTextInput.value) {
      this.getUserDetails(this.userTextInput.value);
    }
  }

  ngOnInit() { }

  getUserDetails(userName: string) {
    this.mockService.getUserData(userName).subscribe((data) => {
      debounceTime(500), this.userItems = data["items"];
      this.userList = this.userItems.map(a => a.login);// Using array from its object
      (error) => { this.errorMsg = error }
    });
  }

}

