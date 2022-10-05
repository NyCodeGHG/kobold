import { Select } from "@mantine/core";
import { FC } from "react";

export type Format = 'bcd' | 'nav' | 'poi' | 'wad';

const formats = ['bcd', 'nav', 'poi', 'wad'].map(id => {
  return {
    value: id,
    label: id.toUpperCase(),
  };
});

const FormatSelector: FC<{
  value: Format,
  setValue: (format: Format) => void,
}> = ({ value, setValue }) => {
  return <Select value={value} onChange={setValue} label='Select format' placeholder='Pick one' data={formats} />
};

export default FormatSelector;
