import fs from 'fs';
import path from 'path';

import './merge';

const tests = fs.readdirSync(path.join(__dirname, 'fixes')).forEach((testFile) => {
  require(path.join(__dirname, 'fixes', testFile));
});
