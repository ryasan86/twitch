export class SearchResult {
  id: number;
  name: string;
  status: string;
  game: string;
  videoUrl: string;
  views: number;
  logo: string;

  constructor(obj?: any) {
    this.id = (obj && obj._id) || null;
    this.name = (obj && obj.name) || null;
    this.status = (obj && obj.status) || null;
    this.game = (obj && obj.game) || null;
    this.videoUrl = (obj && obj.url) || null;
    this.views = (obj && obj.views) || null;
    this.logo = (obj && obj.logo) || null;
  }
}
