import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../store.service'
declare var gsap: any

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  items = [
    {
      name: 'Jobs',
      cert: [
        {
          preview: 'assets/img/job-mig.jpg',
          download: 'assets/pdf/job-mig.pdf',
        },
        {
          preview: 'assets/img/job-arago.jpg',
          download: 'assets/pdf/job-arago.pdf',
        },
        {
          preview: 'assets/img/job-jlu.jpg',
          download: 'assets/pdf/job-jlu.pdf',
        },
      ],
    },
    {
      name: 'Education',
      cert: [
        {
          preview: 'assets/img/thm-bachelor.jpg',
          download: 'assets/pdf/thm-bachelor.pdf',
        },
        {
          preview: 'assets/img/conference-synmikro.jpg',
          download: 'assets/pdf/conference-synmikro.pdf',
        },
      ],
    },
  ]

  ngOnInit() {
    gsap.from('.mat-tab-group', {
      opacity: 0,
      duration: 1.5,
      y: -50,
    })
  }

  constructor(public store: StoreService) {}
}
