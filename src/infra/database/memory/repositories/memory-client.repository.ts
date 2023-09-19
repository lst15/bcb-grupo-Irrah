import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { PlanModel } from 'src/domain/models/plan.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

@Injectable()
export class MemoryClientRepository extends ClientRepository {
  private database: ClientModel[] = [
    {
      User_user_uuid: 'd0fa50b5-d4ec-4f36-9dae-29d4f964100f',
      Plan_plan_id: 1,
      client_allow_consume: 0,
      client_credits: 0.25,
      client_current_consume: 0,
      plan_relationship: {
        '': '',
      },
    },
    {
      User_user_uuid: 'e5e79e4c-1280-49eb-bec2-6f2cf05f7a36',
      Plan_plan_id: 1,
      client_allow_consume: 0,
      client_credits: 0,
      client_current_consume: 0,
      plan_relationship: {
        '': '',
      },
    },
    {
      User_user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      Plan_plan_id: 0,
      client_allow_consume: 0.25,
      client_credits: 0,
      client_current_consume: 0,
      plan_relationship: {
        '': '',
      },
    },
    {
      User_user_uuid: 'mnop-3456',
      Plan_plan_id: 0,
      client_allow_consume: 0,
      client_credits: 4,
      client_current_consume: 0,
      plan_relationship: {
        '': '',
      },
    },
    {
      User_user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      Plan_plan_id: 0,
      client_allow_consume: 0,
      client_credits: 4,
      client_current_consume: 0,
      plan_relationship: {
        '': '',
      },
    },
  ];

  changeLimit(user_uuid: string, limit: number): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.client_allow_consume = limit;

    return {
      success: true,
    };
  }

  changePlan(user_uuid: string, plan_type: number): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.Plan_plan_id = plan_type;

    return {
      success: true,
    };
  }

  async getClient(
    user_uuid: string,
  ): null | Promise<ClientModel & { plan_relationship: PlanModel }> {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    return user;
  }

  changeCredits(user_uuid: string, credits: number): Promise<any> | object {
    const user = this.database.find(
      (user) => user.User_user_uuid === user_uuid,
    );
    user.client_credits = credits;

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
    user.client_current_consume = consume;

    return {
      success: true,
    };
  }

  create(entity: ClientModel): Promise<ClientModel> | object {
    this.database.push({ ...entity });
    return entity;
  }
}
