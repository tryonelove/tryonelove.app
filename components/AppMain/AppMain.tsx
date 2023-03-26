import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import { Profile } from '../Profile';
import { TabItem, Tabs } from '../Tabs';
import { About } from '../About';
import { ReactNode, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

enum TabItemId {
  About = 'about',
}

const items: TabItem<TabItemId>[] = [
  {
    id: TabItemId.About,
    label: 'About',
  },
];

const TabComponentMap: Record<TabItemId, ReactNode> = {
  [TabItemId.About]: <About />,
};

export function AppMain() {
  const [selectedTabId, setSelectedTabId] = useState<TabItemId>();

  return (
    <main
      className={clsx(inter.className, 'flex h-screen flex-col items-center')}
    >
      <div className='container mx-auto max-w-2xl'>
        <div className='flex gap-9'>
          <div className='flex flex-1 flex-col gap-7'>
            <Profile />
            <div>
              <Tabs
                items={items}
                onSelectedTabChange={(tabId) => setSelectedTabId(tabId)}
              />
              {selectedTabId && (
                <div className='pt-2'>{TabComponentMap[selectedTabId]}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
