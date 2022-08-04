import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  id: number=0;
  num1: number = 1;
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

  orderSummary(id: number){
    this.router.navigate(['order-summary', id]);
  }

}
