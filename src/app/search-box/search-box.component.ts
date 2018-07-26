import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TwitchSearchService } from '../shared/twitch-search.service';
import { SearchResult } from '../shared/search-result.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private twitchSvc: TwitchSearchService, private el: ElementRef) {}

  ngOnInit() {}
}
