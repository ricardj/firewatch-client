export class TaskStatusResponse {
  id: string;
  status: string; // TODO: Replace with an enum or union type when ready
  logs: string;
  currentImage: string;

  constructor(id: string, status: string, logs: string, current_image: string) {
    this.id = id;
    this.status = status;
    this.logs = logs;
    this.currentImage = current_image;
  }

  static fromJson(json: any): TaskStatusResponse {
    return new TaskStatusResponse(
      json.id,
      json.status,
      json.logs,
      json.current_image,
    );
  }
}
