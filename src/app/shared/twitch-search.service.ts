import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { SearchResult } from './search-result.model';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class TwitchSearchService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler,
    @Inject(environment.TWITCH_CLIENT_KEY)
  ) {
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
        console.log(<any>response.json());
        // return response.channels.map(channel => {
        //   return new SearchResult({
        //     _id: channel.id,
        //     name: channel.name,
        //     game: channel.game,
        //     status: channel.status,
        //     url: channel.url,
        //     views: channel.views,
        //     logo: channel.logo
        //   });
        // });
      }, catchError(this.handleError('getChannels', [])))
    );
  }
}
