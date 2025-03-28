import {useFileUpload} from "@/composables/useFileUpload.js";
import {useGatewayService} from "@/composables/useGatewayService.js";
import {useTaskPoller} from "@/composables/useTaskPoller.js";


export async function startTask() {

    if (!useFileUpload().isFileUploaded()) {
        alert("Still no file uploaded");
    }

    let fileUrl = useFileUpload().uploadURLResponse
    let newTask = new Task(fileUrl);
    await useGatewayService().startTask(newTask);
    //TODO: Check if the Task has been created successfully
    //TODO: start the polling process
    await useTaskPoller().startPolling();
}
export async function stopTask() {
    await useGatewayService().stopTask();
}

export function useTaskService()
{
    return {
        startTask,stopTask
    }
}


