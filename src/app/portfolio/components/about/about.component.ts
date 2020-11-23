import { Component, OnInit } from '@angular/core';
import { IDataProfile } from 'src/app/core/models/profile.class';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public profile: IDataProfile;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getJSON<IDataProfile>('./assets/data/profile.json')
      .subscribe((data) => (this.profile = data));
  }
}
