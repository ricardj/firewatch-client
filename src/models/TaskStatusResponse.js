class TaskStatusResponse
{
    constructor(id, status, log, current_image) {
        this.id = id;
        this.log = log;
        this.current_image = current_image;
        this.status = status;
    }

    id = ""
    status = "" //TODO: this is gonna be of the type task response.
    logs = ""
    current_image = ""
}
