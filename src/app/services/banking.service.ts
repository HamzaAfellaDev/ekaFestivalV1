import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http: HttpClient) { }

  GetClientCardInformationTest(){
    return {
      
      "informations_client": {
      "solde": "45",
      "nom_client": "Said Belkhayat"
      },
    "historique": [
                            {
                            "date": "02-05-2022 10:10:00",
                            "note": "Recharge",
                            "montant": 100
                            },
                            {
                            "date": "03-05-2022 10:10:00",
                            "note": "Paiement",
                            "montant": -35
                            },
                            {
                            "date": "03-05-2022 12:10:00",
                            "note": "Paiement",
                            "montant": -20
                            },
                            {
                            "date": "02-05-2022 10:10:00",
                            "note": "Recharge",
                            "montant": 100
                            },
                            {
                            "date": "03-05-2022 10:10:00",
                            "note": "Paiement",
                            "montant": -35
                            },{
                            "date": "02-05-2022 10:10:00",
                            "note": "Recharge",
                            "montant": 100
                            },
                            {
                            "date": "03-05-2022 10:10:00",
                            "note": "Paiement",
                            "montant": -35
                            },{
                            "date": "02-05-2022 10:10:00",
                            "note": "Recharge",
                            "montant": 100
                            },
                            {
                            "date": "03-05-2022 10:10:00",
                            "note": "Paiement",
                            "montant": -35
                            },{
                            "date": "02-05-2022 10:10:00",
                            "note": "Recharge",
                            "montant": 100
                            },
                            {
                            "date": "03-05-2022 10:10:00",
                            "note": "Paiement",
                            "montant": -35
                            }            
                  ]
    }
  }
}
