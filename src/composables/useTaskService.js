import {useFileUpload} from "@/composables/useFileUpload.js";
import {useGatewayService} from "@/composables/useGatewayService.js";
import {useTaskPoller} from "@/composables/useTaskPoller.js";
import fileUpload from "@/components/utilities/FileUpload.vue";


export async function startTask() {

    if (!fileUpload.isFileUploaded()) {
        alert("Still no file uploaded");
    }

    let fileUrl = fileUpload.uploadURLResponse;
    let startTaskRequest = new StartTaskRequest(fileUrl);
    await useGatewayService().startTask(startTaskRequest);

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


