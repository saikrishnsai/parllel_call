import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs-compat";
import "rxjs/Rx";

@Injectable()
export class mycountries{
    constructor(private _http:HttpClient){}
    getcountries():any{
        return this._http.get("https://restcountries.eu/rest/v2/all")
    }
    getcust():any{
        return this._http.get("https://www.w3schools.com/angular/customers.php")
    }
}
