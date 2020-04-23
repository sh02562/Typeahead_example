import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRepoItem } from 'src/app/shared/model/repository';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'src/app/shared/services/mock.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-mat-repository',
  templateUrl: './mat-repository.component.html',
  styleUrls: ['./mat-repository.component.scss']
})
export class MatRepositoryComponent implements OnInit {

  myControl = new FormControl();
  repoList: string[] = [];
  repoItems: IRepoItem[] = []; 
  public errorMsg;

  constructor(private httpClient: HttpClient, private mockService: MockService) { }

  repoSearch() {
    if (this.myControl.value) {
      this.filter(this.myControl.value);
    }
  }

  private filter(value: string): any {
    this.mockService.getUserData(value)
      .subscribe((data) => {
        debounceTime(500), this.repoItems = data["items"];
        this.repoList = this.repoItems.map(a => a.name)// Using array from its object      
      });
  }


  ngOnInit() {
  }

}
