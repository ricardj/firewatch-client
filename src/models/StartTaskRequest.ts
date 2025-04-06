export class StartTaskRequest {
  upload_key: string;

  constructor(uploadKey: string) {
    this.upload_key = uploadKey ?? "NO UPLOAD KEY";
  }
}
