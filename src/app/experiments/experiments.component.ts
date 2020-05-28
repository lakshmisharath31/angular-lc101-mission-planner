import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  testBeingEdited:string =null;
  Experiments=['Mars soil sample',' Plant growth in habitat','Human bone density'];
  constructor() {

   }

  ngOnInit() {
  }
  add(test:string){
    this.Experiments.push(test);
  }
  remove(test:string){
    let index=this.Experiments.indexOf(test);
    this.Experiments.splice(index,1);
  }
  edit(test: string) {
    this.testBeingEdited = test;
  }
  save(updatedTest: string, test:string) {
    let index=this.Experiments.indexOf(test);
    this.Experiments[index] = updatedTest;
    
    this.testBeingEdited = null;
  }
}
