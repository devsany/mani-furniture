import {
  Bed_Room,
  DiningRoom,
  GREEN,
  HighToLow,
  lowToHigh,
  Office,
  Outdoor,
} from "./actionType";
import { Living_Room } from "./actionType";

export const green = () => {
  return {
    type: GREEN,
  };
};
//#endregion

export const CAT_living_Room = () => {
  return {
    type: Living_Room,
  };
};

export const CAT_Bed_Room = () => {
  return {
    type: Bed_Room,
  };
};

export const CAT_DiningRoom = () => {
  return {
    type: DiningRoom,
  };
};

export const CAT_Outdoor = () => {
  return {
    type: Outdoor,
  };
};

export const CAT_Office = () => {
  return {
    type: Office,
  };
};

export const Low_toHigh = () => {
  return {
    type: lowToHigh,
  };
};

export const High_toLow=()=>{
  return {
    type: HighToLow,
  };
}
