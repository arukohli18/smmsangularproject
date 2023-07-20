import { Component, OnInit } from '@angular/core';
import {AppService } from '../Services/app.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
data:any;

constructor(private appService: AppService,private router:Router){}

ngOnInit(): void {
  this.appService.getmainlist().subscribe(data =>{
    this.datan=data;
  },error => console.error(error));
}
/* goToPage(){
   this.router.navigate(['/eld']); 
} */
searchText="";
datan:any;

Search(){
  //alert(this.searchText)
   if(this.searchText!== ""){
     let searchValue = this.searchText? (this.searchText).toLocaleLowerCase():null;
     console.log("searchValaue: "+searchValue);
    
     this.datan= this.datan.filter((contact:any) =>{
       return contact.name.toLocaleLowerCase.match(searchValue )
       ;
     // you can keep on adding object properties here   
     
           });
           
           console.log(this.datan);
         }
         else { 
          this.appService.getmainlist().subscribe(data =>{
            this.datan=data;
                 }, 
                 error => console.error(error));
           // if(this.searchText== ""){ you don't need this if
           
         } 
     }
}
