import { Subject } from 'rxjs';
export * from '../../../projects/app/src/lib/components/button';

export const testObserver = new Subject<boolean>();
testObserver.subscribe((d) => console.log(d));
