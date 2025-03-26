import {useFileUpload} from "@/composables/useFileUpload.js";
import {useGatewayService} from "@/composables/useGatewayService.js";


export async function startTask() {

    //TODO:
    if (!useFileUpload().isFileUploaded()) {
        alert("Still no file uploaded");
    }

    let fileUrl = useFileUpload().uploadFileURL
    let newTask = new Task(fileUrl);
    await useGatewayService().startSimulation(newTask);


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


