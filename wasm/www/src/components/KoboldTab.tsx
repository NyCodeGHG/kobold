import { Button, Grid } from "@mantine/core";
import { useState } from "react";
import ContentInput, { ContentInputResult } from "./ContentInput";
import FormatSelector, { Format } from "./FormatSelector";
import FileViewer from "./viewer/FileViewer";

type TabPhase = "input" | "view";

const KoboldTab = () => {
  const {
    content,
    setContent,
    format,
    setFormat,
    phase,
    setPhase,
    nextButtonEnabled,
  } = useKoboldTab();

  switch (phase) {
    case "input":
      return (
        <Grid className="flex justify-center gap-16 pt-16">
          <Grid.Col span={4}>
            <ContentInput setContent={setContent} />
          </Grid.Col>
          <Grid.Col span={4}>
            <FormatSelector value={format} setValue={setFormat} />
          </Grid.Col>
          <Grid.Col span={12}>
            <div className="flex justify-center">
              <Button
                disabled={!nextButtonEnabled}
                onClick={() => setPhase("view")}
                variant="gradient"
              >
                Next
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      );
    case "view":
      return <FileViewer content={content} format={format} />;
  }
};

function useKoboldTab() {
  const [content, setContent] = useState<ContentInputResult>();
  const [format, setFormat] = useState<Format>("wad");
  const [phase, setPhase] = useState<TabPhase>("input");

  // Empty string evaluates to false.
  // we actually want this here. wooohooo javascript
  const nextButtonEnabled = content?.file || content?.raw?.trim();

  return {
    content,
    setContent,
    format,
    setFormat,
    phase,
    setPhase,
    nextButtonEnabled,
  };
}

export default KoboldTab;
