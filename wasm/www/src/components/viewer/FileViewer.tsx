import { Loader } from "@mantine/core";
import { FC, memo } from "react";
import { ContentInputResult } from "../ContentInput";
import { Format } from "../FormatSelector";
import ArchiveViewer from "./ArchiveViewer";

interface FileViewerProps {
  content: ContentInputResult | undefined;
  format: Format;
}

const FileViewer: FC<FileViewerProps> = ({ content, format }) => {
  if (!content) {
    return <Loader />;
  }

  switch (format) {
    case "wad":
      return <ArchiveViewer content={content} />;
    default:
      return <p>This format is not implemented yet. :(</p>;
  }
};

export default memo(FileViewer);
