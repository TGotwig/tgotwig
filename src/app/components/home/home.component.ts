import { Component } from '@angular/core'
declare var gsap: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data = [
    {
      name: 'Github',
      class: 'fa-github',
      href: 'https://github.com/TGotwig',
      text: 'Check out my Github for personal projects and more 🐱'
    },
    {
      name: 'Twitter',
      class: 'fa-twitter',
      href: 'https://twitter.com/tgotwig',
      text: 'Follow me on Twitter for programming related posts in future 🦋'
    },
    {
      name: 'Linkedin',
      class: 'fa-linkedin-in',
      href: 'https://www.linkedin.com/in/thomas-gotwig-244a35177',
      text: 'Connect with me on a professional level on Linkedin 🤗'
    },
    {
      name: 'Kaggle',
      class: 'fa-kaggle',
      href: 'https://www.kaggle.com/thomasgotwig',
      text: 'Check out my Kaggle to see on which challenges I currently compete 🤖 an older account is also available under the URL-ending "tgotwig" 🤓'
    },
    {
      name: 'Stackoverflow',
      class: 'fa-stack-overflow',
      href: 'https://stackoverflow.com/users/6244047/thomas-gotwig',
      text: 'Check out my contributions on Stackoverflow 📚'
    },
    {
      name: 'Medium',
      class: 'fa-medium-m',
      href: 'https://medium.com/@tgotwig',
      text: 'Check out my writings on Medium ✍️'
    },
  ]

  ngOnInit() {
    gsap.from('#left', {
      opacity: 0,
      duration: 1,
      x: -50,
      y: -50
    })
    gsap.from('#right', {
      opacity: 0,
      duration: 1,
      x: 50,
      y: -50
    })
    gsap.from('#block1', {
      opacity: 0,
      duration: 1.5,
      delay: 0.4,
    })
    gsap.from('#block2', {
      opacity: 0,
      duration: 1.5,
      delay: 0.6,
    })
    gsap.from('#block3', {
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
    })
  }
}
