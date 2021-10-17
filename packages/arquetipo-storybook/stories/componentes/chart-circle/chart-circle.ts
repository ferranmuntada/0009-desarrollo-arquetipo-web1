export * from '../../../projects/app/src/lib/components/chart-circle';
import { Subject } from 'rxjs';

export const testObserver = new Subject<boolean>();
testObserver.subscribe(d => console.log(d));
