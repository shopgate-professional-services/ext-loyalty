module.exports.accountInfo = {
  code: '0645-1548-4157-1748',
  status: 'ACTIVE',
  points: 247,
  card: {
    code: '0645-1548-4157-1748',
    label: '0645-1548-4157-1748',
    scannedCode: '012345678905',
    status: 'ACTIVE'
  },
  level: {
    code: 'gold',
    label: 'Gold member'
  },
  customAttributes: {
    lockedPoints: 50
  }
}

module.exports.coupons = [
  {
    code: 'WINTER50',
    label: 'Beim Kauf einer Marken-Winterjacke.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: null,
    scannedCode: 'https://picsum.photos/150',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 5 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 50,
    customAttributes: {}
  },
  {
    code: 'Aktion2020',
    label: 'Beim Kauf einer Marken-Winterjacke.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'https://picsum.photos/330/120',
    scannedCode: 'https://picsum.photos/150',
    validFrom: (new Date()).toISOString(),
    validTo: (new Date(Date.now() + 5 * 24 * 36e5)).toISOString(),
    type: 'absolute',
    value: 100.00,
    customAttributes: {}
  }
]

module.exports.pointsHistory = [
  {
    code: 'WINTER50',
    label: 'Beim Kauf einer Marken-Winterjacke.',
    image: 'https://picsum.photos/80',
    date: (new Date(Date.now() - 5 * 24 * 36e5)).toISOString(),
    type: 'earned',
    value: 100,
    customAttributes: {}
  },
  {
    code: 'WINTER50',
    label: 'Beim Kauf einer Marken-Winterjacke.',
    image: 'https://picsum.photos/80',
    date: (new Date(Date.now() - 10 * 24 * 36e5)).toISOString(),
    type: 'redeemed',
    value: 50,
    customAttributes: {}
  }
]
