import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankingService } from '../../services/banking.service'

@Component({
  selector: 'app-banking-page',
  templateUrl: './banking-page.component.html',
  styleUrls: ['./banking-page.component.css']
})
export class BankingPageComponent implements OnInit {

  ClientCardInformations
  numCard = "UUEY-937017-HD"

  constructor(private router: ActivatedRoute, private bankingService: BankingService) {
   }

  ngOnInit(): void {
    //Recuperer UserId
    this.router.params.subscribe(params => this.numCard = params.userId)
    //Get User Data  
    this.ClientCardInformations = this.bankingService.GetClientCardInformationTest();
  }

  addFounds(){

  }
  
}
