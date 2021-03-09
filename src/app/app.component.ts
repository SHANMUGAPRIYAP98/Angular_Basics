import { CurrencyPipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Course } from './childcomponent/course';
import Currency from './Providers/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //One-way Data-Binding
  title:string="Sign Up to JavaFullStack Training";
  imgUrl="https://signup.com/mobileweb/2.0/images/build/mobile-organizers.png";
  name:string="Diyashri Nagaraj"
  mail:string="diyashri@gmail.com";
  pwd:string="Abcd@12345";
  phno:number=9789098369;
  counName:string="INDIA";
//Two-Way Data-Binding
custName:string="Shanmuga Priya";
phNumber:number=8789213456;
rVal:string="Small";
crustType:string[]=["Deep Dish Pizza","Traditional Pan Pizza","New York-Style Pizza","Sicilian Pizza"];
crustVal:string="Traditional Pan Pizza";;
comm:string="Origano and Chilli Flakes Required";
pizImg1="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg";
pizImg2="https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg";
pizImg3="https://embed.widencdn.net/img/beef/pz4eba64j5/1120x840px/beef-pepper-and-onion-pizza-horizontal.tif?keep=c&u=7fueml";
rollno:number;
stuName:string;
regno:number=0;
sname:string="";
dep:string="";
cocode:string="";
coname:string="";
sdept:string="";
dept:string[]=["BCA","BBA","B.COM","Bsc.Chemistry","Bsc.Physics","Bsc.Maths","Bsc.Psychology"];
couName:string[]=["Artificial Intelligence","Business Economics","Financial Accounting","Food and Nutrition","Electronics","Discrete Maths","Social Psychology"];
course:Course[]=[];
onSubmitClick(regno,sname,dep,cocode,coname,sdept)
{
    this.regno=regno;
    this.sname=sname;
    this.dep=dep;
    this.cocode=cocode;
    this.coname=coname;
    this.sdept=sdept;
    this.course.push(new Course(this.regno,this.sname,this.dep,this.cocode,this.coname,this.sdept));
}
//dependency injection of service
constructor(public serv:Currency)
{
  setTimeout(() => {
    this.pizImg1=this.pizImg2;
    this.pizImg2=this.pizImg3;
  },6000);
  
}
//Event Handling
review:string;
public onDataEntry(e)
{
   this.rollno=e.target.value;
}
public onKeyEnter(e)
{
  this.stuName=e.target.value;
}
public onModifierKeyEntry(e)
{
  this.review=e.target.value;
}
public onButtonClick()
{
  alert("Register No: "+this.rollno+"\n"+"Student Name : "+this.stuName+"\n"+"Review : "+this.review+"\n"+"Form Submitted Successfully");
}

//Template Reference Code
reviewOptions:string[];
reviewOptions=["Excellent","Good","Fair","Bad"];
public onSubmitButt(cName:string,comm:string,revOpt:string)
{
   console.log("Full Name "+cName+"\n"+"Comments "+comm+"\n"+"Review "+revOpt+"\n"+"Form Submitted Successfully");
}
//Parent - Child Interaction





//Service
rupee:number=0;
dollar:number=0;
usdVal:number;
rupVal:number;

onUSDConv()
{
  this.usdVal=this.serv.convertToUSD(this.rupee);  
}onRupConv()
{
this.rupVal=this.serv.convertToRupee(this.dollar);
}
}