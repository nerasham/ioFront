import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Node} from './node';

@Component({
  selector: 'app-graph-main',
  templateUrl: './graph-main.component.html',
  styleUrls: ['./graph-main.component.css']
})
export class GraphMainComponent implements OnInit {
  nodes = [];
  arcs = [];
  greedy = [];
  selectedNode: Node;
  gFlag = false;
  polFlag = false;
  greedyString = '';

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getNodes();
    this.getArcs();
  }

  onSelect(node: Node): void {
    this.selectedNode = node;
  }

  greedyToString(): void {
    let a = 0;
    for (let i of this.greedy) {
      if (a === this.greedy.length - 1) {
        this.greedyString = this.greedyString + i;
      } else {
        this.greedyString = this.greedyString + i + '->';
      }
      a++;
    }

  }

  setpolFlag(): void {
    this.polFlag = !this.polFlag;
  }

  getGreedy(): void {
    this.appService.getGreedy().subscribe(res => {
      this.greedy = res;
      this.greedyString = '';
      this.greedyToString();
    });

    this.gFlag = !this.gFlag;
  }

  getNodes(): void {
    this.appService.getNode().subscribe(res => this.nodes = res.nodes);
  }

  getArcs(): void {
    this.appService.getNode().subscribe(res => this.arcs = res.arcs);
  }
}
