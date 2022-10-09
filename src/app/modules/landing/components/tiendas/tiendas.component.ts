import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TiendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
