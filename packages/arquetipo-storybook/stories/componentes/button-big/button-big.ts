import { Subject } from 'rxjs';

export * from '../../../projects/app/src/lib/components/button-big';

export const testObserverBig = new Subject<any>();
testObserverBig.subscribe((d) => console.log(d));
