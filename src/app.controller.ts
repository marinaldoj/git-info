import { Controller, Get, Param, Req } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { respositoriesOnGit, userOnGit } from "./interfaces"
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get("/user/:login")
  async getUser(@Param("login") login: string, @Req() request: Request) {
    const protocol = request.protocol;
    const host = request.get('host');

    const response = await fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(json => {
        return {
          error: !json.status,
          data: json as userOnGit
        }
      })
    if (response.error) {
      const verifyUser = !!await this.prisma.user.findFirst({ where: { login: login } })
      if (verifyUser) {
        return { message: "Usuário ja existem em nossa base de dados." }
      } else {
        const newUser = await this.prisma.user.create({
          data: {
            login: response.data.login,
            id_on_git: response.data.id,
            avatar: response.data.avatar_url
          }
        })
        const repositories = await fetch(`https://api.github.com/users/${newUser.login}/repos`)
          .then(response => response.json())
          .then(json => json)

        await repositories.map(async (repos: respositoriesOnGit) => {
          await this.prisma.repositories.create({
            data: {
              id_on_git: repos.id,
              createAt_on_git: new Date(repos.created_at),
              name: repos.name,
              user_id: newUser.id,
              description: repos.description,
              language: repos.language,
              url: repos.url,
            }
          })
        })

        return { message: "Usuário inserido com sucesso!" }

      }
    } else {
      return { ...response.data, message: "Usuário não encontrado no git" }
    }
  }

  @Get("/user/list/:login")
  async getRepositories(@Param("login") login: string) {
    const user = await this.prisma.user.findFirst({
      where: { login: login }
    })

    if (user) {
      const repositories = await this.prisma.repositories.findMany({
        where: { user_id: user.id },
        select: {
          id_on_git: true,
          name: true,
          description: true,
          url: true,
          language: true,
          createAt_on_git: true
        }
      })

      return repositories
    } else {
      return { message: "User not found." }
    }
  }
}