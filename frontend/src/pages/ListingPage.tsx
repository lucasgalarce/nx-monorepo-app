import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ListingItem from '../components/ListingItem';
import { Listing } from '../types/types';

const GET_LISTINGS = gql`
  query {
    listings {
      title
      price
      transactions {
        id
        user {
          name
        }
      }
    }
  }
`;

const ListingsPage: React.FC = () => {
  const { loading, error, data } = useQuery<{ listings: Listing[] }>(
    GET_LISTINGS
  );

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :</p>;
  }
  console.log(data);

  return (
    <div className="container mx-auto px-4 pt-5">
      <div className="w-full h-[100px] flex items-center justify-center">
        <h1 className="text-center text-3xl font-bold">Listings 🎉</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.listings.map((listing) => (
          <ListingItem key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
