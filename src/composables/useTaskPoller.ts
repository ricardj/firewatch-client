import { ref, Ref } from "vue";
import { useGatewayService } from "@/composables/useGatewayService";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";
import { LoggerService } from "@/services/LoggerService";

export function useTaskPoller() {
  const isPolling: Ref<boolean> = ref(false);
  let intervalId: number | null = null;

  const startPolling = (
    taskId: string,
    intervalMs: number = 3000,
    taskStatus: Ref<TaskStatusResponse>,
  ) => {
    return new Promise<void>((resolve) => {
      isPolling.value = true;

      intervalId = setInterval(async () => {
        try {
          console.log("Polling");
          taskStatus.value = await useGatewayService().getTaskStatus(taskId);

          if (
            taskStatus.value.status === "COMPLETED" ||
            taskStatus.value.status === "SUCCESS" ||
            taskStatus.value.status === "FAILURE"
          ) {
            LoggerService.get().notificationMessage(
              `Task finished: ${taskStatus.value.status}`,
            );
            stopPolling();
            resolve();
          }
        } catch (err) {
          LoggerService.get().notificationMessage("Some kind of error.");
          stopPolling();
          resolve();
        }
      }, intervalMs);
    });
  };

  const stopPolling = () => {
    console.log("Stop polling: IntervalId=" + intervalId);
    if (intervalId) clearInterval(intervalId);
    isPolling.value = false;
  };

  return { isPolling, startPolling, stopPolling };
}
