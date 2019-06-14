import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CommunicationsService {

  private subject = new BehaviorSubject<string>('some default value');
  private message = 'default';

  getMessage() {
    return this.message;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
    this.subject.next(newMessage);
  }

  getSubscription(): Observable<string> {
    return this.subject.asObservable();
  }
  getSubscription2(func: (x: string) => string): Observable<string> {
    return this.subject.asObservable().pipe(
      map(func)
    );
  }
}

export const selectMessageAsUpper = (x: string) => x.toUpperCase();

export const selectMessageAsLower = (x: string) => x.toLowerCase();
