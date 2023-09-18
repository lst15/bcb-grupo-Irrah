import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

@Injectable()
export class MemoryClientRepository extends ClientRepository {
  private database: ClientModel[] = [
    {
      User_user_uuid: 'd0fa50b5-d4ec-4f36-9dae-29d4f964100f',
      plan_type: 'pre-pago',
      allow_consume: 0,
      credits: 0.25,
      current_consume: 0,
    },
    {
      User_user_uuid: 'e5e79e4c-1280-49eb-bec2-6f2cf05f7a36',
      plan_type: 'pre-pago',
      allow_consume: 0,
      credits: 0,
      current_consume: 0,
    },
    {
      User_user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      plan_type: 'pos-pago',
      allow_consume: 0.25,
      credits: 0,
      current_consume: 0,
    },
    {
      User_user_uuid: 'mnop-3456',
      plan_type: 'pos-pago',
      allow_consume: 0,
      credits: 4,
      current_consume: 0,
    },
    {
      User_user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      plan_type: 'pago',
      allow_consume: 0,
      credits: 4,
      current_consume: 0,
    },
  ];

  changeLimit(user_uuid: string, limit: number): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.allow_consume = limit;

    return {
      success: true,
    };
  }

  changePlan(user_uuid: string, plan_type: string): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.plan_type = plan_type;

    return {
      success: true,
    };
  }

  getClient(user_uuid: string): Promise<ClientModel> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    return user;
  }

  changeCredits(user_uuid: string, credits: number): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.credits = credits;

    return {
      success: true,
    };
  }

  changeCurrentConsume(
    user_uuid: string,
    consume: number,
  ): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
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
