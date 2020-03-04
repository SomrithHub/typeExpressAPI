import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import User from '../Models/User';
@Controller()
export class UserController {
 
    @Get("/users")
    getAll() {
      // const newUser =  User.create({
      //    name: 'Johnny',
      //    preferredName: 'John',
      //  });
       return 'success'
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