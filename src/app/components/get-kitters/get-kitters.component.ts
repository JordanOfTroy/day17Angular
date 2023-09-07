import { Component } from '@angular/core';
import { KittersService } from 'src/app/services/kitters.service';

@Component({
  selector: 'app-get-kitters',
  templateUrl: './get-kitters.component.html',
  styleUrls: ['./get-kitters.component.scss']
})
export class GetKittersComponent {

  constructor (
    private kittersService: KittersService
  ) {}

  imgSrc = ''

  showMeTheKitters () {
    this.kittersService.getRandoKitter().subscribe(
      // result => console.log(result),
      // error => console.log(error),
      (res:any) => {
        // console.log(res)
        this.imgSrc = res.image
      }
    )
  }

}
