const pricingData = [
  {
    id: 1,
    type: "Basic",
    price: 5,
    desc: "It offers a reliable and cost-effective hosting solution with all the essentials you need to get started.",
    detail: [
      {
        id: 1,
        info: "10 GB storage",
        available: true,
      },
      {
        id: 2,
        info: "Unlimited bandwidth",
        available: true,
      },
      {
        id: 3,
        info: "3 email accounts",
        available: true,
      },
      {
        id: 4,
        info: "24/7 customer support",
        available: true,
      },
      {
        id: 5,
        info: "Daily backups",
        available: false,
      },
      {
        id: 6,
        info: "SSL certificate",
        available: false,
      },
    ],
    additionalFeatureStoragePricing: 1,
  },
  {
    id: 2,
    type: "Professional",
    price: 25,
    desc: "It includes a range of advanced features and resources to support and grow your online presence.",
    detail: [
      {
        id: 1,
        info: "20 GB storage",
        available: true,
      },
      {
        id: 2,
        info: "Unlimited bandwidth",
        available: true,
      },
      {
        id: 3,
        info: "5 email accounts",
        available: true,
      },
      {
        id: 4,
        info: "24/7 customer support",
        available: true,
      },
      {
        id: 5,
        info: "Daily backups",
        available: true,
      },
      {
        id: 6,
        info: "SSL certificate",
        available: true,
      },
      {
        id: 7,
        info: "Database support",
        available: true,
      },
      {
        id: 8,
        info: "Advanced Security Measures",
        available: true,
      },
    ],
    additionalFeatureStoragePricing: 0.75,
  },
  {
    id: 3,
    type: "Business",
    price: 50,
    desc: "It offers the most robust set of features and resources to ensure the smooth operation and growth of your website.",
    detail: [
      {
        id: 1,
        info: "50 GB storage",
        available: true,
      },
      {
        id: 2,
        info: "Unlimited bandwidth",
        available: true,
      },
      {
        id: 3,
        info: "10 email accounts",
        available: true,
      },
      {
        id: 4,
        info: "24/7 customer support",
        available: true,
      },
      {
        id: 5,
        info: "Daily backups",
        available: true,
      },
      {
        id: 6,
        info: "SSL certificate",
        available: true,
      },
      {
        id: 7,
        info: "Database support",
        available: true,
      },
      {
        id: 8,
        info: "Advanced Security Measures",
        available: true,
      },
      {
        id: 9,
        info: "Dedicated IP address",
        available: true,
      },
    ],
    additionalFeatureStoragePricing: 0.5,
  },
];

export default pricingData;
