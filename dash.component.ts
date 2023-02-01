import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Res } from 'src/app/api/res';
import { RestoService } from 'src/app/api/resto.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
   getdetails:Res[]= [];
   displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'city', 'action'];

   constructor(private resto:RestoService,public dialog: MatDialog){}
   ngOnInit(): void {
     this.getuser();
   }
   getuser(){
     this.resto.getdata().subscribe((data)=>{
       this.getdetails = data;
     })
   }

   deleterecorddata(id:number){
     const deleteconfm = this.dialog.open(DeleteComponent,{
        width: '300px',
        data:{id}
     });
     deleteconfm.afterClosed().subscribe((result)=>{
       if(result){
        this.getdetails = this.getdetails.filter((_:any)=>_.id !==id);
       }
     })
   }
}
