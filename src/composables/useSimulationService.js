import {useFileUpload} from "@/composables/useFileUpload.js";


export function startSimulation() {

    //TODO:
    if(!useFileUpload().isFileUploaded())
    {
        alert("Still no file uploaded");
    }

    let fileUrl = useFileUpload().uploadFileURL

}
export function stopSimulation() {}

export function useSimulationService()
{
    return {
        startSimulation, stopSimulation
    }
}


