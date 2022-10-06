import { FileInput, Tabs, TabsValue, Textarea } from "@mantine/core";
import { useEffect } from "react";
import { FC, memo, useState } from "react";

export interface ContentInputProps {
  setContent: (content: ContentInputResult) => void;
}

export interface ContentInputResult {
  raw?: string;
  file?: File | null;
}

const ContentInput: FC<ContentInputProps> = ({ setContent }) => {
  const [file, setFile] = useState<File | null>(null);
  const [hex, setHex] = useState<string>();

  const [activeTab, setActiveTab] = useState<TabsValue>("file");

  let currentValue: ContentInputResult;

  // why can't this be an expression uhhhggg
  switch (activeTab) {
    default:
    case "file":
      currentValue = { file };
      break;
    case "hex":
      currentValue = { raw: hex };
      break;
  }

  useEffect(() => {
    setContent(currentValue);
  }, [currentValue, setContent]);

  // @ts-ignore can't be a different value but typescript doing typescript things
  return (
    <Tabs defaultValue="file" value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="file">File</Tabs.Tab>
        <Tabs.Tab value="hex">Hex</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="file">
        <FileInput
          placeholder="Choose a file"
          label="File"
          withAsterisk
          value={file}
          onChange={setFile}
        />
      </Tabs.Panel>
      <Tabs.Panel value="hex">
        <Textarea
          placeholder="Hex content"
          label="Content"
          withAsterisk
          value={hex}
          onChange={(event) => setHex(event.target.value)}
        />
      </Tabs.Panel>
    </Tabs>
  );
};

export default memo(ContentInput);
