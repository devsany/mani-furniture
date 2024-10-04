import {
  Bed_Room,
  DiningRoom,
  GREEN,
  HighToLow,
  Living_Room,
  lowToHigh,
  Office,
  Outdoor,
} from "./actionType";
import { furniture_json } from "../component/JSON/PRODUCT_JSON";
// import { CAT_Office, CAT_Outdoor } from "./action";

const initialState = {
  data: {},
  cat_liv: [],
  // cat_bed: [],
  // cat_Din: [],
  // cat_office: [],
  // cat_outdoor: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GREEN:
      return {
        data: furniture_json,
      };
    case Living_Room:
      return {
        ...state,
        cat_liv: furniture_json.furniture.filter(
          (item) => item.category == "LivingRoom"
        ),
      };
    case Bed_Room:
      return {
        ...state,
        cat_liv: furniture_json.furniture.filter(
          (item) => item.category == "Bedroom"
        ),
      };
    case DiningRoom:
      return {
        ...state,
        cat_liv: furniture_json.furniture.filter(
          (item) => item.category == "DiningRoom"
        ),
      };

    case Office:
      return {
        ...state,
        cat_liv: furniture_json.furniture.filter(
          (item) => item.category == "Office"
        ),
      };
    case Outdoor:
      return {
        ...state,
        cat_liv: furniture_json.furniture.filter(
          (item) => item.category == "Outdoor"
        ),
      };
    case lowToHigh:
      return {
        ...state,
        cat_liv: furniture_json.furniture.sort((a, b) => a.price - b.price),
      };

    case HighToLow:
      return {
        ...state,
        cat_liv: state.cat_liv.sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
};
