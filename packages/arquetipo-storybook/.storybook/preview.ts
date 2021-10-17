import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { addParameters } from '@storybook/angular';
setCompodocJson(docJson);
addParameters({ docs: { iframeHeight: 400 } });