export interface Currency {
  sym: string;
  coin: string;
  name: string;
  /** Units per 1 USD (prototype rates; replace with live FX). */
  rate: number;
  /** Decimal places shown. */
  dp: number;
  /** Rough size of everyday amounts vs. USD; scales chips and limits. */
  sc: number;
}

export const currencies: Record<string, Currency> = {
  USD: { sym: '$', coin: '$', name: 'US Dollar', rate: 1, dp: 2, sc: 1 },
  EUR: { sym: '€', coin: '€', name: 'Euro', rate: 0.92, dp: 2, sc: 1 },
  GBP: { sym: '£', coin: '£', name: 'British Pound', rate: 0.79, dp: 2, sc: 1 },
  JPY: {
    sym: '¥',
    coin: '¥',
    name: 'Japanese Yen',
    rate: 151.2,
    dp: 0,
    sc: 100,
  },
  INR: { sym: '₹', coin: '₹', name: 'Indian Rupee', rate: 84.1, dp: 2, sc: 50 },
  AED: {
    sym: 'AED ',
    coin: 'Dh',
    name: 'UAE Dirham',
    rate: 3.67,
    dp: 2,
    sc: 5,
  },
  NGN: {
    sym: '₦',
    coin: '₦',
    name: 'Nigerian Naira',
    rate: 1610,
    dp: 0,
    sc: 1000,
  },
  BRL: {
    sym: 'R$',
    coin: 'R$',
    name: 'Brazilian Real',
    rate: 5.62,
    dp: 2,
    sc: 5,
  },
  BDT: {
    sym: '৳',
    coin: '৳',
    name: 'Bangladeshi Taka',
    rate: 119.6,
    dp: 2,
    sc: 100,
  },
  CAD: {
    sym: 'C$',
    coin: '$',
    name: 'Canadian Dollar',
    rate: 1.38,
    dp: 2,
    sc: 1,
  },
  SGD: {
    sym: 'S$',
    coin: '$',
    name: 'Singapore Dollar',
    rate: 1.34,
    dp: 2,
    sc: 1,
  },
  MXN: {
    sym: 'MX$',
    coin: '$',
    name: 'Mexican Peso',
    rate: 19.6,
    dp: 2,
    sc: 20,
  },
  PHP: {
    sym: '₱',
    coin: '₱',
    name: 'Philippine Peso',
    rate: 58.3,
    dp: 2,
    sc: 50,
  },
};

export interface Country {
  iso: string;
  name: string;
  dial: string;
  ccy: string;
  /** Sample number used for the "My number" suggestion in the prototype. */
  num: string;
}

export const countries: Country[] = (
  [
    ['US', 'United States', '+1', 'USD', '4155550134'],
    ['GB', 'United Kingdom', '+44', 'GBP', '7700900123'],
    ['DE', 'Germany', '+49', 'EUR', '15123456789'],
    ['FR', 'France', '+33', 'EUR', '612345678'],
    ['ES', 'Spain', '+34', 'EUR', '612345678'],
    ['JP', 'Japan', '+81', 'JPY', '9012345678'],
    ['IN', 'India', '+91', 'INR', '9876543210'],
    ['AE', 'United Arab Emirates', '+971', 'AED', '501234567'],
    ['NG', 'Nigeria', '+234', 'NGN', '8031234567'],
    ['BR', 'Brazil', '+55', 'BRL', '11987654321'],
    ['BD', 'Bangladesh', '+880', 'BDT', '1712345678'],
    ['CA', 'Canada', '+1', 'CAD', '4165550134'],
    ['SG', 'Singapore', '+65', 'SGD', '81234567'],
    ['MX', 'Mexico', '+52', 'MXN', '5512345678'],
    ['PH', 'Philippines', '+63', 'PHP', '9171234567'],
  ] as const
).map(([iso, name, dial, ccy, num]) => ({ iso, name, dial, ccy, num }));

export function findCountry(iso: string): Country {
  return countries.find((c) => c.iso === iso) ?? countries[0];
}
