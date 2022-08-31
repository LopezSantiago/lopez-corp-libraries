import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMessagePipe } from "./error.pipe";

@NgModule({
  declarations: [ErrorMessagePipe],
  imports: [
    CommonModule,

  ],
  exports: [ErrorMessagePipe],
})
export class ErrorMessagePipeModule {}
