import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProvincesService{
  baseUrl = `https://vapi.vnappmob.com/api/province`;
  constructor(
    private http: HttpClient
  ){}

  getProvinces(){
    return this.http.get(this.baseUrl);
  }

  getDistricts(provinceCode: number){
    return this.http.get(`${this.baseUrl}/district/${provinceCode}`);
  }

  getWards(districtId: number){
    return this.http.get(`${this.baseUrl}/ward/${districtId}`);
  }
}