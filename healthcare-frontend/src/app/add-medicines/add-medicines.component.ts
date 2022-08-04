import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  medicines: Medicines = new Medicines();
  constructor(private medicinesService: MedicinesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMedicines(){
    this.medicinesService.addMedicines(this.medicines).subscribe( data => {
      console.log(data);
      this.goToMedicinesList();
    },
    error => console.log(error)
    );
  }

  goToMedicinesList(){
    this.router.navigate(['/medicines']);
  }

  onSubmit(){
    console.log(this.medicines);
    this.saveMedicines();
  }

}
