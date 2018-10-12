// Copyright 2017-2018 @polkadot/util-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Prefix } from './types';

export default {
  allowedDecodedLengths: [1, 2, 4, 8, 32],
  // publicKey has prefix + 2 checksum bytes, short only prefix + 1 checksum byte
  allowedEncodedLengths: [3, 4, 6, 10, 35],
  prefix: 42 as Prefix
};
