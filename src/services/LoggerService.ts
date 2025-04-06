// src/services/Logger.ts

import { ref } from "vue";

export class LoggerService {
  private static instance: LoggerService;
  public isSnackbarOn: boolean = ref(false);
  public snackbarMessage: string = ref("");
  public log: string = ref("");

  private constructor() {
    // private constructor prevents direct instantiation
  }

  static get(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }
    return LoggerService.instance;
  }

  notification_message(message: string): void {
    this.snackbarMessage.value = message;
    this.isSnackbarOn.value = true;
  }

  log_message(message: string) {
    this.log.value = message;
  }
}
