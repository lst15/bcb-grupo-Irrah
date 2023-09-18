import { Injectable } from '@nestjs/common';
import { PlatformModel } from 'src/domain/models/platform.model';
import { PlatformRepository } from 'src/domain/repositories/platform.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaPlatformRepository implements PlatformRepository {
  constructor(private prisma: PrismaService) {}

  async findPlatform(
    platform_id?: number,
    platform_name?: string,
  ): Promise<PlatformModel> {
    return await this.prisma.platform.findFirst({
      where: {
        OR: [
          {
            platform_id: platform_id,
          },
          {
            platform_name: platform_name,
          },
        ],
      },
    });
  }

  async create(entity: PlatformModel): Promise<object | PlatformModel> {
    return await this.prisma.platform.create({
      data: {
        platform_cost: entity.platform_cost,
        platform_name: entity.platform_name,
      },
    });
  }
}
