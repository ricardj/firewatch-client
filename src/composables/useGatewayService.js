import {startTask} from "@/composables/useTaskService.js";

const TARGET_SERVER = "http://localhost:8000";


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
        const response = await fetch(getUploadUrlEndpoint);
        let json_response = await response.json();
        return json_response.upload_url;

        // fetch("http://localhost:8000/get_upload_url")
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error("Network response was not ok");
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log("Upload URL:", data.upload_url);
        //     })
        //     .catch(error => {
        //         console.error("Fetch error:", error);
        //     });

    }

    async function uploadFileToUrl(uploadFileURL, fileToUpload) {
        console.log("Doing the upload file to " + uploadFileURL);
        console.log(fileToUpload);
        console.log(fileToUpload.size);
        const response = await fetch(uploadFileURL, {
            method: "PUT",
            body: fileToUpload,
        });
        console.log(response);
        console.log(await response.json());

    }

    return {getUploadURL, uploadFileToUrl, startTask, stopTask, fetchTaskStatus: getTaskStatus};
}