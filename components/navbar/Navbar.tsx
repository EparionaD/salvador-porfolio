'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

import styles from './navbar.module.scss';
import { itemsNavbar } from '@/data';
import { menuSlide, slide } from '@/utils/animate';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Link href='/'>
          <h1 className={styles.navbar__title}>Salvador Pariona</h1>
        </Link>
      </div>
      <div
        className={styles.navbar__button}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div
          className={`${styles.navbar__burger} ${
            isActive ? styles.burgerActive : ''
          }`}
        ></div>
      </div>
      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className={styles.navbarMobile}
          >
            <h1 className={styles.navbarMobile__title}>Salvador Pariona</h1>
            <motion.div
              variants={slide}
              initial='initial'
              animate='enter'
              exit='exit'
              className={styles.navbarMobile__links}
            >
              {itemsNavbar.map(({ id, title, link }) => (
                <Link
                  href={link}
                  key={id}
                  className={styles.navbarMobile__link}
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  {title}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
