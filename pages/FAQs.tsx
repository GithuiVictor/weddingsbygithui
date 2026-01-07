
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutral-100 last:border-0 py-8">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className={`text-xl md:text-2xl font-serif transition-colors duration-500 ${isOpen ? 'text-[#c5a059]' : 'text-neutral-900 group-hover:text-[#c5a059]'}`}>
          {question}
        </h3>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} className="text-[#c5a059]" /> : <Plus size={20} className="text-neutral-300" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-neutral-500 font-light leading-relaxed text-lg max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: "The Logistics",
      items: [
        {
          question: "Where are you based?",
          answer: "We are based in Nairobi, Kenya, though our work takes us across the globe. From intimate local gatherings to grand destination celebrations, we film wherever love calls."
        },
        {
          question: "Do you travel?",
          answer: "Absolutely. We specialize in international wedding films and are thrilled to travel wherever your story takes us. All travel costs are included in your proposal, ensuring complete transparency from the start."
        },
        {
          question: "How many videographers will be at our wedding?",
          answer: "Depending on the wedding, we typically provide 2 to 3 cinematographers and a Drone Operator. This allows us to capture multiple perspectives like both partners getting ready and ensures we never miss a critical moment."
        },
        {
          question: "When are your films delivered?",
          answer: "Your full wedding film products are delivered within 6 - 10 weeks, crafted with the utmost care to tell your story in a way that feels timeless."
        }
      ]
    },
    {
      category: "The Commission",
      items: [
        {
          question: "How do we secure our date?",
          answer: "To ensure every couple receives our full artistic focus, we only accept a max of 25 weddings per year. A signed agreement and a 20% retainer are required and the rest 80% is cleared 24 hours before the wedding day to officially commission us for your date."
        },
        {
          question: "Can we add extra hours or days?",
          answer: "Yes. Many of our couples host multi-day celebrations or wish for extra coverage for rehearsal dinners. We can easily customize our package to fit the scope of your festivities."
        }
      ]
    }
  ];

  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="text-center mb-24 max-w-4xl mx-auto border-b border-neutral-100 pb-12">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Common Inquiries</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-neutral-900 leading-tight">
            Inquiries & <span className="italic">Insights.</span>
          </h1>
          <p className="text-neutral-500 font-light italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about commissioning your visual legacy. If your question remains unanswered, our concierge is always at your service.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-20">
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div className="flex items-center gap-4 mb-10">
                <Sparkles size={16} className="text-[#c5a059]" />
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">{category.category}</h2>
                <div className="h-px bg-neutral-100 flex-grow"></div>
              </div>
              <div className="space-y-0">
                {category.items.map((item, itemIdx) => {
                  const globalIndex = faqData.slice(0, catIdx).reduce((acc, c) => acc + c.items.length, 0) + itemIdx;
                  return (
                    <FAQItem 
                      key={globalIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === globalIndex}
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-40 bg-white rounded-[4rem] p-12 md:p-24 text-center border border-neutral-100 shadow-xl max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">Still Have Questions?</h3>
          <p className="text-neutral-500 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Every wedding is unique. If you have specific logistics or a creative vision you'd like to discuss, we invite you to reach out directly.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="mailto:weddingsbygithui@gmail.com" className="text-neutral-900 border-b border-neutral-900 pb-1 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-[#c5a059] hover:border-[#c5a059] transition-all">
              weddingsbygithui@gmail.com
            </a>
            <span className="hidden md:block text-neutral-200">|</span>
            <a href="tel:+254701230892" className="text-neutral-900 border-b border-neutral-900 pb-1 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-[#c5a059] hover:border-[#c5a059] transition-all">
              +254 701 230 892
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
