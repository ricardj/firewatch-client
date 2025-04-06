import { StartTaskRequest } from "@/models/StartTaskRequest";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";
import { TaskStatusRequest } from "@/models/TaskStatusRequest";
import { UploadURLResponse } from "@/models/UploadURLResponse";

const TARGET_SERVER = "http://localhost:8000";

const startTaskEndpoint = `${TARGET_SERVER}/start_task`;
const stopTaskEndpoint = `${TARGET_SERVER}/stop_task`;
const getTaskStatusEndpoint = `${TARGET_SERVER}/get_task_status`;
const getUploadUrlEndpoint = `${TARGET_SERVER}/get_upload_url`;

export function useGatewayService() {
  async function startTask(
    startTaskRequest: StartTaskRequest,
  ): Promise<TaskStatusResponse> {
    console.log(startTaskRequest);
    console.log(JSON.stringify(startTaskRequest));
    const response = await fetch(startTaskEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(startTaskRequest),
    });
    let responseJson = await response.json();
    console.log("We received an answer");
    console.log(responseJson);
    return responseJson.body;
  }

  async function stopTask() {
    //TODO: This for now won't have an implementation
  }

  async function getTaskStatus(taskId: string): Promise<TaskStatusResponse> {
    let getTaskStatusRequest = new TaskStatusRequest(taskId);
    const response = await fetch(getTaskStatusEndpoint, {
      method: "GET",
      body: JSON.stringify(getTaskStatusRequest),
    });

    let json_response = await response.json();
    console.log(json_response);
    return new TaskStatusResponse(
      json_response.id,
      json_response.status,
      json_response.log,
      json_response.current_image,
    );
  }

  async function getUploadURL(): Promise<UploadURLResponse> {
    const response = await fetch(getUploadUrlEndpoint);
    let json_response = await response.json();
    let upload_key = json_response.upload_key;
    let upload_url = json_response.upload_url;
    return new UploadURLResponse(upload_key, upload_url);
  }

  async function uploadFileToUrl(
    uploadFileURL: string,
    fileToUpload: File,
  ): Promise<File> {
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

  return { getUploadURL, uploadFileToUrl, startTask, stopTask, getTaskStatus };
}
