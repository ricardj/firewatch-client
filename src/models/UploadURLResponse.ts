export class UploadURLResponse
{
    uploadUrl = "";
    uploadKey = "";

    constructor(upload_key, upload_url) {
        this.uploadUrl = upload_url;
        this.uploadKey = upload_key;
    }
}