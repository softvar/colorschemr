import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { MainApp } from './app/main';

bootstrap(MainApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS)
])
.catch(err => console.error(err));
