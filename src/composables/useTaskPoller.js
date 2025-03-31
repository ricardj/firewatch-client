import {ref, onUnmounted} from 'vue'
import {useGatewayService} from "@/composables/useGatewayService.js";

export function useTaskPoller() {
    const taskStatus = ref(null)
    const isPolling = ref(false)
    let intervalId = null

    const startPolling = (taskId, intervalMs = 3000) => {
        isPolling.value = true

        intervalId = setInterval(async () => {
            try {
                let taskStatusResponse = useGatewayService().getTaskStatus(taskId);
                
                if (taskStatusResponse.status === 'COMPLETED') {
                    stopPolling()
                }
            } catch (err) {
                console.error('Polling error:', err)
                stopPolling()
            }
        }, intervalMs)
    }

    const stopPolling = () => {
        if (intervalId) clearInterval(intervalId)
        isPolling.value = false
    }

    onUnmounted(stopPolling) // auto-cleanup

    return {taskStatus, isPolling, startPolling, stopPolling}
}
