import { PlatformModel } from '../models/platform.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PlatformRepository extends BaseRepository<PlatformModel> {
  abstract findPlatform(
    platform_id?: number,
    platform_name?: string,
  ): Promise<PlatformModel | null>;
}
