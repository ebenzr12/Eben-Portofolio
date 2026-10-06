import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <motion.button
            key={category}
            onClick={() => onSelectCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              isActive
                ? 'bg-[#064E3B] text-[#10B981] border-[#10B981] shadow-lg shadow-[#10B981]/20'
                : 'bg-[#0A1210] text-[#94A3A0] border-[#18352C] hover:border-[#10B981]/50 hover:text-[#F5F7F6]'
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}