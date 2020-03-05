import "reflect-metadata";
import { Controller, Param, Body, Get, Post, Put, Delete, UseBefore, UseAfter, UnauthorizedError } from "routing-controllers";
import all from '../../../models/UserModel'
import { Allow } from "class-validator";
@Controller()
export class UserController {

  @Get("/users")
  async index() {
    return await all()
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/users")
  post(@Body() user: any) {
    // createConnection()
    // .then(async con => {
    //   let user = new User();
    //   user.email = 'admin@admin'
    //   user.isActive = false
    //   user.password = 'atv'
    //   user.save();
    // })
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }

}