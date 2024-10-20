import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES } from '@/utils/constants/locales';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES });
