import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  id: number=0;
  medicines: Medicines = new Medicines();
  constructor(private route: ActivatedRoute,
    private medicinesService: MedicinesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicines = new Medicines();
    this.medicinesService.getMedicinesById(this.id).subscribe( data =>{
      this.medicines = data;
    })
  }

}
