import { Subject } from 'rxjs';

export * from '../../../projects/app/src/lib/components/sub-header';
export const testObserver = new Subject<boolean>();
testObserver.subscribe((d) => console.log(d));
