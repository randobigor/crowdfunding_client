import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = environment.REST_API_SERVER;

  constructor(private httpClient: HttpClient) {
  }

  public getData(queryUrl: String): any {
    return this.httpClient.get(this.url + queryUrl);
  }

  public getDataByProperty(queryUrl: string, property: string | Number): any {
    return this.httpClient.get(`${this.url + queryUrl}/${property}`);
  }

  public saveData(queryUrl: string, bodyToSave: Object): any {
    return this.httpClient.post(this.url + queryUrl, bodyToSave);
  }

  public updateData(queryUrl: string, bodyToUpdate: Object): any {
    return this.httpClient.put(this.url + queryUrl, bodyToUpdate);
  }
}
