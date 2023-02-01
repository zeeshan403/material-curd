import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Res } from 'src/app/api/res';
import { RestoService } from 'src/app/api/resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
   userrecord:Res = {
     id:0,
     name:'',
     email:'',
     mobile:'',
     city:''
   }
   constructor(private resto:RestoService,private router:Router){}
  ngOnInit(): void {

  }
  addrecord(){
    this.resto.postdata(this.userrecord).subscribe(()=>{
        this.router.navigate(['/'])
    })
  }
}
