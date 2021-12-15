import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionProps = {
  i: number;
  expanded: number | boolean;
  setExpanded: any;
};

const Accordion = ({ i, expanded, setExpanded }: AccordionProps) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        // animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>blah blah blah</p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
