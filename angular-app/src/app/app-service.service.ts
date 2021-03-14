import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  constructor(private http:HttpClient) { }
 url:string="/api/getData";
  getData(){
   
   
  return this.http.get('/api/getData');} 

  postData(data:object){
  
      return this.http.post('/api/getData', data);
      
    }  
    
    print(){
      return this.http.get(this.url);
    }
}
