import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor() {}

  
  showModalFlag = false;
  showModalFlag2 = false;

  showModal() {
    this.showModalFlag = true;

}

showModal2(){
  this.showModalFlag2 = true;
}


hideModal() {
  this.showModalFlag = false;
}

}
