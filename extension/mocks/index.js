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

module.exports.coupons = [...Array(10).keys()].map(ind => ({
  code: `WINTER${ind * 10}`,
  label: 'Lorem ipsum dolor sit amet',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  image: ind % 2 !== 0 ? `https://picsum.photos/330/${120 + ind}` : null,
  validFrom: (new Date()).toISOString(),
  validTo: (new Date(Date.now() + ind * 2 * 24 * 36e5)).toISOString(),
  type: 'absolute',
  value: 10 * ++ind,
  customAttributes: {}
}))

module.exports.pointsHistory = [...Array(10).keys()].map(ind => ({
  code: `WINTER${ind * 10}`,
  label: 'Lorem ipsum dolor sit amet',
  image: `https://picsum.photos/${80 + ind}`,
  date: (new Date(Date.now() - ind * 24 * 36e5)).toISOString(),
  type: ind % 2 !== 0 ? 'earned' : 'redeemed',
  value: Math.round(Math.random() * 1000),
  customAttributes: {}
}))
