
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'food' | 'drink' | 'dessert';
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
