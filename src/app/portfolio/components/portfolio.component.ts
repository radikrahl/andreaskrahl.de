import { Component, OnInit } from '@angular/core';
import { IDataLink } from 'src/app/core/models/link.class';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
    public links: Array<IDataLink>;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
      this.dataService
        .getJSON('./assets/data/links.json')
        .subscribe((x) => (this.links = x));
    }
}
