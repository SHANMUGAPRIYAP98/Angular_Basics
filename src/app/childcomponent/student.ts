export abstract class Student {
    regNo:number;
    studName:string;
    dept:string;
    constructor(regNo:number,studName:string,dept:string)
    {
        this.regNo=regNo;
        this.studName=studName;
        this.dept=dept;
    }
}
