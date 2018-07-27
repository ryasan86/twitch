import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

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

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.twitchSvc.search(query)),
        switchAll()
      )
      .subscribe(
        (results: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
