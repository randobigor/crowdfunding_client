import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
}