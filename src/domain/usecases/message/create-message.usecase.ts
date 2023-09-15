import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { Injectable } from '@nestjs/common';

interface CreateMessageeUseCaseRequest extends MessageModel {}

@Injectable()
export class CreateMessageUseCase {
  constructor(private clientRepository: MessageRepository) {}

  async execute(request: CreateMessageeUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
