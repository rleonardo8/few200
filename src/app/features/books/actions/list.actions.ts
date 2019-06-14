import { createAction, props } from '@ngrx/store';

let currentTempId = 0;

export const itemAddedToList = createAction(
  '[item] added',
  ({ title }: { title: string }, { author }: { author: string }, { bookFormat }: { bookFormat: string }) => {
    return {
      entity: {
        id: 'TEMP-' + currentTempId++,
        title,
        author,
        bookFormat
      }
    };
  });
