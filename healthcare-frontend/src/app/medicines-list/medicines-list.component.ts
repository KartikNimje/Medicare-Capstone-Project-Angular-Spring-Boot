import { CompilerFactory, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  medicines: Medicines[] = [];

  constructor(private medicinesService: MedicinesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMedicines();
  }
  private getMedicines(){
    this.medicinesService.getMedicinesList().subscribe(data => {
      this.medicines = data;
    })
  }

  viewMedicines(id: number){
    this.router.navigate(['view-medicines', id]);
  }

  editMedicines(id: number){
    this.router.navigate(['edit-medicines', id]);
  }

  deleteMedicines(id: number){
    this.medicinesService.deleteMedicines(id).subscribe( data => {
      console.log(data);
      this.getMedicines();
    })
  }
}
