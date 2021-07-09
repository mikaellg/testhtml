import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: string): string {
    if( !image )
      return 'assets/images/noimage.png';
    
    if(image.length >0)
      return image;
    else
      return 'assets/images/noimage.png';
  }

}
