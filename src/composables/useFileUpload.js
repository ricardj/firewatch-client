// composables/useFileUpload.js
import {ref} from 'vue'
import {useGatewayService} from "@/composables/useGatewayService.js";


export function useFileUpload() {
    const fileToUpload = ref(null) // shared reactive file
    let uploadedFile = null;
    let uploadFileURL = ""; //TODO: here set the upload url.

    async function tryUploadFile() {

        console.log(fileToUpload)
        if (!fileToUpload.value) {
            alert("Still no file selected for upload");
            return;
        }

        uploadFileURL = await useGatewayService().getUploadURL()

        if (isValidUrl(uploadFileURL)) {
            alert(`Failed to create an upload url with ${uploadFileURL}`)
            return;
        }

        uploadedFile = await useGatewayService().uploadFileToUrl(uploadFileURL, fileToUpload)

        if (!uploadedFile) {
            alert("File not uploaded.")
            return;
        }

    }

    function isFileUploaded() {
        if (uploadedFile) {
            return true;
        }
        return false;
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }


    return {
        tryUploadFile, uploadFileURL,fileToUpload, isFileUploaded
    }
}