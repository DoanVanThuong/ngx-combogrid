import { NgModule } from '@angular/core';
import { NgxCombogridComponent } from './ngx-combogrid-library.component';
import { HighlightPipe } from './pipe/hightlight.pipe';



@NgModule({
  declarations: [NgxCombogridComponent, HighlightPipe],
  imports: [
  ],
  exports: [NgxCombogridComponent]
})
export class NgxCombogridLibraryModule { }
