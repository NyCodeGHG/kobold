import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import ContentInput, { ContentInputResult } from "./ContentInput";
import FormatSelector, { Format } from "./FormatSelector";

const KoboldTab = () => {
  const [content, setContent] = useState<ContentInputResult>();
  const [format, setFormat] = useState<Format>('wad');

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Grid>
      <Grid.Col span={3}>
        <ContentInput setContent={setContent} />
      </Grid.Col>
      <Grid.Col span={3}>
        <FormatSelector value={format} setValue={setFormat} />
      </Grid.Col>
    </Grid>
  )
};

export default KoboldTab;
