'use client';
import { useState } from 'react';
import type { ChecklistCopy } from '@/lib/google-checklist';

export default function GoogleChecklist({ copy }: { copy: ChecklistCopy }) {
  const [checked, setChecked] = useState<number[]>([]);
  return <div className="google-checklist">
    <div className="checklist-toolbar">
      <p role="status" aria-live="polite">{checked.length} / {copy.items.length} {copy.progress}</p>
      <div><button type="button" onClick={() => window.print()}>{copy.print}</button><button type="button" onClick={() => setChecked([])}>{copy.reset}</button></div>
    </div>
    <p className="checklist-note">{copy.note}</p>
    {copy.groups.map((group, groupIndex) => <fieldset key={group}>
      <legend>{group}</legend>
      {copy.items.slice(groupIndex * 4, groupIndex * 4 + 4).map(([title, body], index) => {
        const item = groupIndex * 4 + index;
        return <label className="checklist-item" key={title} htmlFor={`checklist-${item}`}>
          <input id={`checklist-${item}`} type="checkbox" checked={checked.includes(item)} onChange={event => setChecked(current => event.target.checked ? [...current, item] : current.filter(value => value !== item))} />
          <span><strong>{title}</strong><span>{body}</span></span>
        </label>;
      })}
    </fieldset>)}
  </div>;
}
