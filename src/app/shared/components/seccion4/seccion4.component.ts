import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { toggleBox } from '../../constants/animation';
import { Seccion4Config } from '../../models';

@Component({
  selector: 'app-seccion4',
  templateUrl: './seccion4.component.html',
  styleUrls: ['./seccion4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[toggleBox]
})
export class Seccion4Component implements OnInit {
  @Input() config = new Seccion4Config;
  constructor() { }

  ngOnInit(): void {
  }

}
