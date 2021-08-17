import { coreActions } from './core';
import { headerActions } from './header';

export const actions = {
    ...coreActions,
    ...headerActions
}