import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: true
});

horizon.connect();

export default horizon;
