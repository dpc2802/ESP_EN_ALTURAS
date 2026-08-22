const fs = require('fs');

let file = 'src/app/components/ImageModal.jsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /import \{ motion, AnimatePresence \} from "framer-motion";/,
  `import { motion, AnimatePresence } from "framer-motion";\nimport { useState, useEffect } from "react";`
);

fs.writeFileSync(file, text);
