const TARGET_SERVER = "http://localhost:8000/";


export function useGatewayService() {
    return {getUploadURL, uploadFileToUrl: uploadFileToUrl}
}


async function getUploadURL() {
    const response = await fetch(TARGET_SERVER + "get_upload_url");
    let json_response = await response.json();
    return json_response.message;
}

async function uploadFileToUrl(uploadFileURL, fileToUpload) {
    const response = await fetch("http://localhost:8000/your-endpoint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    return await response.json();
}
