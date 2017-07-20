import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Deal } from 'services/deal';
import { DealService } from 'services/deal.service';

@Component({
  selector: 'public-deals',
  templateUrl: 'public-deals.component.html',
  styleUrls: ['public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];
  errorMessage: string;

  constructor(private dealService: DealService,private router: Router) {
  }

  ngOnInit(): void {
      this.dealService.getPublicDeals()
              .subscribe(deals => this.publicDeals = deals,
                          error => this.errorMessage = <any>error);
  }
  
    onClick() {
    this.router.navigate(["./products"]);
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}
