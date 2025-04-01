import {useGatewayService} from "@/composables/useGatewayService.js";
import {useTaskPoller} from "@/composables/useTaskPoller.js";
import {StartTaskRequest} from "@/models/StartTaskRequest.js"


export async function startTask(fileUrl) {

    let startTaskRequest = new StartTaskRequest(fileUrl);
    console.log("Created the request. Sending to Gateway Service...");
    let taskStatusResponse = await useGatewayService().startTask(startTaskRequest);

    //TODO: Check if the Task has been created successfully
    console.log("Now we will start polling the result.");
    await useTaskPoller().startPolling(taskStatusResponse.id);
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


