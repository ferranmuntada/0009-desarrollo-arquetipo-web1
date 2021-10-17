export * from '../../../projects/app/src/lib/components/check-box';
import { Subject } from 'rxjs';

export const testObserver = new Subject<boolean>();
testObserver.subscribe(d => console.log(d));

