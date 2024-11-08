export class AddFormError {
  isError: boolean;
  descError: boolean;
  descErrorMsg: string;
  priorityError: boolean;
  priorityErrorMesg: string;

  constructor() {
    this.isError = false;
    this.descError = false;
    this.descErrorMsg = "";
    this.priorityError = false;
    this.priorityErrorMesg = "";
  }
}
