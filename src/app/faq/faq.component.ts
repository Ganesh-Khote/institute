import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {


  faqs = [
    {
      question: 'What courses does your IT institute offer?',
      answer: 'We offer a variety of courses including Full Stack Development, Data Science, Cybersecurity, Cloud Computing, and Artificial Intelligence.',
      isOpen: false
    },
    {
      question: 'Are the courses beginner-friendly?',
      answer: 'Yes! Our courses are designed for all levels, from beginners to advanced professionals. Each course includes step-by-step instructions and hands-on projects.',
      isOpen: false
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Absolutely! We provide dedicated placement support, mock interviews, resume-building workshops, and connections to hiring partners.',
      isOpen: false
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'The course duration varies. Short-term courses last 3-6 months, while advanced certification programs can take up to a year.',
      isOpen: false
    },
    {
      question: 'Is there a certification after course completion?',
      answer: 'Yes, upon successful completion of the course and projects, you will receive an industry-recognized certification.',
      isOpen: false
    }
  ];

  toggleFaq(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}

