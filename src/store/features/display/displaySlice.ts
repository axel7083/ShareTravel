import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import IDisplay from "../../../utils/interface/IDisplay";
import ILayer from "../../../utils/interface/ILayer";

export interface DisplayState {
  value: IDisplay;
}

const initialState: DisplayState = {
  value: {
    layers: [{
      id: "destination",
      displayed: true,
      name: "destination",
      markers: [
        {
          pos: [38.1406577, 13.2870765],
          color: "#ff0000",
          id: 0,
          popupText: "Palerme",
          callback: id => {}
        }
      ],
      polylines: []
    }]
  },
};

export interface VisibilityPayload {
  layer: number,
  value: boolean
}

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setVisibility: (state,  action: PayloadAction<VisibilityPayload>) => {
      console.log("setVisibility");
      const copy = {...state.value};
      copy.layers[action.payload.layer].displayed = action.payload.value;
      state.value = copy;
    },
    addLayer: (state,  action: PayloadAction<ILayer>) => {
      const copy = {...state.value};
      copy.layers.push(action.payload);
      state.value = copy;
    },
    updateOrAddLayer: (state,  action: PayloadAction<ILayer>) => {
      console.log(action.payload)
      const copy = {...state.value};
      let index = -1;
      for(let i = 0;  i < copy.layers.length; i++) {
        if(copy.layers[i].id === action.payload.id)
        {
          index = i;
          break;
        }
      }

      if(index === -1)
        copy.layers = [...copy.layers, action.payload];
      else {
        copy.layers = [...copy.layers];
        copy.layers[index] = action.payload;
      }

      state.value = copy;
    },
    deleteLayer: (state,  action: PayloadAction<string>) => {
      const copy = {layers: [...state.value.layers]};
      const index = state.value.layers.findIndex((layer) => layer.id === action.payload)
      copy.layers.splice(index, 1);
      state.value = copy;
    }
  },
});

export const { setVisibility, addLayer, updateOrAddLayer, deleteLayer } = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.display.value;

export default displaySlice.reducer;
