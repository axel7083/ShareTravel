import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {ITravel} from '../../../utils/interface/travel/ITravel';

export interface TravelState {
  value: ITravel[];
}

const initialState: TravelState = {
  value: [
    {
      pos: [38.1405041, 13.0870231],
      town: "Palermo, PA, Italy",
      housing: [{
        pricePerNight: 85,
        from: "5/8/2022",
        to: "9/8/2022",
        image: "https://a0.muscache.com/im/pictures/d52fc55a-84f6-4d30-9e8d-2dcae2af632a.jpg?im_w=1200",
        total: 416,
        url: "https://www.airbnb.com/rooms/41885443?check_in=2022-08-05&check_out=2022-08-09&guests=1&adults=3&s=67&unique_share_id=5ef02857-70b8-4ca1-a475-81a8ad7b625b"
      }],
      transports: [{
        price: 119,
        image: process.env.PUBLIC_URL + "/palerme-1.png",
        from: "5/08/2022",
        to :"8/08/2022",
        link: "https://kay.ac/n_g-Az"
      }],
      images: [
          "https://www.lasicile.fr/wp-content/uploads/2012/05/cathedrale-palerme-sicile.jpg",
          "https://itourisme.net/wp-content/uploads/2018/03/top-10-things-to-do-in-palermo.jpg",
          "https://a.cdn-hotels.com/gdcs/production63/d1896/79f77da4-aa4b-4915-a74d-6c8f9b652694.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      ],
      id: 0
    },
    {
      pos: [40.7951882,14.8820119],
      town: "Bari, Metropolitan City of Bari, Italy",
      housing: [{
        pricePerNight: 80,
        from: "4/8/2022",
        to: "8/8/2022",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-674633438656481549/original/e51baa87-7987-4454-a001-dd1a58c7a927.jpeg?im_w=1200",
        total: 416,
        url: "https://www.airbnb.com/rooms/674633438656481549?check_in=2022-08-04&check_out=2022-08-08&guests=1&adults=1&s=67&unique_share_id=e62559b8-4fd1-4afd-8f66-4fe1dd0d73be"
      }],
      transports: [{
        price: 119,
        image: process.env.PUBLIC_URL + "/bari-1.png",
        from: "4/08/2022",
        to :"8/08/2022",
        link: "https://kay.ac/j4kGbb"
      }],
      images: [
          "https://www.swedishnomad.com/wp-content/images/2020/10/Things-to-do-in-Bari-Italy-1.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/ec/bari.jpg?w=700&h=500&s=1",
          "https://asinglewomantraveling.com/wp-content/uploads/2021/06/Bari-Italy-Itinerary.jpg"
      ],
      id: 1
    },
    {
      pos: [52.3547921,4.7635333],
      town: "Amsterdam, Netherlands",
      housing: [{
        pricePerNight: 159,
        from: "4/8/2022",
        to: "8/8/2022",
        image: "https://a0.muscache.com/im/pictures/674f1b1d-7902-4767-ba12-4bae7af70315.jpg?im_w=1200",
        total: 807,
        url: "https://www.airbnb.com/rooms/44160789?check_in=2022-08-04&check_out=2022-08-08&guests=1&adults=3&s=67&unique_share_id=1d5a644e-e9b3-487a-bdbb-bfa74dbe7f5e"
      }],
      transports: [{
        price: 172,
        image: process.env.PUBLIC_URL + "/amsterdam-1.png",
        from: "4/08/2022",
        to :"8/8/2022",
        link: "https://kay.ac/DF8k_2"
      }],
      images: [
          "https://a.cdn-hotels.com/gdcs/production161/d1571/7ed1810d-0c1c-4e3f-b157-f24abbb942ea.jpg",
          "https://samseesworld.com/wp-content/uploads/2021/01/Amsterdam-in-summer.jpg",
          "https://i.pinimg.com/736x/61/59/9d/61599d6eb1ca9cb70bf71f466e513aa2.jpg"
      ],
      id: 2
    },
    {
      pos: [46.825014,23.0907286],
      town: "Cluj-Napoca, Romania",
      housing: [{
        pricePerNight: 54,
        from: "8/8/2022",
        to: "12/8/2022",
        image: "https://a0.muscache.com/im/pictures/4eb2dc77-e117-46ec-94d5-54ccd3ad1355.jpg?im_w=1200",
        total: 271,
        url: "https://www.airbnb.com/rooms/38558859?check_in=2022-08-08&check_out=2022-08-12&guests=1&adults=1&s=67&unique_share_id=38628cae-4b98-45cd-8213-7cbe6649d230"
      }],
      transports: [{
        price: 123,
        image: process.env.PUBLIC_URL + "/napoca-1.png",
        from: "8/08/2022",
        to :"12/8/2022",
        link: "https://kay.ac/qrFxEA"
      }],
      images: [
        "https://static1.evcdn.net/images/reduction/160302_w-1600_h-900_q-75_m-crop.jpg",
          "https://img.itinari.com/pages/images/original/423c1041-9f94-497e-8321-0ac11f268d86-istock-470412260.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=4f44aa1e4d84fba5c2e5c4f436b6685f"
      ],
      id: 3
    },
    {
      pos: [45.4046812,12.1064582],
      town: "Venise ",
      housing: [{
        pricePerNight: 100,
        from: "5/8/2022",
        to: "8/8/2022",
        image: "",
        total: 434,
        url: "https://www.airbnb.com/rooms/2960899?check_in=2022-08-05&check_out=2022-08-08&guests=1&adults=3&s=67&unique_share_id=9f4ae320-6f42-4e77-ad2f-f7d51eb83260"
      }],
      transports: [{
        price: 199,
        image: process.env.PUBLIC_URL + "/venise.png",
        from: "5/08/2022",
        to :"8/8/2022",
        link: "https://kay.ac/UIV9dC"
      }],
      images: [
          "https://media.routard.com/image/63/9/venise-gondoles.1544639.142.jpg",
          "https://static3.mclcm.net/iod/images/v2/69/citytheque/localite_101_957/1200x630_100_300_000000x30x0.jpg"
      ],
      id: 4
    },
      /*
      {
      pos: [0, 0],
      town: "",
      housing: [{
        pricePerNight: 0,
        from: "/8/2022",
        to: "/8/2022",
        image: "",
        total: 0,
        url: ""
      }],
      transports: [{
        price: 123,
        image: process.env.PUBLIC_URL + "/-1.png",
        from: "/08/2022",
        to :"/8/2022",
        link: ""
      }],
      images: [

      ],
      id: 5
    }
       */
  ]
};

export const travelSlice = createSlice({
  name: 'display',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
});

// select resource by id
export const selectTravelById = (state: RootState, id: number) => state.travel.value.find((value) => value.id === id)
//export const {  } = travelSlice.actions;

export const selectTravel = (state: RootState) => state.travel.value;

export default travelSlice.reducer;
