import {startTask} from "@/composables/useTaskService.js";

const TARGET_SERVER = "http://localhost:8000/";

export function useGatewayService() {

    async function startTask() {
    }

    async function stopTask() {
    }

    async function fetchTaskStatus() {
    }

    async function getUploadURL() {
        const response = await fetch(TARGET_SERVER + "get_upload_url");
        let json_response = await response.json();
        return json_response.message;
    }

    async function uploadFileToUrl(uploadFileURL, fileToUpload) {
        const response = await fetch("http://localhost:8000/your-endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return await response.json();
    }

    return {getUploadURL, uploadFileToUrl, startTask, stopTask, fetchTaskStatus};
}