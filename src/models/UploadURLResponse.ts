export class UploadURLResponse {
  uploadUrl: string = "";
  uploadKey: string = "";

  constructor(upload_key: string, upload_url: any) {
    this.uploadUrl = upload_url;
    this.uploadKey = upload_key;
  }
}
