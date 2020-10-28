module.exports.accountInfo = {
  code: '0645-1548-4157-1748',
  status: 'ACTIVE',
  points: 785,
  card: {
    code: '0645-1548-4157-1748',
    label: '0645-1548-4157-1748',
    scannedCode: '012345678905',
    status: 'ACTIVE'
  },
  level: {
    code: 'gold',
    label: 'Gold Mitglied'
  },
  customAttributes: {
    lockedPoints: 50
  }
};

module.exports.enrollPoints = {
  label: 'Quittung gescannt',
  image: 'https://cdn.pixabay.com/photo/2012/04/01/19/23/bar-code-24157_960_720.png',
  value: 100
};

module.exports.coupons = [
  {
    code: 'BONUS1',
    label: 'Kabelloser High-Resolution Kopfhörer ',
    description: 'Sicher Dir einen kabellosen High-Resolution Kopfhörer.',
    image: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 1 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 0,
    customAttributes: {},
    enrollPoints: 400
  },
  {
    code: 'BONUS2',
    label: 'Kinogutschein',
    description: 'Mit diesem Gutschein erhalten Sie eine Eintrittskarte an jedem Wochentag für einen Film Ihrer Wahl.',
    image: null,
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 3 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 0,
    customAttributes: {},
    enrollPoints: 150
  },
  {
    code: 'BONUS3',
    label: 'Markenrucksack',
    description: 'Dieser Markenrucksack in frischem, sportlichen Design hat in punkto Freizeit, Schule und Büro wirklich alles drauf.',
    image: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 5 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 0,
    customAttributes: {},
    enrollPoints: 400
  }
];

module.exports.userCoupons = [
  {
    code: 'BLACKFRIDAY',
    label: '20% Black Friday Sale',
    description: 'In unserem Shop bekommtst Du 20% Rabatt auf das komplette Sortiment!',
    image: 'https://cdn.pixabay.com/photo/2016/03/21/20/04/black-1271449_960_720.png',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 2 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 20,
    customAttributes: {},
    enrollPoints: Math.round(Math.random() * 1000)
  },
  {
    code: 'FREEDELIVERY',
    label: 'Versandkostenfreie Lieferung',
    description: 'Kostenfreie Lieferung innerhalb Deutschlands!',
    image: 'https://images.unsplash.com/photo-1587270613227-63f3a3478ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 4 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 0,
    customAttributes: {},
    enrollPoints: Math.round(Math.random() * 1000)
  },
  {
    code: 'SALE10',
    label: '10€ Gutschein',
    description: '10€ Rabatt ab einen Bestellwert von 75€!',
    image: null,
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 6 * 2 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 10,
    customAttributes: {},
    enrollPoints: Math.round(Math.random() * 1000)
  }
];

module.exports.pointsHistory = [
  {
    code: 'BONUS4',
    label: 'Einkauf',
    image: 'https://cdn.pixabay.com/photo/2017/08/04/07/58/money-2579309_960_720.jpg',
    date: (new Date(Date.now() - 1 * 24 * 36e5)).toISOString(),
    type: 'earned',
    value: 50,
    customAttributes: {}
  },
  {
    code: 'BONUS5',
    label: 'Einkauf',
    image: 'https://cdn.pixabay.com/photo/2017/08/04/07/58/money-2579309_960_720.jpg',
    date: (new Date(Date.now() - 3 * 24 * 36e5)).toISOString(),
    type: 'earned',
    value: 75,
    customAttributes: {}
  },
  {
    code: 'BONUS6',
    label: 'Genussgutschein im Wert von 5 Euro',
    image: 'https://image.freepik.com/free-vector/gold-trophy-with-name-plate-winner-competition_68708-545.jpg',
    date: (new Date(Date.now() - 5 * 24 * 36e5)).toISOString(),
    type: 'redeemed',
    value: 125,
    customAttributes: {}
  },
  {
    code: 'BONUS7',
    label: 'Einkauf',
    image: 'https://cdn.pixabay.com/photo/2017/08/04/07/58/money-2579309_960_720.jpg',
    date: (new Date(Date.now() - 7 * 24 * 36e5)).toISOString(),
    type: 'earned',
    value: 60,
    customAttributes: {}
  }
];
