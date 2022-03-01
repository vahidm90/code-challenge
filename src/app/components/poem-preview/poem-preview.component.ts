import { Component, Input } from '@angular/core';
import { IPoemModel } from '../../interfaces/poem.model';

@Component({
  selector: 'app-poem-preview',
  templateUrl: './poem-preview.component.html',
  styleUrls: ['./poem-preview.component.css']
})
export class PoemPreviewComponent {

  @Input()
  poem!: IPoemModel;

  constructor() { }

}
