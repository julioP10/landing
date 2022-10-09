import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Seccion3Config } from '../../models';

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Seccion3Component implements OnInit {
  @Input() config = new Seccion3Config;
  constructor() { }

  ngOnInit(): void {
  }

}
