import { Component, OnInit } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-loyalty-card',
  templateUrl: './loyalty-card.component.html',
  styleUrls: ['./loyalty-card.component.css']
})
export class LoyaltyCardComponent implements OnInit {

  isVisible = false;
  isConfirmLoading = false;

  selectedValue = null;
  imgList=[{
    imageSrc:'../../../../../../assets/card.jpg'
  }
  ];
  loyaltyCardSrc ='../../../../../../assets/card.jpg';
  stampSrc = '../../../../../../assets/approved.jpg';
  isrc=null;

  constructor(private nzImageService: NzImageService) {}

  // showModal(): void {
  //   this.isVisible = true;
  // }

  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     if(this.isrc){
  //       this.imgList.push({imageSrc:this.isrc});
  //     }
  //     this.isrc=null;
  //     this.isVisible = false;
  //     this.isConfirmLoading = false;
  //   }, 500);
  // }

  // handleCancel(): void {
  //   this.isVisible = false;
  //   this.isrc=null;

  // }

  // // handleChange(e:any){
  // //   let img=new Image();
  // //   console.log("I am here"+e.targe.files);
  // //   // if(e.targe.files){
  // //   //   var reader = new FileReader();
  // //   //   reader.readAsDataURL(e.target.files[0]);
  // //   //   reader.onload=(event:any)=>{
  // //   //     img.src=event.target.result;
  // //   //     console.log("I am here"+img);
  // //   //   }
  // //   // }
  // // }

  ngOnInit(): void {
  }

  showImage(imgSrc:any): void {
    const images = [
      {
        src: imgSrc,
        height: '50%',
        alt: 'loyalty card'
      }
    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }


  // handleFileSelect(evt:any) {
  //   let files = evt.target.files; // FileList object

  //   // use the 1st file from the list
  //   let f = files[0];
  //   // console.log("Iam here" + files );
  //   // Closure to capture the file information.
  //   const reader = new FileReader();
  //   reader.addEventListener('load', (event:any) => {
  //   console.log("iam here"+ event.target.result);
  //   this.isrc= event.target.result
  // });
  // reader.readAsDataURL(f);

  //     // Read in the image file as a data URL.
  //     // reader.readAsText(f);
  // }
  // removeHandler(index:number){
  //   this.imgList.splice(index,1);
  // }
  
  // getDate(){
  //   return new Date();
  // }
}
