// Everything the money flows pick from, plus seeded history. All demo data
// from the design until the real APIs exist.

import type { IconName } from '../icons/index.js';

/** A recipient, merchant, biller, account, plan or wallet in a pick list. */
export interface Party {
  id: string;
  name: string;
  sub: string;
  /** Avatar background for initial-letter avatars. */
  av?: string;
  initial?: string;
  /** Duotone icon instead of an initial. */
  icon?: IconName;
  iconColor?: string;
  iconBg?: string;
  /** Saved as a Favorite. */
  priyo?: boolean;
  /** Withdrawal fee rate (0.01 = 1%). */
  fee?: number;
  saved?: boolean;
  /** International recipient currency / payout method. */
  ccy?: string;
  method?: 'bank' | 'wallet' | 'cash';
  /** Wallet currency code (exchange). */
  code?: string;
  /** Savings plan monthly base amount in USD. */
  base?: number;
}

const pal = [
  '#8FC79A',
  '#C08AD6',
  '#DE93B8',
  '#CDB27E',
  '#86AFD3',
  '#97B4EE',
  '#86CFC3',
  '#EDAE83',
  '#B5A2E0',
];

export const contacts: Party[] = (
  [
    ['c1', 'Mom', '@mom.m', true],
    ['c2', 'Sofia Martínez', '@sofiam', true],
    ['c3', 'Daniel Kim', '@dankim', true],
    ['c4', 'Amara Okafor', '@amara.o'],
    ['c5', 'Lucas Weber', '@lucasw'],
    ['c6', 'Priya Shah', '@priyashah'],
    ['c7', 'Omar Haddad', '@omarh'],
    ['c8', 'Chloé Martin', '@chloem'],
    ['c9', 'Kenji Watanabe', '@kenji.w'],
  ] as [string, string, string, boolean?][]
).map(([id, name, h, p], i) => ({
  id,
  name,
  sub: `${h} · on bBash`,
  priyo: !!p,
  av: pal[i % pal.length],
}));

export const me: Party = {
  id: 'me',
  name: 'Noor Mohammad',
  sub: 'My number',
  av: '#E2136E',
};

const T = (icon: IconName, iconColor: string, iconBg: string) => ({
  icon,
  iconColor,
  iconBg,
});

export const intl: Party[] = (
  [
    ['i1', 'Ammu', 'BDT', 'bank', 'Bank deposit · ••5678 · Dutch-Bangla Bank'],
    ['i7', 'Rahim Uddin', 'BDT', 'wallet', 'Mobile wallet · +880 1819 ••• 442'],
    ['i2', 'Ravi Kumar', 'INR', 'wallet', 'UPI · ravi.k@okhdfc'],
    ['i3', 'Maria Santos', 'PHP', 'wallet', 'Mobile wallet · GCash ••4567'],
    ['i4', 'Carlos Méndez', 'MXN', 'bank', 'Bank deposit · CLABE ••3344'],
    ['i5', 'Chidi Eze', 'NGN', 'bank', 'Bank deposit · ••0031 · Access Bank'],
    ['i6', 'Léa Dubois', 'EUR', 'bank', 'Bank deposit · IBAN ••3000'],
    ['i8', 'Oliver Bennett', 'GBP', 'bank', 'Bank deposit · ••6819'],
    ['i9', 'Emily Carter', 'USD', 'bank', 'Bank deposit · ••0117'],
  ] as [string, string, string, 'bank' | 'wallet', string][]
).map(([id, name, ccy, method, sub], i) => ({
  id,
  name,
  ccy,
  method,
  sub,
  av: pal[(i + 3) % pal.length],
}));

export const agents: Party[] = [
  {
    id: 'a1',
    name: 'Linked bank ••4821',
    sub: 'Standard · 1–2 business days · Free',
    fee: 0,
    ...T('bank-duotone', '#7A4CC2', '#EFE8FA'),
  },
  {
    id: 'a2',
    name: 'Visa Debit ••0937',
    sub: 'Instant to card · 1% fee',
    fee: 0.01,
    ...T('lightning-duotone', '#0E8A9A', '#E0F4F6'),
  },
  {
    id: 'a3',
    name: 'Cardless ATM code',
    sub: 'Any partner ATM · 1.5% fee',
    fee: 0.015,
    ...T('hand-coins-duotone', '#E8711A', '#FDEFE3'),
  },
];

