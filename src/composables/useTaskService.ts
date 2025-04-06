import {useGatewayService} from "@/composables/useGatewayService.ts";
import {useTaskPoller} from "@/composables/useTaskPoller.ts";
import {StartTaskRequest} from "@/models/StartTaskRequest.ts"


export async function startTask(fileURLResponse) {

    let startTaskRequest = new StartTaskRequest(fileURLResponse.uploadKey);
    console.log(startTaskRequest);
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


