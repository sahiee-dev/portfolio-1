import { library } from '@fortawesome/fontawesome-svg-core';
// Only import icons actually used in the UI
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add only the icons we need
library.add(faGithub, faLinkedin, faEnvelope, faPhone);
