import { Component, OnInit } from '@angular/core';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
itemBeingEdited: string = null;
  Equipment: string[]=['Habitat Dome',"Drones",'Food containers','Oxygen tanks']

  constructor() {

  }

  ngOnInit() {
  }
Add(Item:string){
  this.Equipment.push(Item); 
  
}
remove(Item:string){
  let index=this.Equipment.indexOf(Item);
  this.Equipment.splice(index,1);
}
edit(item: string) {
  this.itemBeingEdited = item;
}
save(updatedName: string, item:string) {
  let index=this.Equipment.indexOf(item);
  this.Equipment[index] = updatedName;
  //console.log(item)
  //console.log(updatedName)
  this.itemBeingEdited = null;
}
}
