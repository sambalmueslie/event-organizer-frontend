import { TestBed } from '@angular/core/testing';

import { DiscordAuthInterceptorInterceptor } from './discord-auth-interceptor.interceptor';

describe('DiscordAuthInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DiscordAuthInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DiscordAuthInterceptorInterceptor = TestBed.inject(DiscordAuthInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
