'use client'
import { ReactNode } from 'react';
import './header.css';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode
}

export default function Header(props: Readonly<Props>) {
  return (
    <motion.nav 
      id="header" 
      className={`container-fluid d-flex justify-content-end align-items-center fixed-top`} 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }} 
      >
      {props.children}
    </motion.nav>
  )
}