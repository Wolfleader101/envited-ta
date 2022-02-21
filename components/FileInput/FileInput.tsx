import React, { SyntheticEvent, useRef } from "react";
import { FileUploadButton, HiddenFileInput } from "./styles";

type Props = {
  //   ref: React.RefObject<HTMLInputElement>;
  setFile: (value: React.SetStateAction<any>) => void;
};

const FileInput = ({ setFile }: Props) => {
  const hiddenInput = useRef<HTMLInputElement>(null);

  const onClick = (e: SyntheticEvent) => {
    hiddenInput.current?.click();
  };
  return (
    <>
      <FileUploadButton onClick={onClick} cta>
        Upload An Image!
      </FileUploadButton>
      <HiddenFileInput
        type="file"
        title="File Input"
        accept="image/*"
        ref={hiddenInput}
        onChange={(e) => setFile(e.target.files != undefined ? e.target.files[0] : null)}
      />
    </>
  );
};

export default FileInput;
