import "reflect-metadata";
import { Controller, Param, Body, Get, Post, Put, Delete, UseBefore, UseAfter, UnauthorizedError } from "routing-controllers";
import { Middleware } from '../../../middlewares/middleware'
import { User } from '../../../models/User'
import { createConnection } from "typeorm";

import { getRepository } from "typeorm";


@Controller()
export class UserController {

  @Get("/users")
  async getAll() {
    createConnection()
      .then(async connection => {
        const user = getRepository(User);
        return {user}
      })

    // user.createQueryBuilder("user")
    // .where("user.id = :id", { id: 1 })
    // .getOne();

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