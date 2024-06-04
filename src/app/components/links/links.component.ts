import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/interface/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent  implements OnInit {


  links: Links[] = [
    {
      uri: 'https://www.linkedin.com/in/luiz-fiuza-/',
      name: 'Linkedin',
      color: 'primary',
      icon: 'logo-linkedin',
      type: 'link'
    },
    {
      uri: 'https://github.com/luizfiuzaa',
      name: 'Github',
      color: 'dark',
      icon: 'logo-github',
      type: 'link'
    },
    {
      uri: 'mailto:luizfiuza.b@gmail.com',
      name: 'Email',
      color: 'secondary',
      icon: 'mail',
      type: 'email'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
