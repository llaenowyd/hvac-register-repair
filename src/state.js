import { atom, selector } from "recoil";

import { mod, makeContentUrl } from "./util";

export const imagesState = atom({
  key: "images",
  default: [
    "230321_1_plan.jpg",
    "230322_1_prep.jpg",
    "230409_1_vacuum.jpg",
    "230409_2_vacuum.jpg",
    "230409_3_brush.jpg",
    "230409_4_wipe.jpg",
    "230409_5_wipe.jpg",
    "230409_6_wipe.jpg",
    "230409_7_precise_fit.jpg",
    "230409_8_precise_fit.jpg",
    "230409_9_placed.jpg",
    "230409_a_obstructive_shelf.jpg",
  ].map(makeContentUrl),
});

export const rawImageIndexState = atom({
  key: "rawImageIndex",
  default: 0,
});

export const imageIndexState = selector({
  key: "imageIndex",
  get: ({ get }) => {
    const images = get(imagesState);
    const rawImageIndex = get(rawImageIndexState);
    return mod(rawImageIndex, images.length);
  },
  set: ({ set }, newValue) => {
    set(rawImageIndexState, newValue);
  },
});

export const currentImageState = selector({
  key: "currentImage",
  get: ({ get }) => {
    const images = get(imagesState);
    const imageIndex = get(imageIndexState);
    return images[imageIndex];
  },
  set: ({ get, set }, newValue) => {
    const images = get(imagesState);
    const index = images.findIndex((image) => newValue === image);
    if (0 > index) {
      return;
    }
    set(rawImageIndexState, index);
  },
});
