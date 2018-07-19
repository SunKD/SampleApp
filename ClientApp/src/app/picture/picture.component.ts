import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  msg = "Click the submit button to reveal the picture."
  InitialClick = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.InitialClick = true;
  }

}
