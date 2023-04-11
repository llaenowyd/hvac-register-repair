import { useRecoilValue } from "recoil";

import { currentImageState } from "../state";

export const useCurrentImage = () => useRecoilValue(currentImageState);
