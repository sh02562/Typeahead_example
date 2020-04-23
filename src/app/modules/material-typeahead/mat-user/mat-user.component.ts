import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'src/app/shared/services/mock.service';
import { IUserItem } from 'src/app/shared/model/user';

@Component({
  selector: 'app-mat-user',
  templateUrl: './mat-user.component.html',
  styleUrls: ['./mat-user.component.scss']
})
export class MatUserComponent implements OnInit {

  myControl = new FormControl();
  userList: string[] = [];
  userItems: IUserItem[] = [];
  public errorMsg;

  constructor(private httpClient: HttpClient, private mockService: MockService) { }

  userSearch() {
    if (this.myControl.value) {
      this.filter(this.myControl.value);
    }
  }

  private filter(value: string): any {
    this.mockService.getUserData(value)
      .subscribe((data) => {
        debounceTime(500), this.userItems = data["items"];
        this.userList = this.userItems.map(a => a.login)// Using array from its object      
      });
  }

  ngOnInit() {
  }

}
