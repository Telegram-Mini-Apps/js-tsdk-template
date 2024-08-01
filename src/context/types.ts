import { WebApp } from '@twa-dev/types'
import { TonConnectUI } from '@tonconnect/ui';

export interface AppContext {
  tonConnectUI: TonConnectUI;
  getWebApp(): WebApp;
}