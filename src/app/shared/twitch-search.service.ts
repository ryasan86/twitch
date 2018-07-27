import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { SearchResult } from './search-result.model';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TwitchSearchService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TwitchService');
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `client_id=${environment.TWITCH_CLIENT_KEY}`,
      `query=${query}`,
      `limit=10`
    ].join('&');
    const queryUrl = `${environment.TWITCH_SEARCH_PATH}?${params}`;
    return this.http.get<SearchResult[]>(queryUrl).pipe(
      map((response: Response) => {
        return response.channels.map(channel => {
          return new SearchResult({
            _id: channel.id,
            name: channel.name,
            game: channel.game,
            status: channel.status,
            url: channel.url,
            views: channel.views,
            logo: channel.logo
          });
        });
      }, catchError(this.handleError('getChannels', [])))
    );
  }
}
