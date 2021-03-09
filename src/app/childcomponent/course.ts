import { Student } from "./student";

export class Course extends Student {
    courseCode:string;
    courName:string;
    deptName:string;
    constructor(regNo:number,studName:string,dept:string,courseCode:string,courName:string,deptName:string)
    {
        super(regNo,studName,dept);
        this.courseCode=courseCode;
        this.courName=courName;
        this.deptName=deptName;
    }
}
