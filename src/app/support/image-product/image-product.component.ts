import { Component, OnInit, Input } from '@angular/core';
import { FileService } from '../../services/file.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-image-product',
  templateUrl: './image-product.component.html',
  styleUrls: ['./image-product.component.css']
})
export class ImageProductComponent implements OnInit {

  @Input() thumbnail = false;
  notfound = '/assets/images/Photo-Not-Available.png';
  thumbnotfound = '/assets/images/thumb-Photo-Not-Available.png';
  @Input() path: SafeResourceUrl;
  constructor
  (
    private FileSvc: FileService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    console.log('Path: ', this.path);
    if ( this.path === '' || this.path == null) {
      if (this.thumbnail) {
        this.path = this.sanitizer.bypassSecurityTrustResourceUrl(this.thumbnotfound);
      } else {
        this.path = this.sanitizer.bypassSecurityTrustResourceUrl(this.notfound);
      }
      return;
    }
      // blank filename means its on our server, append neccesary info.
      if (this.thumbnail) {
        this.path = this.sanitizer.bypassSecurityTrustResourceUrl('localhost:61165/Image/' + 'thumb-' + this.path);
      } else {
        this.path = this.sanitizer.bypassSecurityTrustResourceUrl('localhost:61165/Image/' + this.path);
      }
      console.log('new path: ', this.path);
  }
}
