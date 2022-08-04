import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-edit-medicines',
  templateUrl: './edit-medicines.component.html',
  styleUrls: ['./edit-medicines.component.css']
})
export class EditMedicinesComponent implements OnInit {

  id: number=0;
  medicines: Medicines = new Medicines();
  constructor(private medicinesService: MedicinesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.medicinesService.getMedicinesById(this.id).subscribe(data => {
      this.medicines = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.medicinesService.editMedicines(this.id, this.medicines).subscribe(data =>{
      this.goToMedicinesList();
    }, error => console.log(error));
  }

  goToMedicinesList(){
    this.router.navigate(['/medicines'])
  }

}
