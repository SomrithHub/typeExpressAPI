import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
 
@Controller()
export class UserController {
 
    @Get("/users")
    getAll() {
       return Body
      // app._router.stack.forEach(function(r){
      //    if (r.route && r.route.path){
      //    //   console.log(r.route.path)
      //    }
      //  })
       return "This action returns all users";
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