export const merchants: Party[] = [
  {
    id: 'm1',
    name: 'Bluebird Café',
    sub: 'Merchant · Downtown',
    ...T('coffee-duotone', '#E8711A', '#FDEFE3'),
  },
  {
    id: 'm2',
    name: 'Green Grocer',
    sub: 'Merchant · Market St',
    ...T('basket-duotone', '#0E9F6E', '#E3F6EE'),
  },
  {
    id: 'm3',
    name: 'City Pharmacy',
    sub: 'Merchant · 24 hours',
    ...T('first-aid-kit-duotone', '#D92D4B', '#FDE8EC'),
  },
  {
    id: 'm4',
    name: 'Paper & Co. Books',
    sub: 'Merchant · Old Town',
    ...T('books-duotone', '#7A4CC2', '#EFE8FA'),
  },
  {
    id: 'm5',
    name: 'Metro Transit Card',
    sub: 'Top-up · Card 2290',
    ...T('train-duotone', '#2F6FD6', '#E5EEFB'),
  },
];

export const sources: Party[] = [
  {
    id: 's1',
    name: 'Linked bank ••4821',
    sub: 'Checking account',
    ...T('bank-duotone', '#7A4CC2', '#EFE8FA'),
  },
  {
    id: 's2',
    name: 'Visa Debit ••0937',
    sub: 'Debit card · instant',
    ...T('credit-card-duotone', '#2F6FD6', '#E5EEFB'),
  },
  {
    id: 's3',
    name: 'Mastercard ••5512',
    sub: 'Credit card',
    ...T('credit-card-duotone', '#E8711A', '#FDEFE3'),
  },
];

export const billers: Party[] = [
  {
    id: 'b1',
    name: 'Electricity',
    sub: 'Account 1401-3682',
    saved: true,
    ...T('lightning-duotone', '#C98A00', '#FBF2DC'),
  },
  {
    id: 'b2',
    name: 'Gas',
    sub: 'Metered connection',
    ...T('flame-duotone', '#E8711A', '#FDEFE3'),
  },
  {
    id: 'b3',
    name: 'Water',
    sub: 'Monthly bill',
    ...T('drop-duotone', '#2F6FD6', '#E5EEFB'),
  },
  {
    id: 'b4',
    name: 'Internet',
    sub: 'Broadband',
    ...T('wifi-high-duotone', '#7A4CC2', '#EFE8FA'),
  },
  {
    id: 'b5',
    name: 'Phone plan',
    sub: 'Postpaid',
    ...T('device-mobile-duotone', '#0E8A9A', '#E0F4F6'),
  },
  {
    id: 'b6',
    name: 'Credit card bill',
    sub: 'Any bank card',
    ...T('credit-card-duotone', '#E2136E', '#FDE7F0'),
  },
];

export const schemes: Party[] = [
  {
    id: 'p1',
    name: '',
    base: 50,
    sub: '1 year · 4.5% APY',
    ...T('piggy-bank-duotone', '#D0447A', '#FBE6EE'),
  },
  {
    id: 'p2',
    name: '',
    base: 100,
    sub: '2 years · 4.8% APY',
    ...T('piggy-bank-duotone', '#D0447A', '#FBE6EE'),
  },
  {
    id: 'p3',
    name: '',
    base: 200,
    sub: '3 years · 5.1% APY',
    ...T('piggy-bank-duotone', '#D0447A', '#FBE6EE'),
  },
];

export const operators = ['Vodafone', 'Orange', 'T-Mobile', 'Airtel', 'MTN'];

export type FlowType =
  | 'send'
  | 'remit'
  | 'exchange'
  | 'cashout'
  | 'recharge'
  | 'payment'
  | 'addmoney'
  | 'paybill'
  | 'savings'
  | 'request';

export interface FlowConfig {
  title: string;
  kind:
    | 'intl'
    | 'contacts'
    | 'wallets'
    | 'agents'
    | 'numbers'
    | 'merchants'
    | 'sources'
    | 'billers'
    | 'schemes';
  /** Money leaves the balance. */
  debit: boolean;
  /** Request Money needs no PIN. */
  noPin?: boolean;
  /** Min / max in USD; scaled for other primary currencies. */
  min: number;
  max?: number;
  to: string;
  chips: number[];
  /** Has a reference note. */
  ref?: boolean;
  /** Shows an exchange rate. */
  fx?: boolean;
  done: string;
  ph: string;
}

