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
