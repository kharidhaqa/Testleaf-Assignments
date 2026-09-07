class student{
    studentName:string
    course :string

    constructor(studentName:string, course:string){
        this.studentName=studentName
        this.course=course
    }
    displayDetails(){
        console.log(`Student Name is ${this.studentName}`)
        console.log(`Course is ${this.course}`)
    }

}
const student1 = new student('Hari','playwright')
const student2 = new student('Ram','Selenium with Java')
student1.displayDetails()
student2.displayDetails()
