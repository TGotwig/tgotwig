import { Component } from '@angular/core'
declare var gsap: any

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  items = [
    {
      name: 'Education',
      cert: [
        {
          preview: 'assets/img/thm-bachelor.png',
          download: 'assets/pdf/thm-bachelor.pdf'
        },
        {
          preview: 'assets/img/conference-synmikro.jpg',
          download: 'assets/pdf/conference-synmikro.pdf'
        },
        {
          preview: 'assets/img/conference-gcb2017.jpg',
          download: 'assets/pdf/conference-gcb2017.pdf'
        },
        {
          preview: 'assets/img/conference-gcb2015.jpg',
          download: 'assets/pdf/conference-gcb2015.pdf'
        }
      ]
    },
    {
      name: 'Jobs',
      cert: [
        {
          preview: 'assets/img/job-arago.jpg',
          download: 'assets/pdf/job-arago.pdf'
        },
        {
          preview: 'assets/img/job-jlu.jpg',
          download: 'assets/pdf/job-jlu.pdf'
        },
        {
          preview: 'assets/img/internship-tci.jpg',
          download: 'assets/pdf/internship-tci.pdf'
        },
        {
          preview: 'assets/img/internship-infobase.jpg',
          download: 'assets/pdf/internship-infobase.pdf'
        },
        {
          preview: 'assets/img/internship-hagel.jpg',
          download: 'assets/pdf/internship-hagel.pdf'
        },
        {
          preview: 'assets/img/internship-thm.jpg',
          download: 'assets/pdf/internship-thm.pdf'
        }
      ]
    }
  ]

  ngOnInit() {
    gsap.from('.mat-tab-group', {
      opacity: 0,
      duration: 1.5,
      y: -50
    })
  }
}
