import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureToBase64ConverterService {

  constructor() {
  }

  public async convertPictureToString(el: any): Promise<any> {
    return new Promise(resolve => {
      let file: File = el.target.files[0];
      let reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result.toString())
        }
      }
    })
  }
}
