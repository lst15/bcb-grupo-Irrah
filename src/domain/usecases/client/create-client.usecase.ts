import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface CreateClienteUseCaseRequest extends ClientModel {}

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(request: CreateClienteUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
