import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-input-table',
  templateUrl: './user-input-table.component.html',
  styleUrls: ['./user-input-table.component.css']
})
export class UserInputTableComponent implements OnInit {

  editField: string;
  pageHeader: string = '';
  userGridDetails: Array<string> = [];
  constructor(private userService: UserService) {
    this.pageHeader = "User Data";
   }

  ngOnInit() {
    this.userService.getJSON().subscribe(res => {
      this.userGridDetails = res.users;
      console.log(this.userGridDetails);
    });
  }

  saveFormValue() {
    console.log("Saving to the File");
    this.userService.postUserJSON(this.userGridDetails).subscribe(res => {
      console.log(res);
    });
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.value;
    this.userGridDetails[id][property] = editField;
    console.log(property);
    console.log(editField);
    console.log('collection:'+this.userGridDetails[id][property]);
    console.log('final: '+ JSON.stringify(this.userGridDetails));
  }

  changeValue(id: number, property: string, event: any) {
    // console.log('change: '+ property);
    // console.log(event.target.value);
    // this.userGridDetails = event.target.value;
  }

}
