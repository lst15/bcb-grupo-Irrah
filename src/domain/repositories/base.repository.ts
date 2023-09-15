export abstract class BaseRepository<T> {
  abstract create(entity: T): Promise<T>;
  // abstract save(entity: Entity<T>): Promise<Entity<T>>;
  // abstract find(id: number | string): Promise<Entity<T> | null>;
  // abstract findAll(): Promise<Entity<T>[]>;
}