export const flows: Record<FlowType, FlowConfig> = {
  send: {
    title: 'Send Money',
    kind: 'contacts',
    debit: true,
    min: 1,
    to: 'To',
    chips: [10, 25, 50, 100],
    ref: true,
    done: 'Money sent',
    ph: 'Name, @handle or phone',
  },
  remit: {
    title: 'Send Abroad',
    kind: 'intl',
    debit: true,
    min: 5,
    to: 'To',
    chips: [50, 100, 250, 500],
    ref: true,
    fx: true,
    done: 'Money is on its way',
    ph: 'Search recipients',
  },
  exchange: {
    title: 'Exchange',
    kind: 'wallets',
    debit: true,
    min: 1,
    to: 'Into',
    chips: [50, 100, 250, 500],
    fx: true,
    done: 'Exchange complete',
    ph: 'Search currencies',
  },
  cashout: {
    title: 'Withdraw',
    kind: 'agents',
    debit: true,
    min: 10,
    to: 'To',
    chips: [50, 100, 250, 500],
    done: 'Withdrawal on its way',
    ph: 'Search accounts',
  },
  recharge: {
    title: 'Mobile Top-up',
    kind: 'numbers',
    debit: true,
    min: 5,
    max: 100,
    to: 'Number',
    chips: [5, 10, 20, 30, 50],
    done: 'Top-up successful',
    ph: 'Enter mobile number',
  },
  payment: {
    title: 'Pay',
    kind: 'merchants',
    debit: true,
    min: 1,
    to: 'Merchant',
    chips: [10, 25, 50, 100],
    ref: true,
    done: 'Payment successful',
    ph: 'Search merchants',
  },
  addmoney: {
    title: 'Add Money',
    kind: 'sources',
    debit: false,
    min: 5,
    to: 'From',
    chips: [50, 100, 500, 1000],
    done: 'Money added',
    ph: 'Search accounts',
  },
  paybill: {
    title: 'Pay Bills',
    kind: 'billers',
    debit: true,
    min: 1,
    to: 'Biller',
    chips: [50, 100, 150, 200],
    done: 'Bill paid',
    ph: 'Search billers',
  },
  savings: {
    title: 'Savings',
    kind: 'schemes',
    debit: true,
    min: 50,
    to: 'Plan',
    chips: [50, 100, 200],
    done: 'Savings deposit successful',
    ph: 'Search plans',
  },
  request: {
    title: 'Request Money',
    kind: 'contacts',
    debit: false,
    noPin: true,
    min: 1,
    to: 'Request from',
    chips: [10, 25, 50, 100],
    ref: true,
    done: 'Request sent',
    ph: 'Name, @handle or phone',
  },
};

export type TxType = FlowType | 'received';

export const txMeta: Record<
  TxType,
  { label: string; icon: IconName; color: string; bg: string }
> = {
  send: {
    label: 'Send Money',
    icon: 'paper-plane-tilt-duotone',
    color: '#E2136E',
    bg: '#FDE7F0',
  },
  remit: {
    label: 'Send Abroad',
    icon: 'globe-hemisphere-west-duotone',
    color: '#0E8A9A',
    bg: '#E0F4F6',
  },
  exchange: {
    label: 'Exchange',
    icon: 'arrows-left-right-duotone',
    color: '#2F6FD6',
    bg: '#E5EEFB',
  },
  received: {
    label: 'Received Money',
    icon: 'arrow-down-left-duotone',
    color: '#0E9F6E',
    bg: '#E3F6EE',
  },
  cashout: {
    label: 'Withdraw',
    icon: 'hand-coins-duotone',
    color: '#0E8A9A',
    bg: '#E0F4F6',
  },
  recharge: {
    label: 'Mobile Top-up',
    icon: 'device-mobile-duotone',
    color: '#0E9F6E',
    bg: '#E3F6EE',
  },
  payment: {
    label: 'Payment',
    icon: 'shopping-bag-duotone',
    color: '#E8711A',
    bg: '#FDEFE3',
  },
  addmoney: {
    label: 'Add Money',
    icon: 'wallet-duotone',
    color: '#7A4CC2',
    bg: '#EFE8FA',
  },
  paybill: {
    label: 'Pay Bill',
    icon: 'lightbulb-duotone',
    color: '#C98A00',
    bg: '#FBF2DC',
  },
  savings: {
    label: 'Savings Deposit',
    icon: 'piggy-bank-duotone',
    color: '#D0447A',
    bg: '#FBE6EE',
  },
  request: {
    label: 'Request Money',
    icon: 'hand-arrow-down-duotone',
    color: '#0E9F6E',
    bg: '#E3F6EE',
  },
};

