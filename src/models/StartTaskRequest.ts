export class StartTaskRequest {
    upload_key:string

    constructor(uploadKey) {
        this.upload_key = uploadKey ?? "NO UPLOAD KEY";
    }
}

