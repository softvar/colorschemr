import {
LocationStrategy,
PathLocationStrategy
} from '@angular/common'; // PathLocationStrategy - no longer legacy `#` in paths

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

// Angular2 rc-1 router doesn't support things as in beta version, which is kinda useful
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { MainApp } from './app/main';

bootstrap(MainApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy})
])
.catch(err => console.error(err));
