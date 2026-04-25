import { motion } from 'framer-motion'

/**
 * EditorialLetter — Left column for Chapter 5
 * Styled like a high-fashion magazine column.
 */
export default function EditorialLetter() {
  return (
    <div className="max-w-[480px] mx-auto text-charcoal/90">
      <h2 className="font-display text-4xl md:text-5xl font-normal mb-8 tracking-tight">
        A Final Note.
      </h2>
      
      {/* Drop Cap styling applied to the first letter */}
      <p className="font-display text-base leading-relaxed text-justify relative
                    first-letter:float-left first-letter:text-7xl first-letter:pr-3 
                    first-letter:font-normal first-letter:leading-[0.8] first-letter:text-charcoal">
        {/* INSERT FINAL LETTER TEXT HERE */}
        Nineteen marks a transition—a space between the prologue or start of youth and the 
        chapters of true independence. Over these years, you've curated an insatiable apetite 
        not just in studies, but in art,character. An unwavering dedication to growth, 
        a discerning eye for the beautiful, and a resilience that outshines any fleeting 
        challenge. This archive is merely a reflection of the light you already project 
        into the world and what has been and what can be . As the ledger balances and the audit concludes, the verdict is 
        unequivocal: you are exactly where you are meant to be, holding infinite potential,alas this is just the begining of what may come in your life,as you start this beautiful chapter in life there is nothing but gratitude to anyone and everyone that you would achieve altogether,low and behold do not forget yourself behind others,live your life likewise and to the fullest,own your choices as you with your life.
      </p>
      
      <p className="font-display text-base leading-relaxed text-justify mt-4">
        May this year be filled with late-night inspirations, perfect iced coffees, 
        and the realization of dreams that currently exist only on your moodboards.
      </p>
      
      <div className="mt-12">
        <p className="font-mono text-[10px] tracking-widest uppercase text-charcoal/40">
          Signed,
        </p>
        <p className="font-display text-2xl italic mt-2">
          Mummy and Certain Others
        </p>
      </div>
    </div>
  )
}
