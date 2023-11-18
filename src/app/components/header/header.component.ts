import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NAV } from '../../nav-data'
import { Nav } from '../../Nav'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faSearch = faSearch;
  nav: Nav[] = NAV;
  showNav: boolean = false;

  onMouseoutNav(){
      this.showNav = false
      //removes all highlights
      document.querySelectorAll('.mainNav').forEach((e:any, i: number) => {
        document.querySelectorAll('.mainNav')[i].classList.remove('active')
      })
  }

  onMouseoverNav(item: any){
    //adds secondar links
    setTimeout(()=>{
      const thing: string[] = []
      item.subLinks.forEach((e: any) => {
        thing.push(`<a href="${e.link}">${e.text}</a>`)
      });
      document.getElementsByClassName('o-header__bottom__expanded-nav')[0].innerHTML = thing.join("")
    },10)
    //secondary nav
    this.showNav = true
    
    //keep selection highlighted
    document.querySelectorAll('.mainNav').forEach((e:any, i: number) => {
      document.querySelectorAll('.mainNav')[i].classList.remove('active')
      if(item.text === document.querySelectorAll('.mainNav')[i].innerHTML){
        document.querySelectorAll('.mainNav')[i].classList.add('active')
      }
    })
  }
}
