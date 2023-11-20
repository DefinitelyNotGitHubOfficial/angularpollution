import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component'
import { StoryBumpComponent } from '../../components/story-bump/story-bump.component'
import { QuickLinksComponent } from '../../components/quick-links/quick-links.component'
import { MoveForwardComponent } from '../../components/move-forward/move-forward.component'
import { FoundationComponent } from '../../components/foundation/foundation.component'

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    StoryBumpComponent, 
    QuickLinksComponent, 
    MoveForwardComponent,
    FoundationComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
