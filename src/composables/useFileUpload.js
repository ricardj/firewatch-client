// composables/useFileUpload.js
import { ref } from 'vue'
import {useGatewayService} from "@/composables/useGatewayService.js";

const fileToUpload = ref(null) // shared reactive file
var uploadedFile = null;
var uploadFileURL = ""; //TODO: here set the upload url.

async function tryUploadFile() {

    if(!fileToUpload.value)
    {
        alert("Still no file selected for upload");
        return;
    }

    uploadFileURL = await useGatewayService().getUploadURL()

    if(uploadFileURL === '')
    {
        alert("Failed to create an upload url.")
        return;
    }

    uploadedFile = await useGatewayService().uploadFileToUrl(uploadFileURL, fileToUpload)

    if(!uploadedFile)
    {
        alert("File not uploaded.")
        return;
    }

}

function isFileUploaded() {
    if(uploadedFile)
    {
        return true;
    }
    return false;
}





export function useFileUpload() {
    return {
        tryUploadFile,uploadFileURL, isFileUploaded
    }
}