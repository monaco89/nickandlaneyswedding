import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  children: JSX.Element;
};

function FadeInWhenVisible({ children }: Props) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
      // initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      // initial="hidden"
      //   whileInView="visible"
      //   viewport={{ once: true }}
      //   transition={{ duration: 0.3 }}
      //   variants={{
      //     visible: { opacity: 1, scale: 1 },
      //     hidden: { opacity: 0, scale: 0 },
      //   }}
      // variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FadeInWhenVisible;
