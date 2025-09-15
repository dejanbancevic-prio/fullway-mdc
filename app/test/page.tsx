"use client";

import { GET_SPEC } from "@/graphql/queries/getSpecials";
import { useQuery } from "@apollo/client/react";
import { useEffect } from "react";

type Continent = {
  code: string;
  name: string;
};

type GetContinentsData = {
  continents: Continent[];
};

type Promotion = {
  promo_url: string;
  name: string;
  label: string;
  discount: string;
  description: string;
  date: string;
  banner: string;
  availability: string;
};

type Rebate = {
  date: string;
  description: string;
  entity_id: string;
  image: string;
  name: string;
  status: string;
  url_key: string;
};

type SpecialsData = {
  specials: {
    promotions: Promotion[];
    rebates: Rebate[];
  };
};

const TestSpecials = () => {
  const { data, loading, error } = useQuery<SpecialsData>(GET_SPEC);

  useEffect(() => {
    if (data) {
      console.log("Promotions:", data.specials.promotions);
      console.log("Rebates:", data.specials.rebates);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex flex-col p-10">
      <div className="font-bold text-4xl mb-4">Specials</div>

      <div className="mb-6">
        <h2 className="font-semibold text-2xl">Promotions</h2>
        {data?.specials.promotions.map((promo) => (
          <div key={promo.promo_url}>
            <p>{promo.name} - {promo.label}</p>
            <p>{promo.discount}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-semibold text-2xl">Rebates</h2>
        {data?.specials.rebates.map((rebate) => (
          <div key={rebate.entity_id}>
            <p>{rebate.name}</p>
            <p>{rebate.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TestSpecials;
