import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../shared/search-result.model';

@Component({
  selector: 'app-twitch-search',
  templateUrl: './twitch-search.component.html',
  styleUrls: ['./twitch-search.component.scss']
})
export class TwitchSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;
  constructor() {}

  ngOnInit() {}

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results', this.results);
  }
}
