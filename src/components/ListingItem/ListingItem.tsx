import { FC } from 'react';
import { IListingItem } from '@/types/listing.types';
import { formatTitle, formatPrice, getQuantityLevel } from '@/utils/formatters';
import '@css/components/ListingItem.css';

interface ListingItemProps extends IListingItem {}

export const ListingItem: FC<ListingItemProps> = ({
  url,
  MainImage,
  title,
  price,
  currency_code,
  quantity,
}) => {
  if (!MainImage?.url_570xN) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(title)}</p>
        <p className="item-price">{formatPrice(price, currency_code)}</p>
        <p className={`item-quantity ${getQuantityLevel(quantity)}`}>{quantity} left</p>
      </div>
    </div>
  );
};
