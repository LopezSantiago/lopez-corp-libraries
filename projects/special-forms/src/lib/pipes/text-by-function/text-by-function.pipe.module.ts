import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TextByFunctionPipe } from "./text-by-function.pipe";

@NgModule({
  declarations: [TextByFunctionPipe],
  imports: [
    CommonModule,

  ],
  exports: [TextByFunctionPipe],
})
export class TextByFunctionPipeModule {}
