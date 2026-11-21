// Send Abroad corridors, payout methods and recipient-form fields from the
// design (generated once from the prototype data; edit freely).

/** [iso, name, currency] for each destination. */
export const corridors: [string, string, string][] = [
  ['BD', 'Bangladesh', 'BDT'],
  ['IN', 'India', 'INR'],
  ['PH', 'Philippines', 'PHP'],
  ['MX', 'Mexico', 'MXN'],
  ['NG', 'Nigeria', 'NGN'],
  ['GB', 'United Kingdom', 'GBP'],
  ['EU', 'Eurozone', 'EUR'],
  ['US', 'United States', 'USD'],
  ['JP', 'Japan', 'JPY'],
  ['AE', 'UAE', 'AED'],
  ['BR', 'Brazil', 'BRL'],
  ['CA', 'Canada', 'CAD'],
  ['SG', 'Singapore', 'SGD'],
];

/** Payout methods per currency; anything not listed is bank only. */
export const payoutMethods: Record<string, ('bank' | 'wallet' | 'cash')[]> = {
  BDT: ['bank', 'wallet', 'cash'],
  PHP: ['bank', 'wallet', 'cash'],
  MXN: ['bank', 'cash'],
  INR: ['bank', 'wallet'],
  NGN: ['bank', 'cash'],
  BRL: ['bank', 'wallet'],
};

/** Sample recipient names per currency (used by Fill sample). */
export const sampleNames: Record<string, string> = {
  BDT: 'Rahima Akter',
  INR: 'Ravi Kumar',
  PHP: 'Maria Santos',
  MXN: 'Carlos Méndez',
  NGN: 'Chidi Eze',
  EUR: 'Léa Dubois',
  GBP: 'Oliver Bennett',
  USD: 'Emily Carter',
  JPY: 'Yuki Tanaka',
  AED: 'Fatima Al Mansoori',
  BRL: 'Ana Souza',
  CAD: 'Liam Tremblay',
  SGD: 'Tan Wei Ling',
};

/** [key, label, sample, optional?] bank fields per currency. */
export type FieldSpec = [string, string, string, number?];
export const bankFields: Record<string, FieldSpec[]> = {
  EUR: [
    ['iban', 'IBAN', 'DE89 3704 0044 0532 0130 00'],
    ['bic', 'BIC / SWIFT (optional)', 'COBADEFFXXX', 1],
  ],
  GBP: [
    ['sort', 'Sort code', '04-00-04'],
    ['acct', 'Account number', '31926819'],
  ],
  USD: [
    ['routing', 'ACH routing number', '026009593'],
    ['acct', 'Account number', '483920117'],
    ['type', 'Account type', 'Checking'],
  ],
  CAD: [
    ['transit', 'Institution & transit number', '003-00012'],
    ['acct', 'Account number', '1234567'],
  ],
  INR: [
    ['ifsc', 'IFSC code', 'HDFC0001234'],
    ['acct', 'Account number', '50100234567890'],
  ],
  BDT: [
    ['bank', 'Bank name', 'Dutch-Bangla Bank'],
    ['branch', 'Branch', 'Gulshan, Dhaka'],
    ['acct', 'Account number', '1031100045678'],
  ],
  NGN: [
    ['bank', 'Bank name', 'Access Bank'],
    ['acct', 'Account number (NUBAN)', '0690000031'],
  ],
  JPY: [
    ['bank', 'Bank name', 'MUFG Bank'],
    ['branch', 'Branch code', '001'],
    ['acct', 'Account number', '1234567'],
  ],
  PHP: [
    ['bank', 'Bank name', 'BDO Unibank'],
    ['acct', 'Account number', '001234567890'],
  ],
  MXN: [['clabe', 'CLABE (18 digits)', '002180700611223344']],
  BRL: [
    ['bank', 'Bank', '341 · Itaú'],
    ['agency', 'Branch (agência)', '0001'],
    ['acct', 'Account number', '12345-6'],
  ],
  AED: [['iban', 'IBAN', 'AE07 0331 2345 6789 0123 456']],
  SGD: [
    ['bank', 'Bank name', 'DBS Bank'],
    ['acct', 'Account number', '0721234567'],
  ],
};

export const walletFields: Record<string, FieldSpec[]> = {
  BDT: [
    ['provider', 'Wallet provider', 'Mobile wallet'],
    ['wallet', 'Wallet number', '+880 1712 345 678'],
  ],
  PHP: [
    ['provider', 'Wallet provider', 'GCash'],
    ['wallet', 'Wallet number', '+63 917 123 4567'],
  ],
  INR: [['upi', 'UPI ID', 'ravi.kumar@okhdfc']],
  BRL: [['pix', 'Pix key (email, phone or CPF)', 'ana@exemplo.com.br']],
};

/** Sample pickup phone numbers for cash payouts. */
export const cashPhones: Record<string, string> = {
  BDT: '+880 1712 345 678',
  PHP: '+63 917 123 4567',
  MXN: '+52 55 1234 5678',
  NGN: '+234 803 123 4567',
};

/** [id, label, phosphor icon] transfer purposes. */
export const purposes: [string, string, string][] = [
  ['family', 'Supporting family', 'ph-house-line'],
  ['bills', 'Paying bills or rent', 'ph-receipt'],
  ['education', 'Education or tuition', 'ph-graduation-cap'],
  ['gift', 'Gift', 'ph-gift'],
  ['goods', 'Goods or services', 'ph-shopping-bag'],
  ['savings', 'Savings or investment', 'ph-chart-line-up'],
  ['salary', 'Salary or wages', 'ph-briefcase'],
  ['travel', 'Travel', 'ph-airplane-tilt'],
];
