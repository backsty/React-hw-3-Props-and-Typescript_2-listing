import { FC } from 'react';
import { IListingProps } from '@/types/listing.types';
import { ListingItem } from '@/components/ListingItem';
import '@css/components/ListingContainer.css';

export const ListingContainer: FC<IListingProps> = ({ items = [] }) => {
  if (!items.length) {
    return <div className="empty">No items found</div>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem key={item.listing_id} {...item} />
      ))}
    </div>
  );
};
