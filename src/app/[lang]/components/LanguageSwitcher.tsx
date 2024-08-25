'use client';

import React, { FC, useEffect, useState } from 'react';
import { Props } from '@/types/dictionary';

const LanguageSwitcher: FC<Props> = ({ dict }) => {
  const [language, setLanguage] = useState('en');

  const handleClick = () => {
    document.documentElement.lang = 'en';
    window.location.reload();
  };

  return (
    <button
      className="absolute top-0 right-0 bg-sky-100 p-4 m-6 rounded"
      onClick={handleClick}
    >
      Switch Language
    </button>
  );
};

export default LanguageSwitcher;
