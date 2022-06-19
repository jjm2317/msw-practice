import { setupWorker } from 'msw';

import handlers from 'tests/mockServer/handlers';

const worker = setupWorker(...handlers);

export default worker;
