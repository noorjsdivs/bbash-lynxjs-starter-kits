// Home screen content from the design. Balances, shortcuts and offers are
// demo data until the wallet and offers APIs exist.

import type { IllustrationName } from '../icons/illustrations.js';
import type { IconName } from '../icons/index.js';

export const profile = { name: 'Noor Mohammad' };

export interface Service {
  id: IllustrationName;
  label: string;
  icon: IconName;
  color: string;
  bg: string;
}

export const services: Service[] = [
  {
    id: 'send',
    label: 'Send Money',
    icon: 'paper-plane-tilt-duotone',
    color: '#E2136E',
    bg: '#FDE7F0',
  },
  {
    id: 'remit',
    label: 'Send Abroad',
    icon: 'globe-hemisphere-west-duotone',
    color: '#0E8A9A',
    bg: '#E0F4F6',
  },
  {
    id: 'exchange',
    label: 'Exchange',
    icon: 'arrows-left-right-duotone',
    color: '#2F6FD6',
    bg: '#E5EEFB',
  },
  {
    id: 'payment',
    label: 'Pay',
    icon: 'shopping-bag-duotone',
    color: '#E8711A',
    bg: '#FDEFE3',
  },
  {
    id: 'addmoney',
    label: 'Add Money',
    icon: 'wallet-duotone',
    color: '#7A4CC2',
    bg: '#EFE8FA',
  },
  {
    id: 'cashout',
    label: 'Withdraw',
    icon: 'hand-coins-duotone',
    color: '#0E8A9A',
    bg: '#E0F4F6',
  },
  {
    id: 'recharge',
    label: 'Mobile Top-up',
    icon: 'device-mobile-duotone',
    color: '#0E9F6E',
    bg: '#E3F6EE',
  },
  {
    id: 'paybill',
    label: 'Pay Bills',
    icon: 'lightbulb-duotone',
    color: '#C98A00',
    bg: '#FBF2DC',
  },
  {
    id: 'request',
    label: 'Request Money',
    icon: 'hand-arrow-down-duotone',
    color: '#0E9F6E',
    bg: '#E3F6EE',
  },
  {
    id: 'split',
    label: 'Split Bill',
    icon: 'users-three-duotone',
    color: '#2F6FD6',
    bg: '#E5EEFB',
  },
  {
    id: 'savings',
    label: 'Savings',
    icon: 'piggy-bank-duotone',
    color: '#D0447A',
    bg: '#FBE6EE',
  },
  {
    id: 'paylater',
    label: 'Pay Later',
    icon: 'clock-countdown-duotone',
    color: '#D92D4B',
    bg: '#FDE8EC',
  },
];

export interface Banner {
  /** Service the banner opens. */
  service: string;
  title: string;
  sub: string;
  cta: string;
  bg: string;
  blob: string;
  fg: string;
  icon: IconName;
}

export const banners: Banner[] = [
  {
    service: 'remit',
    title: 'Send abroad at the real exchange rate',
    sub: 'Low, upfront fee to 60+ countries',
    cta: 'Send abroad',
    bg: '#E0F4F2',
    blob: '#C6EBE6',
    fg: '#0E7A6C',
    icon: 'globe-hemisphere-west-duotone',
  },
  {
    service: 'exchange',
    title: 'Hold 13 currencies in one wallet',
    sub: 'Exchange in seconds, spend like a local',
    cta: 'Exchange now',
    bg: '#FDE7F0',
    blob: '#FAD0E2',
    fg: '#E2136E',
    icon: 'arrows-left-right-duotone',
  },
  {
    service: 'split',
    title: 'Split the bill, not the friendship',
    sub: 'Request shares from friends at once',
    cta: 'Try Split Bill',
    bg: '#E8EEFB',
    blob: '#D4E0F7',
    fg: '#2F6FD6',
    icon: 'users-three-duotone',
  },
];

