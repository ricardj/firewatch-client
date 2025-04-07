// src/services/Logger.ts

import { Ref, ref } from "vue";

export class LoggerService {
  private static instance: LoggerService;

  public isSnackbarOn: Ref<boolean> = ref(false);
  public snackbarMessage: Ref<string> = ref("");

  public log: Ref<string> = ref("");

  public isLoading = ref(false);

  private constructor() {
    // private constructor prevents direct instantiation
  }

  static get(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }
    return LoggerService.instance;
  }

  notificationMessage(message: string): void {
    this.snackbarMessage.value = message;
    this.isSnackbarOn.value = true;
    this.logMessage(message);
  }

  logMessage(message: string) {
    if (message === "") {
      return;
    }
    this.log.value = message;
  }

  setIsLoading(value: boolean): void {
    this.isLoading.value = value;
  }
}
