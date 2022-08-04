import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  id: number=0;
  medicines: Medicines = new Medicines();
  constructor(private route: ActivatedRoute,
    private medicinesService: MedicinesService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicines = new Medicines();
    this.medicinesService.getMedicinesById(this.id).subscribe( data =>{
      this.medicines = data;
    })
  }

}
