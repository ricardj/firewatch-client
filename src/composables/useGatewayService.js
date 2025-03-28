import {startTask} from "@/composables/useTaskService.js";

const TARGET_SERVER = "http://localhost:8000";


const startTaskEndpoint = `${TARGET_SERVER}/start_task`;
const stopTaskEndpoint = `${TARGET_SERVER}/stop_task`;
const getTaskStatusEndpoint = `${TARGET_SERVER}/get_task_status`;
const getUploadUrlEndpoint = `${TARGET_SERVER}/get_upload_url`;


export function useGatewayService() {

    async function startTask(uploadKey) {
        let startTaskRequest = new StartTaskRequest(uploadKey);
        const response = await fetch(startTaskEndpoint, {
            method: "POST",
            body: JSON.stringify(startTaskRequest),
        });
    }

    async function stopTask() {
    }

    async function getTaskStatus() {
    }

    async function getUploadURL() {
        const response = await fetch(getUploadUrlEndpoint);
        let json_response = await response.json();
        let upload_key = json_response.upload_key;
        let upload_url = json_response.upload_url;
        return new UploadURLResponse(upload_key, upload_url);
    }

    async function uploadFileToUrl(uploadFileURL, fileToUpload) {
        console.log("Doing the upload file to " + uploadFileURL);
        console.log(fileToUpload);

        const response = await fetch(uploadFileURL, {
            method: "PUT",
            body: fileToUpload,
        });
        console.log(response);
        // TODO: should we validate response ?

        return fileToUpload;

    }

    return {getUploadURL, uploadFileToUrl, startTask, stopTask, fetchTaskStatus: getTaskStatus};
}