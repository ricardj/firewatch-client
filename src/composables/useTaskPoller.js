import {ref, onUnmounted} from 'vue'

export function useTaskPoller() {
    const taskStatus = ref(null)
    const isPolling = ref(false)
    let intervalId = null

    const startPolling = (taskId, intervalMs = 3000) => {
        isPolling.value = true

        intervalId = setInterval(async () => {
            try {
                const {data} = await axios.get(`/api/task/${taskId}/status`)
                taskStatus.value = data

                if (data.status === 'complete' || data.status === 'failed') {
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
