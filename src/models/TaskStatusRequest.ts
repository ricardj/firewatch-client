export class TaskStatusRequest
{
    id:string;

    constructor(taskId: string) {
        this.id = taskId;
    }
}