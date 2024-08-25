import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/utils/constants/locales';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });