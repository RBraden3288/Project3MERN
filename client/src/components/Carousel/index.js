import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './style.css'


const items = [
  {
    src: 'https://i.ibb.co/c3BKHQh/IMG-7406.jpg',
    altText: 'Slide 1',
    caption: 'Come home to a clean space.',
    header: 'Relax'
  },
  {
    src: 'https://i.ibb.co/6ZMdCqY/IMG-7409.jpg',
    altText: 'Slide 2',
    caption: 'Expecting a package? Important mail?',
    header: 'Peace of Mind'
  },
  {
    src: 'https://i.ibb.co/pdNwSq4/IMG-7400.jpg',
    altText: 'Slide 3',
    caption: 'Get to know your neighbors.',
    header: 'Building Communities'
  }
  
];

const CarouselRS = () => <UncontrolledCarousel items={items} className='carousel'/>;

export default CarouselRS;