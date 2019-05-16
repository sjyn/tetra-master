import { PreGameModule } from './pre-game.module';

describe('PreGameModule', () => {
  let preGameModule: PreGameModule;

  beforeEach(() => {
    preGameModule = new PreGameModule();
  });

  it('should create an instance', () => {
    expect(preGameModule).toBeTruthy();
  });
});
