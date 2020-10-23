import { Component, OnInit, ElementRef } from '@angular/core';
import { IDataLink } from '../core/models/link.class';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
