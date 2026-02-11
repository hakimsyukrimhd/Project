
import React from 'react';
import { MenuItem } from '../types';
import { Sparkles } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100">
      {item.isBestSeller && (
        <div className="absolute top-4 left-4 z-10 bg-warm-brown text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
          <Sparkles size={12} />
          <span>Best Seller</span>
        </div>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-warm-brown transition-colors">
            {item.name}
          </h3>
          <span className="text-warm-brown font-bold whitespace-nowrap ml-2">{item.price}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>
        <button className="text-xs font-bold uppercase tracking-widest text-warm-brown border-b-2 border-warm-brown border-opacity-30 hover:border-opacity-100 pb-1 w-fit transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
