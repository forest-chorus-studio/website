/**
 * Forest Chorus Studio — site configuration
 * Update the values below to change shop links, social profiles, and gallery content.
 * Gallery images are added to `src/assets/images/` and referenced from `galleryItems` below.
 */

export const site = {
  name: 'Forest Chorus Studio',
  tagline: 'Handcrafted Embroidery for the Modern Soul',
  description:
    'Forest Chorus Studio is an independent artist creating intricate embroidery and textile art inspired by the natural world.',
  url: 'https://forestchorusstudio.com',
  email: 'hello@forestchorusstudio.com',
  // Set to an empty string to hide the newsletter / contact form target.
  emailForInquiries: 'hello@forestchorusstudio.com',
  copyrightYear: 2026,
};

export const links = {
  etsy: 'https://www.etsy.com/shop/forestchorusstudio',
  // Leave empty to hide a platform from the footer/social row.
  instagram: '',
  pinterest: '',
};

export const nav = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/about#contact' },
];

/**
 * Gallery items.
 * To add a new piece:
 *   1. Drop the image into `src/assets/images/` (any webp/jpg/png).
 *   2. Import it below, e.g. `import newPiece from './assets/images/new-piece.jpg';`
 *   3. Add an entry to this array with a unique `id`, `image`, `title`, `year`,
 *      `category` (one of the keys in `galleryCategories`), and `description`.
 */
export const galleryCategories = ['All', 'Floral', 'Landscapes', 'Portraits', 'Books'] as const;

import isaPoo from './assets/images/isa_760xN.41708800392_6poo.jpg';
import isaIzje from './assets/images/isa_760xN.76265583551_izje.jpg';
import isa106u from './assets/images/isa_760xN.76325525585_106u.jpg';
import isaDwg2 from './assets/images/isa_760xN.41700232144_dwg2.jpg';
import ilPdz2 from './assets/images/il_340x270.7948250072_pdz2.jpg';
import ilIja5 from './assets/images/il_340x270.2850543486_ija5.jpg';
import bookL from './assets/images/91ZWjjZ0PtL._SY342_.jpg';
import bookWebp from './assets/images/51c6fXXVN-L._SX342_SY445_FMwebp_.webp';
import banner from './assets/images/isbl_1680x420.33009500_dmmyykzf.jpg';

export const heroImage = banner;

export const galleryItems = [
  {
    id: 'wildflower-hoop',
    image: isaPoo,
    title: 'Wildflower Hoop',
    year: 2024,
    category: 'Floral',
    description:
      'A foraged bouquet of wildflowers rendered in satin and seed stitches, framed in a natural beech hoop.',
  },
  {
    id: 'mountain-mist',
    image: isaIzje,
    title: 'Mountain Mist',
    year: 2024,
    category: 'Landscapes',
    description:
      'Layered thread painting evoking a soft mountain morning, with mist drifting through a sage-green valley.',
  },
  {
    id: 'fern-archive',
    image: isa106u,
    title: 'Fern Archive',
    year: 2023,
    category: 'Floral',
    description:
      'A study of unfurling ferns stitched in muted teals and golds on undyed linen.',
  },
  {
    id: 'studio-thread',
    image: isaDwg2,
    title: 'Studio Thread Study',
    year: 2024,
    category: 'Portraits',
    description:
      'A close, quiet portrait of the artist’s hand-dyed threads arranged by season.',
  },
  {
    id: 'petal-detail',
    image: ilPdz2,
    title: 'Petal Detail',
    year: 2023,
    category: 'Floral',
    description:
      'A coral-petaled bloom worked in long-and-short shading with gold filament highlights.',
  },
  {
    id: 'field-notes',
    image: ilIja5,
    title: 'Field Notes',
    year: 2022,
    category: 'Landscapes',
    description:
      'A pocket-sized landscape inspired by a sketchbook page from a late-summer meadow walk.',
  },
];

export const book = {
  title: 'My Embroidery Journey',
  cover: bookL,
  altCover: bookWebp,
  description:
    'A gentle, practical guide to modern embroidery techniques — from your first confident stitches to expressive thread painting. Available now.',
  buyLabel: 'Learn More',
  buyHref: links.etsy,
};

export const testimonials = [
  {
    title: 'Featured in Threadwork Magazine',
    body: '“A quiet, assured voice in contemporary textile art — her hoops feel like pressed flowers given a second life.”',
    tone: 'sage',
  },
  {
    title: 'Awarded Best Textile Art 2023',
    body: 'Recognized by the Regional Craft Council for botanical work that bridges traditional stitching and modern color theory.',
    tone: 'coral',
  },
  {
    title: 'Loved by collectors worldwide',
    body: '“My hoop arrived beautifully packaged and even more beautiful in person. It now hangs where the morning light can find it.”',
    tone: 'teal',
  },
];

export const futureLinks = [
  { label: 'Licensing', description: 'Surface pattern and print licensing for the work.' },
  { label: 'Press', description: 'High-res images and press kits for features and reviews.' },
  { label: 'Collaborations', description: 'Partnerships with makers, brands, and galleries.' },
];
