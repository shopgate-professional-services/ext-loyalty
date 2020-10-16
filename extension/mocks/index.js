module.exports.accountInfo = {
  code: '0645-1548-4157-1748',
  status: 'ACTIVE',
  points: 648,
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

module.exports.enrollPoints = {
  label: 'Quittung gescannt',
  image: 'https://picsum.photos/80',
  value: 100
}

module.exports.coupons = [0, 1, 2, 3, 4].map(ind => ({
  code: `WINTER${ind * 10}`,
  label: 'Lorem ipsum dolor sit amet',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  image: ind % 2 !== 0 ? `https://picsum.photos/330/${120 + ind}` : null,
  validFrom: (new Date()).toISOString(),
  validTo: (new Date(Date.now() + ind * 2 * 24 * 36e5)).toISOString(),
  type: 'absolute',
  value: 10 * ++ind,
  customAttributes: {},
  enrollPoints: Math.round(Math.random() * 1000)
}))

module.exports.userCoupons = [6, 7, 8, 9].map(ind => ({
  code: `WINTER${ind * 10}`,
  label: 'Lorem ipsum dolor sit amet',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  image: ind % 2 !== 0 ? `https://picsum.photos/330/${120 + ind}` : null,
  validFrom: (new Date()).toISOString(),
  validTo: (new Date(Date.now() + 36e5 + ind * 2 * 24 * 36e5)).toISOString(),
  type: 'absolute',
  value: 10 * ++ind,
  customAttributes: {}
}))

module.exports.pointsHistory = [0, 1, 2, 3, 4].map(ind => ({
  code: `WINTER${ind * 10}`,
  label: 'Lorem ipsum dolor sit amet',
  image: `https://picsum.photos/${80 + ind}`,
  date: (new Date(Date.now() - ind * 24 * 36e5)).toISOString(),
  type: ind % 2 !== 0 ? 'earned' : 'redeemed',
  value: Math.round(Math.random() * 1000),
  customAttributes: {}
}))
