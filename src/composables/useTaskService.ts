import { useGatewayService } from "@/composables/useGatewayService";
import { useTaskPoller } from "@/composables/useTaskPoller";
import { StartTaskRequest } from "@/models/StartTaskRequest";
import { UploadURLResponse } from "@/models/UploadURLResponse";
import { ref, Ref } from "vue";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";

export var taskPoller = useTaskPoller();

const taskStatus: Ref<TaskStatusResponse> = ref({
  id: "NONE",
  status: "NONE", // TODO: Replace with an enum or union type when ready
  logs: "...",
  currentImage: "https://mfiles.alphacoders.com/100/1008007.png",
});

export async function startTask(fileURLResponse: UploadURLResponse) {
  console.log("Starting task reqeuest with file URL response");
  console.log(fileURLResponse);
  let startTaskRequest = new StartTaskRequest(fileURLResponse.uploadKey);
  console.log(startTaskRequest);
  console.log("Created the request. Sending to Gateway Service...");
  let taskStatusResponse: TaskStatusResponse =
    await useGatewayService().startTask(startTaskRequest);

  taskStatus.value = taskStatusResponse;

  //TODO: Check if the Task has been created successfully
  console.log("Now we will start polling the result.");
  await taskPoller.startPolling(taskStatusResponse.id, 3000, taskStatus);
}
export async function stopTask() {
  await useGatewayService().stopTask();
}

export function useTaskService() {
  return {
    startTask,
    stopTask,
    taskStatus,
  };
}
