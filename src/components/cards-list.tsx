import { Card } from "./card"

const mock = [{
  "id": "01b395ba-7b97-4214-a98c-365ad281d9dd",
  "name": "G8 Development, Inc.",
  "brewery_type": "planning",
  "address_1": null,
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92109-2802",
  "country": "United States",
  "longitude": -117.1627714,
  "latitude": 32.7174209,
  "phone": "6198233402",
  "website_url": null,
  "state": "California",
  "street": null
},
{
  "id": "0338af09-60df-4e16-9fd6-89d3033c9cc2",
  "name": "Deft Brewing",
  "brewery_type": "micro",
  "address_1": "5328 Banks St",
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92110-4008",
  "country": "United States",
  "longitude": -117.1993433,
  "latitude": 32.76435432,
  "phone": "8589995728",
  "website_url": "http://www.deftbrewing.com",
  "state": "California",
  "street": "5328 Banks St"
},
{
  "id": "084aeeb4-c3dd-4f83-9d43-732e9bac41d2",
  "name": "Mike Hess Brewing - Miramar",
  "brewery_type": "micro",
  "address_1": "7955 Silverton Ave Ste 1201",
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92126-6357",
  "country": "United States",
  "longitude": -117.1518284,
  "latitude": 32.89080081,
  "phone": "6198876453",
  "website_url": "http://www.hessbrewing.com",
  "state": "California",
  "street": "7955 Silverton Ave Ste 1201"
}, {
  "id": "01b395ba-7b97-4214-a98c-365ad281d9dd",
  "name": "G8 Development, Inc.",
  "brewery_type": "planning",
  "address_1": null,
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92109-2802",
  "country": "United States",
  "longitude": -117.1627714,
  "latitude": 32.7174209,
  "phone": "6198233402",
  "website_url": null,
  "state": "California",
  "street": null
},
{
  "id": "0338af09-60df-4e16-9fd6-89d3033c9cc2",
  "name": "Deft Brewing",
  "brewery_type": "micro",
  "address_1": "5328 Banks St",
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92110-4008",
  "country": "United States",
  "longitude": -117.1993433,
  "latitude": 32.76435432,
  "phone": "8589995728",
  "website_url": "http://www.deftbrewing.com",
  "state": "California",
  "street": "5328 Banks St"
},
{
  "id": "084aeeb4-c3dd-4f83-9d43-732e9bac41d2",
  "name": "Mike Hess Brewing - Miramar",
  "brewery_type": "micro",
  "address_1": "7955 Silverton Ave Ste 1201",
  "address_2": null,
  "address_3": null,
  "city": "San Diego",
  "state_province": "California",
  "postal_code": "92126-6357",
  "country": "United States",
  "longitude": -117.1518284,
  "latitude": 32.89080081,
  "phone": "6198876453",
  "website_url": "http://www.hessbrewing.com",
  "state": "California",
  "street": "7955 Silverton Ave Ste 1201"
}]

export function CardsList() {
  return (
    <div className='grid grid-cols-3 gap-8 pt-10 pb-14 pl-8'>
      {mock.map(({ id, phone, postal_code, brewery_type, name, address_1, city, state, country }) => {
        return (<Card key={id} phone={phone} postalCode={postal_code} breweryType={brewery_type} name={name} address={address_1} city={city} state={state} country={country} />)
      })}
    </div>
  )
}
