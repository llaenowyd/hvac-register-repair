import { useRecoilValue } from "recoil";

import { imagesState } from "../state";

export const useImages = () => useRecoilValue(imagesState);
