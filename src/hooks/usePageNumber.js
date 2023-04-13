import { useRecoilValue } from "recoil";

import { imagesState, imageIndexState } from "../state";

export const usePageNumber = () => {
  const images = useRecoilValue(imagesState);
  const imageIndex = useRecoilValue(imageIndexState);

  return [imageIndex + 1, images.length];
};
