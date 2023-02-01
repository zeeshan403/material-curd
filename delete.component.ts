import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestoService } from 'src/app/api/resto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
   
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,private resto:RestoService, @Inject(MAT_DIALOG_DATA) public data:any){}
  ngOnInit(): void {
    
  }

  confirmdelete(){
     this.resto.deletedata(this.data.id).subscribe(()=>{
        this.dialogRef.close(this.data.id)
     })
  }
}
