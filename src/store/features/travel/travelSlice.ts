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
        from: "8/5/2022",
        to: "8/9/2022",
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
    }
  ]
};

export const travelSlice = createSlice({
  name: 'display',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
});

//export const {  } = travelSlice.actions;

export const selectTravel = (state: RootState) => state.travel.value;

export default travelSlice.reducer;
