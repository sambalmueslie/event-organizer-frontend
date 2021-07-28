export class EventChangeRequest {
  constructor(
    public title: string,
    public description: string,
    public timestamp: string,
    public rounds: number,
    public mapId: number
  ) {
  }
}
