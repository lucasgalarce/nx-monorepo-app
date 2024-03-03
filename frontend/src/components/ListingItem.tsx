import { Listing } from '../types/types';

interface ListingItemProps {
  listing: Listing;
}

const ListingItem: React.FC<ListingItemProps> = ({ listing }) => {
  return (
    <div className="border p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold">{listing.title}</h2>
      <p>{listing.description}</p>
      <p className="font-semibold">Price: ${listing.price}</p>
      {listing.transactions.length > 0 && (
        <div>
          <h3 className="font-bold mt-2">Transactions:</h3>
          {listing.transactions.map((transaction) => (
            <p key={transaction.id}>Purchased by: {transaction.user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingItem;
