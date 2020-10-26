import { Component, OnInit } from '@angular/core';
import { IDataLink } from 'src/app/core/models/link.class';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public links: Array<IDataLink>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getJSON('./assets/data/links.json')
      .subscribe((x) => (this.links = x));
  }
}
