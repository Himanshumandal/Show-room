import { CarProps,FilterProps } from "@/types";


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export async function fetchCars(filters:FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'x-rapidapi-key': '03f41f7bc8msh3dffc7ef914c246p1b0692jsnd490784e853b',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{headers:headers,
         
      });

      const result=await response.json();
      return result;

}


export const updateSearchParams =(type:string,value:string)=>{
    const searchParams= new URLSearchParams(window.location.search);

    searchParams.set(type,value);

    const newPathname=`${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}


