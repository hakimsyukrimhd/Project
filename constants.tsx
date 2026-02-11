
import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Carbonara Rice',
    description: 'Creamy carbonara sauce served over warm rice with choice of Breaded Chicken or Beef Patty & Egg.',
    price: 'IDR 85k',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Spaghetti Cheeseburger',
    description: 'A unique twist combining the flavors of a juicy cheeseburger with classic spaghetti.',
    price: 'IDR 92k',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Dory Wasabi Creamed Spaghetti',
    description: 'Crispy Dory fish served with a subtle kick of wasabi cream over al dente spaghetti.',
    price: 'IDR 88k',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: '4',
    name: 'Beef Lasagna',
    description: 'Rich layers of pasta, beef ragu, and melted cheese, baked to perfection.',
    price: 'IDR 95k',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Cafe Latte',
    description: 'Our signature house blend espresso with silky steamed milk.',
    price: 'IDR 38k',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZSUyMGxhdHRlfGVufDB8fDB8fHww',
    category: 'drink'
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten center, served with premium vanilla ice cream.',
    price: 'IDR 45k',
    image: 'https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D',
    category: 'dessert',
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Waffle with Toppings',
    description: 'Crispy golden waffles served with your choice of seasonal fruits and syrups.',
    price: 'IDR 52k',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    category: 'dessert'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    text: 'Really nice and cosy place with pleasant staff and yummy food. The Carbonara Rice is a game changer!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael R.',
    text: 'Good atmosphere and service, with clean restrooms and gorgeous decor. Perfect for working remotely.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amanda K.',
    text: 'A hidden gem in Cipete. The coffee is consistently excellent and the homey vibe makes you want to stay all day.',
    rating: 4.7
  }
];
