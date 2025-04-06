import { ref, onUnmounted, Ref } from "vue";
import { useGatewayService } from "@/composables/useGatewayService";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";
import { TaskStatusRequest } from "@/models/TaskStatusRequest";

export function useTaskPoller() {
  const isPolling: Ref<boolean> = ref(false);
  let intervalId: number | null = null;

  const startPolling = (
    taskId: string,
    intervalMs: number = 3000,
    taskStatus: Ref<TaskStatusResponse>,
  ) => {
    isPolling.value = true;

    intervalId = setInterval(async () => {
      try {
        console.log("Polling");
        taskStatus.value = await useGatewayService().getTaskStatus(taskId);

        if (
          taskStatus.value.status === "COMPLETED" ||
          taskStatus.value.status === "SUCCESS"
        ) {
          console.log("Task status completed");
          stopPolling();
        }
      } catch (err) {
        console.error("Polling error:", err);
        stopPolling();
      }
    }, intervalMs);
  };

  const stopPolling = () => {
    console.log("Stop polling: IntervalId=" + intervalId);
    if (intervalId) clearInterval(intervalId);
    isPolling.value = false;
  };

  return { isPolling, startPolling, stopPolling };
}
