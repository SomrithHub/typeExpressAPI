import "reflect-metadata";
import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  UseBefore,
  UseAfter,
  UnauthorizedError
} from "routing-controllers";
import {User} from '../../../models/User'
import { createConnection } from "typeorm";
import { Allow } from "class-validator";

@Controller()
export class UserController {

  @Get("/users")
  async index() {
    // createConnection().then(connection => {
    //   let allPhotos = User.find();
    //   console.log("All photos from the db: ", allPhotos);
    // });
    return "hey";
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
