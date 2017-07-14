import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { MediaItemService } from './media-item.service';

@Component({
  selector: 'app-mw-media-item-list',
  templateUrl: 'media-item-list.component.html',
  styleUrls: ['media-item-list.component.scss']
})
export class MediaItemListComponent {
  // medium = '';
  mediaItems = [
    {
        id: 1,
        name: 'First Media Item',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294415623654,
        isFavorite: false
    },
    {
        id: 2,
        name: 'First Media Item',
        medium: 'Movies',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294415623654,
        isFavorite: false
    },
    {
        id: 3,
        name: 'First Media Item',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294415623654,
        isFavorite: false
    }
  ];
  // paramsSubscription;

  // constructor(
  //   private mediaItemService: MediaItemService,
  //   private activatedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.paramsSubscription = this.activatedRoute.params
  //     .subscribe(params => {
  //       let medium = params['medium'];
  //       if(medium.toLowerCase() === 'all') {
  //         medium = '';
  //       }
  //       this.getMediaItems(medium);
  //     });
  // }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

  onMediaItemDelete(mediaItem) {
  //   this.mediaItemService.delete(mediaItem)
  //     .subscribe(() => {
  //       this.getMediaItems(this.medium);
  //     });
  }

  // getMediaItems(medium) {
  //   this.medium = medium;
  //   this.mediaItemService.get(medium)
  //     .subscribe(mediaItems => {
  //       this.mediaItems = mediaItems;
  //     });
  // }
}
