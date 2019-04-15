import { Component } from '@angular/core';
import {mycountries} from "./services/my.countries";
import {HttpErrorResponse} from "@angular/common/http";
import { forkJoin } from 'rxjs';
import {Observable} from "rxjs";
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result1:any;
  private result2:any;
  constructor(private _serv:mycountries){}
  ngOnInit(){
    Observable.forkJoin([this._serv.getcountries(),this._serv.getcust()]).subscribe((posres)=>{
      this.result1=posres[0];
      this.result2=posres[1].records;
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side error")
      }else{
        console.log("server side error")
      }
    })
  }
}
