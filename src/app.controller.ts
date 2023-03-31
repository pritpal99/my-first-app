import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { StudentService } from "./app.services";

@Controller("student")

export class studentController{
    constructor(private studentService:StudentService){}
    //add student
    @Post("/add")
    addStudent():string{
        return this.studentService.addStudent();
    }
    
    //getting All student
    @Get("/findAll")
    GetAllStudents():string{
        return this.studentService.GetAllStudents();
    }
    
    @Get("/find/:id")
    findStudentById(@Param("id") params):string{
        return `Student with id ${params}`

    }
    
    //Deleting a student
    @Delete("/delete")
    deleteStudent():string{
        return this.studentService.deleteStudent();
    }
    
    //Updating a student
    @Put("/update")
    updateStudent():string{
        return this.studentService.updateStudent();
    }
}