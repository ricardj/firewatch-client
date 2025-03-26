// composables/useFileUpload.js
import { ref } from 'vue'

const uploadedFile = ref(null) // shared reactive file

export function useFileUpload() {
    return {
        uploadedFile
    }
}