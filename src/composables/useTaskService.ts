import { useGatewayService } from "@/composables/useGatewayService";
import { useTaskPoller } from "@/composables/useTaskPoller";
import { StartTaskRequest } from "@/models/StartTaskRequest";
import { UploadURLResponse } from "@/models/UploadURLResponse";

export var taskPoller = useTaskPoller();

export async function startTask(fileURLResponse: UploadURLResponse) {
  console.log("Starting task reqeuest with file URL response");
  console.log(fileURLResponse);
  let startTaskRequest = new StartTaskRequest(fileURLResponse.uploadKey);
  console.log(startTaskRequest);
  console.log("Created the request. Sending to Gateway Service...");
  let taskStatusResponse =
    await useGatewayService().startTask(startTaskRequest);

  //TODO: Check if the Task has been created successfully
  console.log("Now we will start polling the result.");
  await taskPoller.startPolling(taskStatusResponse.id);
}
export async function stopTask() {
  await useGatewayService().stopTask();
}

export function useTaskService() {
  return {
    startTask,
    stopTask,
    taskPoller,
  };
}
