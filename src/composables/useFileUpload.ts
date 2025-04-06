// composables/useFileUpload.js
import { Ref, ref } from "vue";
import { UploadURLResponse } from "@/models/UploadURLResponse";
import { useGatewayService } from "@/composables/useGatewayService";
import { LoggerService } from "@/services/LoggerService";

export function useFileUpload() {
  const fileToUpload: Ref<File | null> = ref(null); // shared reactive file
  let uploadedFile: File;
  const uploadURLResponse: Ref<UploadURLResponse | null> = ref(null); //TODO: here set the upload url.

  async function tryUploadFile() {
    LoggerService.get().logMessage(fileToUpload.value?.name);
    LoggerService.get().setIsLoading(true);
    if (!fileToUpload.value) {
      alert("Still no file selected for upload");
      return;
    }

    uploadURLResponse.value = await useGatewayService().getUploadURL();
    console.log("Received Upload URL:");
    console.log(uploadURLResponse);
    let uploadURL = uploadURLResponse.value.uploadUrl;
    if (!isValidUrl(uploadURL)) {
      alert(`Upload URL not valid: ${uploadURL}`);
      return;
    }
    uploadedFile = await useGatewayService().uploadFileToUrl(
      uploadURL,
      fileToUpload.value,
    );

    if (!uploadedFile) {
      alert("File not uploaded.");
      return;
    }

    LoggerService.get().setIsLoading(false);
    LoggerService.get().notificationMessage("File uploaded!");
  }

  function isFileUploaded() {
    if (uploadedFile) {
      return true;
    }
    return false;
  }

  function isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  return {
    tryUploadFile,
    uploadURLResponse,
    fileToUpload,
    isFileUploaded,
  };
}
