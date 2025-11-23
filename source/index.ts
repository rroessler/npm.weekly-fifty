/// Package Re-Exports
export * as TW50 from './_exports';

import { Fetch } from './fetch';

Fetch().then((quiz) => console.log(quiz.creation));
