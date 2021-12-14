export class GuidGenerator {
  public static createGuid(): string {
    return '_' + Math.random().toString(36);
  }

  public static createUUID(): string {
    return this.createGuid().substring(2, 9);
  }
}
