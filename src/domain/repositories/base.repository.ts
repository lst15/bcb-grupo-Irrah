export abstract class BaseRepository<T> {
  abstract create(entity: T): Promise<T> | object;
  // abstract save(entity: Entity<T>): Promise<Entity<T>>;
  // abstract find(data: T): Promise<T | null>;
  // abstract findAll(): Promise<Entity<T>[]>;
}
