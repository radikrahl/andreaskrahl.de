import { Component, OnInit } from '@angular/core';
import { IDataLink } from 'src/app/core/models/link.class';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public headline: string;

  constructor() {}

  ngOnInit(): void {}
}
