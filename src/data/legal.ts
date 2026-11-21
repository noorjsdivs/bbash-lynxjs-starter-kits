// Legal documents shown under Legal & policies (illustrative concept text
// from the design, not legal advice). {entity}, {country}, {min} and {cash}
// are filled in per country at render time.

export interface LegalSection {
  h: string;
  p?: string[];
  rows?: [string, string][];
}

export interface LegalDoc {
  title: string;
  short?: string;
  kicker: string;
  updated: string;
  version: string;
  icon: string;
  summary: string[];
  sections: LegalSection[];
}

export const legalDocs: Record<string, LegalDoc> = {
  terms: {
    title: 'Terms of Use',
    kicker: 'Agreement',
    updated: '1 Nov 2026',
    version: '5.2',
    icon: 'ph-file-text',
    summary: [
      'These terms are a contract between you and {entity}.',
      'You must be 18 or older and use bBash only for yourself, lawfully.',
      'We may hold a payment we think is fraudulent, and we’ll tell you why when the law allows.',
    ],
    sections: [
      {
        h: 'Who we are',
        p: [
          '{entity} provides the bBash app and account to customers in {country}. Payments and currency services may be delivered by our regulated affiliates and local partner banks, listed under Licences & regulators.',
        ],
      },
      {
        h: 'Opening your account',
        p: [
          'You must be at least 18, live in a country we support and give us accurate information. We’ll ask you to verify your identity before you send money abroad or hold larger balances.',
          'You can have one personal account. Business accounts have separate terms.',
        ],
      },
      {
        h: 'Keeping your account safe',
        p: [
          'Keep your PIN, one-time codes and devices private. bBash will never ask for your PIN or a code by phone, email or chat.',
          'Tell us straight away if you think someone else has used your account. You can freeze it from Settings at any time.',
        ],
      },
      {
        h: 'Sending and receiving money',
        p: [
          'Before you confirm a payment we show the fee, the exchange rate and what the recipient gets. Once sent, a payment can’t always be reversed, so check recipient details carefully.',
        ],
      },
      {
        h: 'When we can refuse or hold a payment',
        p: [
          'We may delay, hold or refuse a payment to comply with law, prevent fraud or financial crime, or protect you. Where we’re allowed to, we’ll explain why and what you can do next.',
        ],
      },
      {
        h: 'Ending this agreement',
        p: [
          'You can close your account at any time once your balance is zero. We can close it with two months’ notice, or straight away in serious cases such as fraud.',
        ],
      },
      {
        h: 'Changes and disputes',
        p: [
          'We’ll give you at least 30 days’ notice of important changes. If something goes wrong, use our Complaints process; you may also be able to contact a local ombudsman.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    kicker: 'Your data',
    updated: '1 Nov 2026',
    version: '4.0',
    icon: 'ph-lock-key',
    summary: [
      'We collect what we need to run your account and meet the law.',
      'We never sell your personal data.',
      'You can see, download or delete your data from Settings.',
    ],
    sections: [
      {
        h: 'What we collect',
        rows: [
          ['Identity', 'Name, date of birth, ID document, selfie'],
          ['Contact', 'Email, mobile number, address'],
          ['Financial', 'Transactions, linked accounts, cards'],
          ['Device', 'Device ID, IP address, app usage'],
        ],
      },
      {
        h: 'Why we use it',
        p: [
          'To open and run your account, process payments, verify your identity, prevent fraud and meet anti-money-laundering rules in {country}. With your permission, we also use it to personalise offers.',
        ],
      },
      {
        h: 'Who we share it with',
        p: [
          'Banks and payment partners that deliver your transfers, identity-check providers, and regulators or law enforcement when the law requires it. Every partner is contractually bound to protect your data.',
        ],
      },
      {
        h: 'Sending data across borders',
        p: [
          'International transfers mean sharing some details with the recipient’s bank in another country. We use recognised safeguards, such as standard contractual clauses, whenever data leaves your region.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'Most financial records are kept for 5 to 7 years after your account closes, as the law requires. Marketing preferences are deleted as soon as you withdraw consent.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Depending on where you live, you can access, correct, download or delete your data, object to some uses, and complain to your data protection authority. Contact privacy@bbash.app.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    kicker: 'Your data',
    updated: '12 Aug 2026',
    version: '2.1',
    icon: 'ph-cookie',
    summary: [
      'Essential cookies keep you logged in and secure.',
      'Analytics and personalisation are off unless you turn them on.',
    ],
    sections: [
      {
        h: 'What cookies and SDKs are',
        p: [
          'Small files and code in our app and website that remember settings and help us understand how bBash is used.',
        ],
      },
      {
        h: 'Types we use',
        rows: [
          ['Essential', 'Always on'],
          ['Analytics', 'Off unless you agree'],
          ['Personalisation', 'Off unless you agree'],
        ],
      },
      {
        h: 'Managing your choices',
        p: [
          'Change your choices any time in Settings › Privacy. Turning off essential cookies would stop the app from working, so they can’t be disabled.',
        ],
      },
    ],
  },
  aup: {
    title: 'Acceptable Use Policy',
    kicker: 'Agreement',
    updated: '1 Nov 2026',
    version: '3.0',
    icon: 'ph-hand-palm',
    summary: [
      'Use bBash for lawful, personal payments only.',
      'Some goods, services and destinations aren’t supported.',
    ],
    sections: [
      {
        h: 'What isn’t allowed',
        p: [
          'Illegal activity, sending money for other people in exchange for a fee, unlicensed gambling, weapons, or trying to get around sanctions or our limits.',
        ],
      },
      {
        h: 'Sanctions',
        p: [
          'We can’t send money to or from people and countries under international sanctions. The list changes; the app tells you if a destination isn’t available.',
        ],
      },
      {
        h: 'If these rules are broken',
        p: [
          'We may block payments, close the account and report activity to the authorities where required.',
        ],
      },
    ],
  },
  remit: {
    title: 'Remittance Terms',
    short: 'Remittance terms',
    kicker: 'Money transfers',
    updated: '1 Nov 2026',
    version: '1.8',
    icon: 'ph-globe-hemisphere-west',
    summary: [
      'We show the exact fee, rate and amount received before you pay.',
      'You can cancel for a full refund within 30 minutes of paying.',
      'If we make a mistake, we fix it at no cost to you.',
    ],
    sections: [
      {
        h: 'What we show before you pay',
        p: [
          'For every international transfer we show the amount you send, all our fees, the exchange rate, what the recipient gets and when it should arrive. Some recipient banks charge their own fees; we flag them where we know about them.',
        ],
      },
      {
        h: 'Guaranteed rates',
        p: [
          'When we show a guaranteed rate, we lock it for the time shown (usually 24 hours) once you’ve paid. If your money reaches us after that, we use the live rate and tell you before converting.',
        ],
      },
      {
        h: 'Cancellation and refunds',
        p: [
          'You can cancel within 30 minutes of paying for a full refund, unless the money has already been picked up or deposited. After that, contact us and we’ll try to recover it.',
        ],
      },
      {
        h: 'Errors and delays',
        p: [
          'If a transfer doesn’t arrive by the date we gave, report it within 180 days. We’ll investigate, tell you the result within 90 days, and refund fees if we were at fault.',
        ],
      },
      {
        h: 'Your right to escalate',
        p: [
          'If you’re unhappy with how we resolve an error, you can contact the regulator for {country} listed under Licences & regulators.',
        ],
      },
    ],
  },
  fees: {
    title: 'Fees & pricing',
    kicker: 'Pricing',
    updated: '1 Nov 2026',
    version: '2026.11',
    icon: 'ph-tag',
    summary: [
      'No monthly fees and no markup on exchange rates.',
      'You always see the fee before you confirm.',
    ],
    sections: [
      {
        h: 'Sending abroad',
        rows: [
          ['Our fee', '0.45% (min {min})'],
          ['Cash pickup delivery', '+{cash}'],
          ['Paying by debit card', '+0.7%'],
          ['Paying by balance or bank', 'Free'],
        ],
      },
      {
        h: 'Currencies',
        rows: [
          ['Holding 13 currencies', 'Free'],
          ['Exchange between wallets', '0.25%'],
          ['Exchange rate markup', 'None · mid-market rate'],
        ],
      },
      {
        h: 'Everyday',
        rows: [
          ['Send to bBash users', 'Free'],
          ['Add money by bank', 'Free'],
          ['Withdraw to bank (standard)', 'Free'],
          ['Instant withdrawal to card', '1%'],
          ['Cardless ATM withdrawal', '1.5%'],
          ['Account maintenance', 'Free'],
        ],
      },
      {
        h: 'Compared with banks',
        p: [
          'Banks often add 2–4% to the exchange rate plus a fixed fee. We use the mid-market rate you can find on any search engine and show our fee separately.',
        ],
      },
    ],
  },
  rates: {
    title: 'How exchange rates work',
    short: 'Exchange rates',
    kicker: 'Pricing',
    updated: '20 Sep 2026',
    version: '1.2',
    icon: 'ph-arrows-left-right',
    summary: [
      'We use the mid-market rate, with no markup.',
      'Our fee is shown separately so you can compare.',
    ],
    sections: [
      {
        h: 'The mid-market rate',
        p: [
          'The midpoint between buy and sell prices on global currency markets, the same rate you see on financial news sites.',
        ],
      },
      {
        h: 'Guaranteed and live rates',
        p: [
          'Most currencies get a guaranteed rate for 24 hours once you pay. A few use the live rate at the moment we convert; we tell you which before you confirm.',
        ],
      },
      {
        h: 'Weekends and holidays',
        p: [
          'Markets close at weekends, so some currencies carry a slightly wider rate. We always show the exact rate before you confirm.',
        ],
      },
    ],
  },
  licenses: {
    title: 'Licences & regulators',
    short: 'Licences',
    kicker: 'Regulation',
    updated: '1 Nov 2026',
    version: '2026.11',
    icon: 'ph-bank',
    summary: [
      'bBash is a design concept. Licence numbers below are placeholders.',
      'In every country we pay out through locally licensed partners.',
    ],
    sections: [
      {
        h: 'Your provider',
        p: ['In {country}, your account is provided by {entity}.'],
      },
      {
        h: 'By region',
        rows: [
          [
            'United States',
            'Money transmitter licences · NMLS 000000 (placeholder)',
          ],
          [
            'United Kingdom',
            'Electronic money institution · FRN 000000 (placeholder)',
          ],
          [
            'European Economic Area',
            'Electronic money institution, passported (placeholder)',
          ],
          ['Canada', 'Money services business (placeholder)'],
          ['Singapore', 'Major payment institution (placeholder)'],
          ['Other countries', 'Payouts via licensed local partners'],
        ],
      },
      {
        h: 'Payout partners',
        p: [
          'Transfers to Bangladesh, India, Nigeria, the Philippines, Mexico and Brazil are paid out by licensed local banks and mobile wallet providers.',
        ],
      },
    ],
  },
  safeguard: {
    title: 'How we protect your money',
    short: 'Safeguarding',
    kicker: 'Protection',
    updated: '1 Nov 2026',
    version: '1.4',
    icon: 'ph-shield-check',
    summary: [
      'Your balance is kept separate from bBash’s own money.',
      'If bBash failed, safeguarded funds would be returned to customers.',
    ],
    sections: [
      {
        h: 'Safeguarding',
        p: [
          'We hold customer money in separate accounts at major banks or in low-risk assets, as regulators require. We can’t use it to run our business.',
        ],
      },
      {
        h: 'Deposit insurance',
        p: [
          'E-money balances are usually not covered by deposit insurance schemes. Safeguarding is a different protection, explained above.',
        ],
      },
      {
        h: 'Security',
        p: [
          'Every payment needs your PIN or Face ID, and we monitor transactions around the clock for fraud.',
        ],
      },
    ],
  },
  complaints: {
    title: 'Complaints',
    kicker: 'Support',
    updated: '1 Nov 2026',
    version: '2.0',
    icon: 'ph-chat-circle-text',
    summary: [
      'Tell us in the app and we’ll reply within 2 working days.',
      'Final answer on payment complaints within 15 working days.',
    ],
    sections: [
      {
        h: 'How to complain',
        p: [
          'Open Support in the app and choose Make a complaint, or email complaints@bbash.app.',
        ],
      },
      {
        h: 'What happens next',
        rows: [
          ['Acknowledgement', 'Within 2 working days'],
          ['Final response', 'Within 15 working days'],
          ['Exceptional cases', 'Up to 35 working days'],
        ],
      },
      {
        h: 'If you’re not satisfied',
        p: [
          'You can refer your complaint to the ombudsman or regulator in {country}, free of charge.',
        ],
      },
    ],
  },
};

/** Sample home addresses per country (prototype only). */
export const sampleAddress: Record<string, [string, string, string]> = {
  US: ['221 Market Street', 'San Francisco', '94105'],
  GB: ['12 King’s Road', 'London', 'SW3 4RP'],
  DE: ['Torstraße 45', 'Berlin', '10119'],
  FR: ['18 Rue Oberkampf', 'Paris', '75011'],
  ES: ['Calle Mayor 22', 'Madrid', '28013'],
  JP: ['2-1 Dogenzaka', 'Tokyo', '150-0043'],
  IN: ['14 MG Road', 'Bengaluru', '560001'],
  AE: ['Al Wasl Road 210', 'Dubai', '00000'],
  NG: ['7 Adeola Odeku St', 'Lagos', '101241'],
  BR: ['Rua Augusta 900', 'São Paulo', '01304-001'],
  BD: ['House 12, Road 7, Gulshan', 'Dhaka', '1212'],
  CA: ['88 Queen St W', 'Toronto', 'M5H 2N2'],
  SG: ['10 Anson Road', 'Singapore', '079903'],
  MX: ['Av. Reforma 222', 'Mexico City', '06600'],
  PH: ['30 Ayala Avenue', 'Makati', '1226'],
};
