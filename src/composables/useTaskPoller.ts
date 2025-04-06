import { ref, onUnmounted, Ref } from "vue";
import { useGatewayService } from "@/composables/useGatewayService";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";

export function useTaskPoller() {
  const taskStatus: Ref<TaskStatusResponse> = ref({
    id: "NONE",
    status: "NONE", // TODO: Replace with an enum or union type when ready
    logs: "...",
    currentImage: "https://mfiles.alphacoders.com/100/1008007.png",
  });
  const isPolling: Ref<boolean> = ref(false);
  let intervalId: number | null = null;

  const startPolling = (taskId: string, intervalMs = 3000) => {
    isPolling.value = true;

    intervalId = setInterval(async () => {
      try {
        console.log("Polling");
        taskStatus.value = await useGatewayService().getTaskStatus(taskId);
        console.log(taskStatus.value);

        //TODO: WE should here render the results

        if (taskStatus.value.status === "COMPLETED") {
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

  return { taskStatus: taskStatus, isPolling, startPolling, stopPolling };
}
