import { ref, onUnmounted, Ref } from "vue";
import { useGatewayService } from "@/composables/useGatewayService";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";

export function useTaskPoller() {
  const taskStatus = ref(null);
  const isPolling: Ref<boolean> = ref(false);
  let intervalId: number | null = null;

  const startPolling = (taskId: string, intervalMs = 3000) => {
    isPolling.value = true;

    intervalId = setInterval(async () => {
      try {
        console.log("Polling");
        let taskStatusResponse: TaskStatusResponse =
          await useGatewayService().getTaskStatus(taskId);
        console.log(taskStatusResponse);
        if (taskStatusResponse.status === "COMPLETED") {
          stopPolling();
        }
      } catch (err) {
        console.error("Polling error:", err);
        stopPolling();
      }
    }, intervalMs);
  };

  const stopPolling = () => {
    if (intervalId) clearInterval(intervalId);
    isPolling.value = false;
  };

  onUnmounted(stopPolling); // auto-cleanup

  return { taskStatus, isPolling, startPolling, stopPolling };
}
