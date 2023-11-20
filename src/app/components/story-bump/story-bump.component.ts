import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryBumpFormat } from '../../StoryBump';
import { SB } from '../../story-bump-data'


@Component({
  selector: 'app-story-bump',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-bump.component.html',
  styleUrl: './story-bump.component.scss'
})
export class StoryBumpComponent implements OnInit{

  stories: StoryBumpFormat[] = SB; 
  

  constructor(){}
  ngOnInit(): void {
    
  }
}
