import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let rants = [
        {message: 'Start  Ranting!'}
    ];
    return {rants};
  }
}
