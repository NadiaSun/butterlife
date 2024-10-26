import { Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService implements OnDestroy {
  popup: boolean = false;
  public popup$: Subject<Card> = new Subject<Card>()
  card!: Card;
  sub!: Subscription;

  catalogBeautyCalon: Card[] = [{id: "1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_1_1', imgBig: 'site_1_1_b'
}, {id: "2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_2_1', imgBig: 'site_2_1_b'
}, {id: "3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_3_1', imgBig: 'site_3_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_4_1', imgBig: 'site_4_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_5_1', imgBig: 'site_5_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_6_1', imgBig: 'site_6_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_7_1', imgBig: 'site_7_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_8_1', imgBig: 'site_8_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_9_1', imgBig: 'site_9_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_10_1', imgBig: 'site_10_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_11_1', imgBig: 'site_11_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_12_1', imgBig: 'site_12_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_13_1', imgBig: 'site_13_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_14_1', imgBig: 'site_14_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_15_1', imgBig: 'site_15_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_16_1', imgBig: 'site_16_1_b'
},

]

getSrc(img?: string): string {
  if(img) {
    return "../assets/img/" + img + '.jpg'
  }
  return "../assets/img/" + 'error' + '.jpg'
}

srcTelBot(id: string): string {
  return `https://tg.pulse.is/CalmHaven_bot?start=66e2aa4a16c4d6f9e10c2bbe|id_site=${id}`
}

  constructor() {
    this.sub = this.popup$.subscribe(value => {
      this.card = value;
      this.popup = true;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  closePopup() {
    this.popup = false;
  }

}
