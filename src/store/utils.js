import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export function imagePath(assetName) {
    return `${process.env.PUBLIC_URL}/images/${assetName}`;
  }