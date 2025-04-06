// composables/useFileUpload.js
import { Ref, ref } from "vue";
import { UploadURLResponse } from "@/models/UploadURLResponse";
import { useGatewayService } from "@/composables/useGatewayService";

export function useFileUpload() {
  const fileToUpload: Ref<File | null> = ref(null); // shared reactive file
  let uploadedFile: File;
  const uploadURLResponse: Ref<UploadURLResponse | null> = ref(null); //TODO: here set the upload url.

  async function tryUploadFile() {
    console.log(fileToUpload);
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
