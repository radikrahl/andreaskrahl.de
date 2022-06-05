import { Component, OnInit } from '@angular/core';
import { IDataLink } from 'src/app/core/models/link.class';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.scss'],
})
export class CurrentProjectsComponent implements OnInit {
  public projects: Array<IDataLink>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getJSON<Array<IDataLink>>('./assets/data/current-projects.json')
      .subscribe((x) => (this.projects = x));
  }
}
