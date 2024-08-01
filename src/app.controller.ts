import { Controller, Get, Param, Req } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { respositoriesOnGit, userOnGit } from "./interfaces"
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get("/user/:login")
  
  // Essa função recebe o login do usuário no git
  async getUser(@Param("login") login: string, @Req() request: Request) {

    // Fetch da api do git hub que traz os dados do usuário 
    const response = await fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(json => {
        return {
          error: !json.status,
          data: json as userOnGit
        }
      })
    if (response.error) {

      // Verificar se o usário existe na nossa base
      const verifyUser = !!await this.prisma.user.findFirst({ where: { login: login } })
      
      // Verificar se o usário existe na nossa base
      if (verifyUser) {
        return { message: "Usuário ja existem em nossa base de dados."}
      } else {

        // Cria o usuário pesquisado na nossa base
        const newUser = await this.prisma.user.create({
          data: {
            login: response.data.login,
            id_on_git: response.data.id,
            avatar: response.data.avatar_url
          }
        })

        // Pega todos os repositórios e salva em nossa base
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
  // Essa função recebe o login do usuário no git
  async getRepositories(@Param("login") login: string) {
    const user = await this.prisma.user.findFirst({
      where: { login: login }
    })

    //Verifica se o usuário existe em nossa base, se existir mostra os repositórios dele
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

  @Get("/user/search/:search")
  // Essa função recebe um parametro search que vai buscar o repositório pelo nome ou descrição
  async searchRepository(@Param("search") search: string) {

    const repositories = await this.prisma.repositories.findMany({
      where:{
        OR:[
          {
            name: {
              contains: search,
            }
          },
          {
            description: {
              contains: search,
            }
          }
        ]
      }
    })
    
    return repositories
  }
}