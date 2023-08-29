import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  raw5c4x: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - Hasugue')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Profile - Hasugue',
      },
    ])
  }
}
