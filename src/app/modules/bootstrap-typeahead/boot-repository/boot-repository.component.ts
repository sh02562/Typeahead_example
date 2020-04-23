import { Component, OnInit } from '@angular/core';
import { IRepoItem } from 'src/app/shared/model/repository';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'src/app/shared/services/mock.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-boot-repository',
  templateUrl: './boot-repository.component.html',
  styleUrls: ['./boot-repository.component.scss']
})
export class BootRepositoryComponent implements OnInit {

  repoItems: IRepoItem[] = [];
  repoTextInput = new FormControl();
  repoList: string[] = [];
  public errorMsg;


  constructor(private httpClient: HttpClient, private mockService: MockService) { }

  repoSearch() {
    console.log("check userTextInput " + this.repoTextInput.value);
    if (this.repoTextInput.value) {
      this.getRepoDetails(this.repoTextInput.value);
    }
  }

  ngOnInit() {
  }

  getRepoDetails(userName: string) {
    this.mockService.getRepoData(userName).subscribe((data) => {
      debounceTime(500), this.repoItems = data["items"];
      this.repoList = this.repoItems.map(a => a.name);// Using array from its object
      (error) => { this.errorMsg = error }
    });
  }

}
