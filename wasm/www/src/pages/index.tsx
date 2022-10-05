import { ActionIcon, Button, Tabs, TabsValue } from "@mantine/core";
import { nanoid } from "nanoid";
import { NextPage } from "next";
import { FC, useCallback, useState } from "react";
import { IoClose } from 'react-icons/io5';
import GitHubIcon from "../components/GitHubIcon";
import KoboldTab from "../components/KoboldTab";

interface TabData {
  id: string,
  name: string,
};

const Home: NextPage = () => {
  const [tabs, setTabs] = useState<TabData[]>([]);

  const closeTab = useCallback((tabId: string) => {
    setTabs(tabs.filter(tab => tab.id !== tabId));
  }, [tabs]);

  const createTab = useCallback((name: string) => {
    const newTab: TabData = {
      id: nanoid(),
      name,
    };
    setTabs([...tabs, newTab]);
    return newTab;
  }, [tabs]);

  return <div>
    <div className="flex justify-between">
      <h1 className="m-0 ml-2">Kobold</h1>
      <GitHubIcon url='https://github.com/vbe0201/kobold' size={16} className='mr-2' />
    </div>
    {tabs.length != 0 ? <TabView {...{ tabs, closeTab, createTab }} /> : <NoTabs createTab={() => createTab('New Tab')} />}
  </div>;
}

export default Home;

const TabView: FC<{ tabs: TabData[], closeTab: (tabId: string) => void, createTab: (name: string) => void }> = ({ tabs, closeTab, createTab }) => {
  const [currentTab, setCurrentTab] = useState<TabsValue>();
  return <Tabs value={currentTab} onTabChange={setCurrentTab} defaultValue={tabs[0].id}>
    <Tabs.List>
      {tabs.map(tab => <Tabs.Tab key={tab.id} value={tab.id}>
        <div className="flex flex-row justify-between align-middle gap-2">
          <span className="m-auto">{tab.name}</span>
          <ActionIcon onClick={() => closeTab(tab.id)}>
            <IoClose />
          </ActionIcon>
        </div>
      </Tabs.Tab>)}
    </Tabs.List>
    {tabs.map(tab => <Tabs.Panel key={tab.id} value={tab.id}>
      <KoboldTab />
    </Tabs.Panel>)}
  </Tabs>;
}

const NoTabs: FC<{ createTab: () => void }> = ({ createTab }) => {
  return <div className="flex justify-center align-middle flex-col text-center gap-4">
    <p className="text-xl pt-5">You have no open tabs.</p>
    <Button className="m-auto" onClick={createTab}>Create a new Tab</Button>
  </div>;
}
