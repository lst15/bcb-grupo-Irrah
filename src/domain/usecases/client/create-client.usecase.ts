import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Injectable } from '@nestjs/common';

interface CreateClienteUseCaseRequest extends ClientModel {}

@Injectable()
export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(request: CreateClienteUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
