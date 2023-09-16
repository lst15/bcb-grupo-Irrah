import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

@Injectable()
export class MemoryClientRepository extends ClientRepository {
  private database: ClientModel[] = [
    {
      user_id: 0,
      plan_type: 'pre-pago',
      allow_consume: 0,
      credits: 0.25,
      current_consume: 0,
    },
    {
      user_id: 1,
      plan_type: 'pre-pago',
      allow_consume: 0,
      credits: 0,
      current_consume: 0,
    },
    {
      user_id: 2,
      plan_type: 'pos-pago',
      allow_consume: 0.25,
      credits: 0,
      current_consume: 0,
    },
    {
      user_id: 3,
      plan_type: 'pos-pago',
      allow_consume: 0,
      credits: 4,
      current_consume: 0,
    },
    {
      user_id: 4,
      plan_type: 'pago',
      allow_consume: 0,
      credits: 4,
      current_consume: 0,
    },
  ];

  changeLimit(user_id: number, limit: number): Promise<any> | object {
    const user = this.database.find((user) => user.user_id === user_id);
    user.allow_consume = limit;

    return {
      success: true,
    };
  }

  changeplan(user_id: number, plan_type: string): Promise<any> | object {
    const user = this.database.find((user) => user.user_id === user_id);
    user.plan_type = plan_type;

    return {
      success: true,
    };
  }

  getClient(user_id: number): Promise<ClientModel> | object {
    const user = this.database.find((user) => user.user_id === user_id);
    return user;
  }

  changeCredits(user_id: number, credits: number): Promise<any> | object {
    const user = this.database.find((user) => user.user_id === user_id);
    user.credits = credits;

    return {
      success: true,
    };
  }

  changeCurrentConsume(
    user_id: number,
    consume: number,
  ): Promise<any> | object {
    const user = this.database.find((user) => user.user_id === user_id);
    user.current_consume = consume;

    return {
      success: true,
    };
  }

  create(entity: ClientModel): Promise<ClientModel> | object {
    this.database.push({ ...entity });
    return entity;
  }
}
