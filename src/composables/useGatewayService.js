import {startTask} from "@/composables/useTaskService.js";

const TARGET_SERVER = "http://localhost:8000/";


const startTaskEndpoint = `${TARGET_SERVER}/start_task`;
const stopTaskEndpoint = `${TARGET_SERVER}/stop_task`;
const getTaskStatusEndpoint = `${TARGET_SERVER}/get_task_status`;
const getUploadUrlEndpoint = `${TARGET_SERVER}/get_upload_url`;


export function useGatewayService() {

    async function startTask() {
    }

    async function stopTask() {
    }

    async function getTaskStatus() {
    }

    async function getUploadURL() {
        const response = await fetch(TARGET_SERVER + "get_upload_url");
        let json_response = await response.json();
        return json_response.message;

        fetch("http://localhost:8000/get_upload_url")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Upload URL:", data.upload_url);
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });

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

    return {getUploadURL, uploadFileToUrl, startTask, stopTask, fetchTaskStatus: getTaskStatus};
}