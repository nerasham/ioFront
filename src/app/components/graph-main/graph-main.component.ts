import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-graph-main',
  templateUrl: './graph-main.component.html',
  styleUrls: ['./graph-main.component.css']
})
export class GraphMainComponent implements OnInit {
  nodes = [];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  this.getGraph();
  }

  getGraph(): void {
    this.appService.getDicts().then(res => this.nodes = res);

  }
}
