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
  @Input() basePath: string;
  imageurl = 'http://localhost:61165/images/';
  notfound = '/assets/images/Photo-Not-Available.png';
  thumbnotfound = '/assets/images/thumb-Photo-Not-Available.png';

  offserver = false;
  path: SafeResourceUrl;
  thumbpath: SafeResourceUrl;

  constructor
  (
    private FileSvc: FileService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    if ( this.basePath === '' || this.basePath == null) {
          this.thumbpath = this.sanitizer.bypassSecurityTrustUrl(this.thumbnotfound);
          this.path = this.sanitizer.bypassSecurityTrustUrl(this.notfound);
          this.offserver = false;
          return;
    }
    if ( this.basePath.indexOf('/') !== -1) {
      // has a slash in it, assume its off server.
        this.offserver = true;
        this.path =  this.sanitizer.bypassSecurityTrustUrl(this.basePath);
        return;
    }

    // blank filename means its on our server, append neccesary info.
       this.offserver = false;
       this.thumbpath = this.sanitizer.bypassSecurityTrustUrl(this.imageurl + 'thumb-' + this.basePath);
       this.path = this.sanitizer.bypassSecurityTrustUrl(this.imageurl + this.basePath);
     // console.log('new path: ', this.basePath);
   }
}
