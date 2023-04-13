import { useSetRecoilState } from "recoil";

import { currentImageState } from "../state";

export const useSetCurrentImage = () => {
  return useSetRecoilState(currentImageState);
};
