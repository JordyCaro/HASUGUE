import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  image_src: string = '/assets/rocket1.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  title: string = 'Desarrollo'
  constructor() {}
}
