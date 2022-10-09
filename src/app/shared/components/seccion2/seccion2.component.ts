import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Seccion2Config } from '../../models';

@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Seccion2Component implements OnInit {
  @Input() config = new Seccion2Config;
  constructor() { }

  ngOnInit(): void {
  }

}
