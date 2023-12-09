import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  URL_API = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.http.get(`${this.URL_API}${cep}/json/`);
  }
}
