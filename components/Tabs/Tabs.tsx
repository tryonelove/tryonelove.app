import clsx from 'clsx';
import { useEffect, useState } from 'react';

export type TabItem<TItemId extends string> = {
  id: TItemId;
  label: string;
};

interface TabsProps<TItemId extends string> {
  items: TabItem<TItemId>[];
  onSelectedTabChange?: (selectedTabId: TItemId) => void;
}

export function Tabs<TItemId extends string>({
  items,
  onSelectedTabChange,
}: TabsProps<TItemId>) {
  const [selectedTabId, setSelectedTabId] = useState(items[0].id);

  useEffect(() => {
    if (onSelectedTabChange) {
      onSelectedTabChange(items[0].id);
    }
  }, [items, onSelectedTabChange]);

  const handleSelectedTabChange = (tabId: TItemId) => {
    setSelectedTabId(tabId);

    if (onSelectedTabChange) {
      onSelectedTabChange(tabId);
    }
  };

  return (
    <div className='border-b'>
      {items.map((i) => (
        <button
          key={i.id}
          className={clsx(
            'rounded-t p-2 text-sm hover:bg-slate-50 active:bg-slate-100',
            { 'mb-[-1px] border-b border-slate-600': selectedTabId === i.id }
          )}
          onClick={() => handleSelectedTabChange(i.id)}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
