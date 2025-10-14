import { ActivatedRoute } from '@angular/router';

export function getIdRote(activate: ActivatedRoute): number {
  return activate.snapshot.params['id'];
}
