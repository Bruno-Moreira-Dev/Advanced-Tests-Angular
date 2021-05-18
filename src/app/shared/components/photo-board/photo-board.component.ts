import { Component, Input } from '@angular/core';

import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent {
  @Input() photos: Photo[];
  rows: any[][] = [];
}
