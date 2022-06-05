import { Component, OnInit } from '@angular/core';
import { IDataProfile } from 'src/app/core/models/profile.class';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public profile: IDataProfile;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getJSON<IDataProfile>('./assets/data/profile.json')
      .subscribe((data) => (this.profile = data));
  }
}
