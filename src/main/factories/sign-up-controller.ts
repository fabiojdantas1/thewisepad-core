import { SignUp } from '@/use-cases/sign-up'
import { SignUpController } from '@/web-controllers/'
import { InMemoryUserRepository } from '@test/use-cases/doubles/repositories'
import { FakeEncoder } from '@test/use-cases/doubles/encoder'
import { makeAuthenticationStub } from '@test/use-cases/authentication'

export const makeSignUpController = (): SignUpController => {
  const userRepository = new InMemoryUserRepository([])
  const encoder = new FakeEncoder()
  const usecase = new SignUp(userRepository, encoder, makeAuthenticationStub())
  const controller = new SignUpController(usecase)
  return controller
}
