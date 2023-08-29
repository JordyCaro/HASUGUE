import { Component, Input } from '@angular/core'

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
})
export class ListItem {
  @Input()
  description: string =
    'Aliquam commodo porta metus id malesuada. Sed non volutpat quam. Morbi a lacinia diam. Nullam a urna ut dolor auctor mollis. Sed pretium scelerisque luctus.'
  @Input()
  title: string = '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  constructor() {}
}
