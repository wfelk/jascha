'use client';

import React, { FC } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/src/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import enFlag from '/public/images/flags/en.png';
import deFlag from '/public/images/flags/de.png';
import ruFlag from '/public/images/flags/ru.png';
import ukFlag from '/public/images/flags/uk.png';
import beFlag from '/public/images/flags/be.png';

const imageClassName =
  'w-full h-full rounded-lg opacity-90 lg:opacity-50 hover:opacity-100 data-[active]:opacity-100 cursor-pointer transition-all shadow-lg';

const HeroLanguageSwitcher: FC = () => {
  const { lang } = useParams();

  const languages = [
    {
      locale: 'en',
      image: (
        <Image
          src={enFlag}
          alt="flag of the united kingdom"
          className={imageClassName}
        />
      ),
      name: 'English',
    },
    {
      locale: 'de',
      image: (
        <Image src={deFlag} alt="flag of germany" className={imageClassName} />
      ),
      name: 'Deutsch',
    },
    {
      locale: 'ru',
      image: (
        <Image src={ruFlag} alt="flag of russia" className={imageClassName} />
      ),
      name: 'Русский',
    },
    {
      locale: 'uk',
      image: (
        <Image
          src={ukFlag}
          alt="flag of the ukraine"
          className={imageClassName}
        />
      ),
      name: 'Українська',
    },
    {
      locale: 'be',
      image: (
        <Image src={beFlag} alt="flag of belarus" className={imageClassName} />
      ),
      name: 'Беларуская',
    },
  ];

  return (
    <Menu>
      <MenuButton className="border-4 border-sky-600/85 transition-all w-16 h-16 rounded-full overflow-hidden hover:opacity-100 flex items-center justify-center">
        {languages.find(({ locale }) => locale === lang)!.image}
      </MenuButton>
      <MenuItems
        anchor={{ to: 'bottom', gap: '8px' }}
        transition
        className="flex flex-col p-4 gap-4 bg-sky-800/90 rounded shadow-2xl mx-4 max-w-[100px] w-[100px] border-2 border-sky-700/90"
      >
        {languages.map(({ locale, image }) => (
          <MenuItem key={locale}>
            <Link href="/" locale={locale}>
              {image}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default HeroLanguageSwitcher;
