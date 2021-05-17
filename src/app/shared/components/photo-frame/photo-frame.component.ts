import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent {
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  @Output() liked: EventEmitter<void> = new EventEmitter();

  like(): void {
    this.liked.emit();
  }
}
