import { useSetRecoilState } from "recoil";

import { rawImageIndexState } from "../state";

export const useCurrentImageStepper = () => {
  const setRawImageIndex = useSetRecoilState(rawImageIndexState);

  return [
    () => setRawImageIndex((imageIndex) => imageIndex - 1),
    () => setRawImageIndex((imageIndex) => imageIndex + 1),
  ];
};
