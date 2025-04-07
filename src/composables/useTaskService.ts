import { useGatewayService } from "@/composables/useGatewayService";
import { useTaskPoller } from "@/composables/useTaskPoller";
import { StartTaskRequest } from "@/models/StartTaskRequest";
import { UploadURLResponse } from "@/models/UploadURLResponse";
import { ref, Ref } from "vue";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";
import { LoggerService } from "@/services/LoggerService";

export var taskPoller = useTaskPoller();

const taskStatus: Ref<TaskStatusResponse> = ref({
  id: "NONE",
  status: "NONE", // TODO: Replace with an enum or union type when ready
  logs: "...",
  currentImage: "https://mfiles.alphacoders.com/100/1008007.png",
});

export async function startTask(fileURLResponse: UploadURLResponse) {
  LoggerService.get().setIsLoading(true);
  LoggerService.get().logMessage("Starting task");
  let startTaskRequest = new StartTaskRequest(fileURLResponse.uploadKey);
  console.log(startTaskRequest);
  let taskStatusResponse: TaskStatusResponse =
    await useGatewayService().startTask(startTaskRequest);

  taskStatus.value = taskStatusResponse;

  //TODO: Check if the Task has been created successfully
  console.log("Now we will start polling the result.");
  await taskPoller.startPolling(taskStatusResponse.id, 100, taskStatus);

  LoggerService.get().logMessage("Task finished");
  LoggerService.get().setIsLoading(false);
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
