import { ClientModel } from '../models/client.model';
import { BaseRepository } from './base.repository';

export abstract class ClientRepository extends BaseRepository<ClientModel> {
  abstract includeCredits(credits: number): Promise<ClientModel | null>;
  abstract checkBalance(): Promise<number | null>;
  abstract changeLimit(): Promise<ClientModel | null>;
  abstract changePlain(): Promise<ClientModel | null>;
  abstract getClient(cpf: string): Promise<ClientModel | null>;
}
