import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
// import User from '../Models/User';
import Course from '../Models/Models'

@Controller()
export class UserController {
 
    @Get("/users")
    async getAll() {
      Course.create({name:'John'})
      .then((course) => {
         return 'success'
      })
      .catch( (err)=> {
         return 'fail'
      })
       Course.findAll().then((courses) => { return 'courses' })
      // const newUser =  User.create({
      //    name: 'Johnny',
      //    preferredName: 'John',
      //  });
   //    Course.findAll().then((courses) => {
   //       return 'courses'
   //   })
   //   .catch((err) => {
   //       return {
   //           success: false,
   //           message: "Error! Something is not right"
   //       }
   //   })
     return 'Coursessss'
    }
 
   //  @Get("/users/:id")
   //  getOne(@Param("id") id: number) {
   //     return "This action returns user #" + id;
   //  }
 
   //  @Post("/users")
   //  post(@Body() user: any) {
   //     return "Saving user...";
   //  }
 
   //  @Put("/users/:id")
   //  put(@Param("id") id: number, @Body() user: any) {
   //     return "Updating a user...";
   //  }
 
   //  @Delete("/users/:id")
   //  remove(@Param("id") id: number) {
   //     return "Removing user...";
   //  }
 
}