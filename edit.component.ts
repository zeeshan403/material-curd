import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Res } from 'src/app/api/res';
import { RestoService } from 'src/app/api/resto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  userrecord:Res = {
    id:0,
    name:'',
    email:'',
    mobile:'',
    city:''
  }

  constructor(private resto:RestoService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id = Number(params.get('id'))
      this.getbyid(id)
    })
  }
  getbyid(id:number){
     this.resto.getbyid(id).subscribe((data)=>{
        this.userrecord = data;
     })
  }

  updaterecord(){
    this.resto.updatedata(this.userrecord).subscribe(()=>{
       this.router.navigate(['/']);
    })
  }
}
