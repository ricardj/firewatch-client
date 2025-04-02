export class StartTaskRequest
{
    upload_key = "";

    constructor(uploadKey) {
        this.upload_key = uploadKey ?? "NO UPLOAD KEY";
    }
}

