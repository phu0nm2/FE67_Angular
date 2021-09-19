import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewComponent } from './movie-new/movie-new.component';

@NgModule({
  declarations: [MovieNewComponent],
  imports: [CommonModule],
  exports: [MovieNewComponent],
})
export class MoviesModule {}