export interface Tx {
  id: number;
  type: TxType;
  party: string;
  sub: string;
  /** Negative when money left the balance. */
  amount: number;
  charge: number;
  time: string;
  date: string;
  trx: string;
  ref?: string;
  ccy: string;
  code?: string;
}

export interface Notif {
  id: number;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  icon: IconName;
}

export function fmtDate(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${String(d.getFullYear()).slice(2)}`;
}

export function nowStamp(): { time: string; date: string } {
  const d = new Date();
  let h = d.getHours();
  const ap = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  return {
    time: `${String(h).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}${ap}`,
    date: fmtDate(d),
  };
}

export function newTrxId(): string {
  return `TX${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
}

export function seedTxs(): Tx[] {
  const dd = (n: number) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return fmtDate(d);
  };
  return [
    {
      id: 1,
      type: 'cashout',
      party: 'Linked bank ••4821',
      sub: 'Standard · 1–2 business days',
      amount: -250,
      charge: 0,
      time: '11:04am',
      date: dd(0),
      trx: 'TX948ZWS0M',
      ccy: 'USD',
    },
    {
      id: 2,
      type: 'addmoney',
      party: 'Visa Debit ••0937',
      sub: 'Debit card · instant',
      amount: 300,
      charge: 0,
      time: '11:03am',
      date: dd(0),
      trx: 'TX938ZUM0N',
      ccy: 'USD',
    },
    {
      id: 3,
      type: 'received',
      party: 'Sofia Martínez',
      sub: '@sofiam · on bBash',
      amount: 45,
      charge: 0,
      time: '10:53pm',
      date: dd(1),
      trx: 'TX858JWC2H',
      ccy: 'USD',
    },
    {
      id: 4,
      type: 'remit',
      party: 'Ammu',
      sub: 'Bank account · Dhaka, Bangladesh · BDT',
      amount: -200,
      charge: 1,
      time: '07:30pm',
      date: dd(1),
      trx: 'TX833RMT4B',
      ccy: 'USD',
    },
    {
      id: 5,
      type: 'recharge',
      party: 'Noor Mohammad',
      sub: 'My number',
      amount: -20,
      charge: 0,
      time: '12:05pm',
      date: dd(1),
      trx: 'TX817GZE5T',
      ccy: 'USD',
    },
    {
      id: 6,
      type: 'payment',
      party: 'Bluebird Café',
      sub: 'Merchant · Downtown',
      amount: -18.6,
      charge: 0,
      time: '08:42pm',
      date: dd(2),
      trx: 'TX702KPL8Q',
      ccy: 'USD',
    },
    {
      id: 7,
      type: 'exchange',
      party: 'Euro wallet',
      sub: 'EUR · received €92.00',
      amount: -100,
      charge: 0.25,
      time: '09:12am',
      date: dd(3),
      trx: 'TX655BNA3R',
      ccy: 'USD',
      code: 'EUR',
    },
    {
      id: 8,
      type: 'paybill',
      party: 'Electricity',
      sub: 'Account 1401-3682',
      amount: -92.1,
      charge: 0,
      time: '09:20am',
      date: dd(4),
      trx: 'TX563YRCKA',
      ccy: 'USD',
    },
    {
      id: 9,
      type: 'received',
      party: 'Daniel Kim',
      sub: '@dankim · on bBash',
      amount: 120,
      charge: 0,
      time: '10:50pm',
      date: dd(4),
      trx: 'TX541MXD7E',
      ccy: 'USD',
    },
  ];
}

export const seedNotifs: Notif[] = [
  {
    id: 1,
    title: 'Electricity bill due',
    body: 'Account 1401-3682 · $86.40 due by 20 Nov',
    time: '2h ago',
    unread: true,
    icon: 'lightbulb-duotone',
  },
  {
    id: 2,
    title: 'Ammu received your money',
    body: '৳23,920.00 landed in her bank account in Dhaka',
    time: 'Yesterday',
    unread: false,
    icon: 'globe-hemisphere-west-duotone',
  },
  {
    id: 3,
    title: 'New: hold 13 currencies',
    body: 'Open a wallet in any currency and exchange at the real rate',
    time: '3 days ago',
    unread: false,
    icon: 'arrows-left-right-duotone',
  },
  {
    id: 4,
    title: 'Security tip',
    body: 'bBash will never ask for your PIN or code over a call or chat.',
    time: '1 week ago',
    unread: false,
    icon: 'shield-check-duotone',
  },
];
