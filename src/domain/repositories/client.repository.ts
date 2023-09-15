import { ClientModel } from '../models/client.model';
import { BaseRepository } from './base.repository';

export abstract class ClientRepository extends BaseRepository<ClientModel> {}
