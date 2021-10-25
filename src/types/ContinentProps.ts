export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    countries: string;
    languages: string;
    cities: string;
    cities100: {
      city: string;
      country: string;
    }[];
  };
}

export type ContinentsProps = {
  continents: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
};