export const perks: {
  label: string;
  art: IllustrationName;
  bg: string;
  toast: string;
}[] = [
  {
    label: 'My Offers',
    art: 'offers',
    bg: '#FFF6EA',
    toast: '3 offers picked for you',
  },
  {
    label: 'Coupons',
    art: 'coupons',
    bg: '#EAF6F5',
    toast: '2 coupons ready to use',
  },
  {
    label: 'Rewards',
    art: 'rewards',
    bg: '#FBF8E8',
    toast: 'Redeem points for recharge or vouchers',
  },
];

export interface Offer {
  service: string;
  tag: string;
  tagBg: string;
  title: string;
  sub: string;
  cta: string;
  photo: string;
}

// Photos from Unsplash (credited on screen, as in the design), through
// images.unsplash.com, the address Unsplash asks apps to hotlink. (The
// unsplash.com/photos/<id>/download links redirect there, and Lynx's image
// loader gets a 401 from them.)
const unsplash = (photo: string) =>
  `https://images.unsplash.com/${photo}?w=900&q=80&fm=jpg&fit=crop`;

export const offers: Offer[] = [
  {
    service: 'payment',
    tag: '10% CASHBACK',
    tagBg: '#E2136E',
    title: 'Pay with bBash at salons & spas',
    sub: 'Up to 10% back · Till 30 Nov',
    cta: 'Pay now',
    photo: unsplash('photo-1743529628081-6777a326a4e5'),
  },
  {
    service: 'recharge',
    tag: 'NEW',
    tagBg: '#2F6FD6',
    title: 'Recharge abroad in one tap',
    sub: 'eSIM & intl. top-up',
    cta: 'Try it',
    photo: unsplash('photo-1760531941882-433a8a7c5fd4'),
  },
  {
    service: 'scan',
    tag: 'GLOBAL QR',
    tagBg: '#0E8A7A',
    title: 'Scan to pay in 40+ countries',
    sub: 'Paris café to Tokyo market',
    cta: 'Scan',
    photo: unsplash('photo-1714418701960-06ef1bcfdfbc'),
  },
];

export const sponsoredPhoto = unsplash('photo-1742836531239-1fe146bf7e3f');

// Hero illustration behind the profile row (390×250 in the design).
export const heroSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 250" preserveAspectRatio="xMidYMax slice"><circle cx="214" cy="160" r="64" fill="#F380B4"/><path d="M150 46h38a8 8 0 0 0-7-9.5 11 11 0 0 0-20.5-3.5 8 8 0 0 0-10.5 13z" fill="#EE5B9C"/><path d="M262 78h26a6 6 0 0 0-5-7 8 8 0 0 0-15-2.5 6 6 0 0 0-6 9.5z" fill="#EE5B9C"/><path d="M214 37l32 5.5 7-6 3.5.8-3.2 6.8-36-2.8c-2-.2-5.3-3.7-3.3-4.3z" fill="#F6A9CB"/><path d="M0 172C40 152 75 144 112 154s62-6 100-4c48 3 78-12 118-6 28 4 46 10 60 8V250H0z" fill="#EB4C92"/><path d="M226 250c18-30 70-52 164-62V250z" fill="#D91F71"/><path d="M196 250c-8-22 34-36 104-48 36-6 66-8 90-8v9c-26 1-58 4-88 9-56 10-86 22-80 38z" fill="#F7A3C7"/><path d="M0 194c34-14 70-16 104-8 34 8 54 20 74 36 10 8 16 18 18 28H0z" fill="#CF1A66"/><path d="M54 200l14-17h30l13 17z" fill="#A50D4E"/><rect x="58" y="200" width="48" height="22" fill="#F8B4D2"/><rect x="66" y="207" width="9" height="15" fill="#D62B78"/><rect x="86" y="206" width="12" height="8" fill="#D62B78"/><path d="M300 186l9-11h22l9 11z" fill="#A50D4E"/><rect x="303" y="186" width="34" height="14" fill="#F8B4D2"/><rect x="309" y="190" width="6" height="10" fill="#D62B78"/><path d="M356 183v-16" stroke="#A50D4E" stroke-width="2.5" stroke-linecap="round"/><circle cx="356" cy="162" r="10" fill="#C1145E"/><circle cx="347" cy="167" r="7" fill="#C1145E"/></svg>';
