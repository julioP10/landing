import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Seccion1Config } from '../../models';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: ['./seccion1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Seccion1Component implements OnInit {

  @Input() config = new Seccion1Config;
  constructor() { }

  ngOnInit(): void {
  }

}
