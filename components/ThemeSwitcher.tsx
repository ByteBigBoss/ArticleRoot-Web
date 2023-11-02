'use client'
import React, { useEffect, useState } from 'react'

interface ThemeSwitcherProps {
  name:string,
  styles:string,
}

const toggleTheme = () => {
  const root = document.documentElement;
  if (root.getAttribute('theme') === 'light') {
    root.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Store the theme preference
  } else {
    root.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light'); // Store the theme preference
  }
};

const loadTheme = () => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme'); // Get the stored theme preference
  root.setAttribute('theme', storedTheme || 'light'); // Use the stored theme or default to 'light'
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({name,styles}) => {

  useEffect(loadTheme,[]);


  return (
    <button onClick={toggleTheme} className={styles}>{name}</button>
  )
}

export default ThemeSwitcher