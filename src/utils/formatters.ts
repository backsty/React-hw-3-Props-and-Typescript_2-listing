export const formatTitle = (title: string): string => {
  if (!title) return '';
  return title.length > 50 ? `${title.slice(0, 50)}...` : title;
};

export const formatPrice = (price: string, currency: string): string => {
  if (!price || !currency) return '';

  const formattedPrice = parseFloat(price).toFixed(2);
  switch (currency) {
    case 'USD':
      return `$${formattedPrice}`;
    case 'EUR':
      return `€${formattedPrice}`;
    default:
      return `${formattedPrice} ${currency}`;
  }
};

export const getQuantityLevel = (quantity: number): string => {
  if (!quantity || quantity <= 0) return 'level-low';
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
};
