import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.css']
})
export class StampComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  imgList=[{
    imageSrc:'../../../../../../assets/approved.jpg'
  }
  ];
  isrc=null;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      if(this.isrc){
        this.imgList.push({imageSrc:this.isrc});
      }
      this.isrc=null;
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isrc=null;

  }

  ngOnInit(): void {
  }
  handleFileSelect(evt:any) {
    let files = evt.target.files; // FileList object

    // use the 1st file from the list
    let f = files[0];
    // console.log("Iam here" + files );
    // Closure to capture the file information.
    const reader = new FileReader();
    reader.addEventListener('load', (event:any) => {
    console.log("iam here"+ event.target.result);
    this.isrc= event.target.result
  });
  reader.readAsDataURL(f);
  }
  removeHandler(index:number){
    this.imgList.splice(index,1);
  }
  
  getDate(){
    return new Date();
  }
}
