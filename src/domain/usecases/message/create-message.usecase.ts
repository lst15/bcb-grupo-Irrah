import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';

interface CreateMessageeUseCaseRequest extends MessageModel {}

export class CreateMessageUseCase {
  constructor(private clientRepository: MessageRepository) {}

  async execute(request: CreateMessageeUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
