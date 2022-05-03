import { IPipe } from '../../interface/IPipe';

export class CircularSafePipe implements IPipe {

  service(param: any) {
    var i = 0;

    return function (key, value) {
      if (i !== 0 && typeof (param) === 'object' && typeof (value) == 'object' && param == value)
        return '[Circular]';

      if (i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';

      ++i; // so we know we aren't using the original object anymore

      return value;
    }
  }

}