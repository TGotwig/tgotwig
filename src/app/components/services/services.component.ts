import { Component } from '@angular/core'
declare var gsap: any

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  card2 = {
    title: `Full-Stack-Development`,
    desc: `
      I always try to program along with best practices which are in common with the most of the people,
      and I bring the following skill-sets with me 🤗👇
    `,
    items: [
      'Beautiful SPA Websites 🖼✨',
      'Beautiful visualizations 📊✨',
      'General Bioinformatics skills 🐸',
      'Machine-Learning & AI 🤖',
      'Designing Databases 🛢',
      'Strongly Security 🔒💪',
      'Container-Based Deployments 🐳',
      'Scientific Writing 🔬✍️'
    ]
  }

  ngOnInit() {
    gsap.from('#right', {
      opacity: 0,
      duration: 1,
      y: -50
    })
    gsap.from('#block1', {
      opacity: 0,
      duration: 1.5,
      delay: 0.4
    })
    gsap.from('#block2', {
      opacity: 0,
      duration: 1.5,
      delay: 0.6
    })
  }
}
