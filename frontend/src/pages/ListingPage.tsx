import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ListingItem from '../components/ListingItem';
import { Listing } from '../types/types';

const GET_LISTINGS = gql`
  query {
    transactions {
      id
      user {
        id
        name
        email
      }
      listing {
        title
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

  return (
    <div className="space-y-4">
      {data?.listings.map((listing) => (
        <ListingItem key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsPage;
