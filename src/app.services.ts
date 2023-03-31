import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class StudentService{
    addStudent():string{
        return "Adding a new Student";
   }

   GetAllStudents():string{
    return "Getting all the students";
   }

   deleteStudent():string{
    return "Deleting a Student";
   }

   updateStudent():string{
    return "updating a Student";
}
}