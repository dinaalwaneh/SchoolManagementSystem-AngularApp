 import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
 
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title="ANGULAR-APP";
  
 
  dat:any=[];
  constructor(private service: AppServiceService ){}
 
  submitted = false;
  
  ngOnInit(){

    this.getDataFromAPI();
  
  }

  getDataFromAPI(){
     this.service.getData().subscribe((Response)=>{ 
      console.log('Respnse from API is ',Response)
    
    },(error)=>{
      console.log('Error is ',error);
    }
    )
  }
 
  getData(){

    
      this.service.print().subscribe((result)=>{
      this.dat=result;
      console.warn("result = ",result);
      
    });
  }
  onSubmit(data:object){ 
  //  this.service.getData().subscribe(()=>{

  //  })
    
  this.service.postData(data).subscribe((Response)=>{
     
    console.log('Respnse from API is ',Response)
  },(error)=>{
    console.log('Error is ',error);
  }
  )
    console.warn("ssss",);
  }
}
