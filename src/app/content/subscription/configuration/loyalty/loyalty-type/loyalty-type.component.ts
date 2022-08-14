import { Component, OnInit } from '@angular/core';
import {LoyaltyTypeData} from './loyaltyTypeData'

interface Loyality {
  id:string;
  customer: string;
  color: string;
}


@Component({
  selector: 'app-loyalty-type',
  templateUrl: './loyalty-type.component.html',
  styleUrls: ['./loyalty-type.component.css']
})
export class LoyaltyTypeComponent implements OnInit {
  editColor: { [key: string]: { edit: boolean; data: Loyality } } = {};
  loyaltyTypeData: Loyality[]= [];

  // isVisible = false;
  // isConfirmLoading = false;

  // selectedCustomer = 'Gold';
  // selectedColor = '#FFD700';
  // provinceData = ['Gold', 'Silver', 'Brown'];
  // cityData: { [place: string]: string[] } = {
  //   Gold: ['#FFD700'],
  //   Silver: ['#C0C0C0'],
  //   Brown: ['#A52A2A'],

  // };

  // provinceChange(value: string): void {
  //   this.selectedColor = this.cityData[value][0];
  // }

  constructor() { }

  // showModal(): void {
  //   this.isVisible = true;
  // }

  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     let data= {
  //       customer: this.selectedCustomer,
  //       color: this.selectedColor
  //     };
  //     this.loyaltyTypeData = [...this.loyaltyTypeData,data];
  //     this.isVisible = false;
  //     this.isConfirmLoading = false;
  //     this.selectedCustomer = 'Gold';
  //     this.selectedColor = '#FFD700';
  //   }, 500);
  // }

  // handleCancel(): void {
  //   this.selectedCustomer = 'Gold';
  //   this.selectedColor = '#FFD700';
  //   this.isVisible = false;

  // }
  // deleteUser(idx:number) {
  //   this.loyaltyTypeData.splice(idx, 1);
  //   this.loyaltyTypeData = [...this.loyaltyTypeData];

  // }
  check() {
    
console.log("worded")
  }

  startEdit(id: string): void {
    this.editColor[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.loyaltyTypeData.findIndex(item => item.id === id);
    this.editColor[id] = {
      data: { ...this.loyaltyTypeData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.loyaltyTypeData.findIndex(item => item.id === id);
    Object.assign(this.loyaltyTypeData[index], this.editColor[id].data);
    this.editColor[id].edit = false;
  }

  updateEditMessage(): void {
    this.loyaltyTypeData.forEach(item => {
      this.editColor[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    this.loyaltyTypeData = LoyaltyTypeData;
    this.updateEditMessage();
  }

}
