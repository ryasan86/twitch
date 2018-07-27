import { environment } from '../../environments/example-environment';
import { TwitchSearchService } from './twitch-search.service';

export const twitchSearchInjectables: Array<any> = [
  { provide: TwitchSearchService, useClass: TwitchSearchService },
  {
    provide: environment.TWITCH_CLIENT_KEY,
    useValue: environment.TWITCH_CLIENT_KEY
  },
  {
    provide: environment.TWITCH_SEARCH_PATH,
    useValue: environment.TWITCH_SEARCH_PATH
  }
];
