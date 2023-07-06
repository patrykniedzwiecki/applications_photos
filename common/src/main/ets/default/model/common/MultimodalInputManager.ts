/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import inputConsumer from '@ohos.multimodalInput.inputConsumer';
import { Log } from '../../utils/Log';

const TAG: string = 'common_MultimodalInputManager';

export class MultimodalInputManager {
  public static readonly KEY_CODE_KEYBOARD_LEFT = 2014;
  public static readonly KEY_CODE_KEYBOARD_RIGHT = 2015;
  public static readonly KEY_CODE_KEYBOARD_ESC = 2070;
  public static readonly KEY_CODE_KEYBOARD_ENTER = 2054;

  //win + N
  leftKeyOptions: any = {
    'preKeys': [],
    'finalKey': 2014,
    'isFinalKeyDown': true,
    'finalKeyDownDuration': 0
  };

  //win + I
  rightKeyOptions: any = {
    'preKeys': [],
    'finalKey': 2015,
    'isFinalKeyDown': true,
    'finalKeyDownDuration': 0
  };
  escKeyOptions: any = {
    'preKeys': [],
    'finalKey': 2070,
    'isFinalKeyDown': true,
    'finalKeyDownDuration': 0
  };

  async registerListener(callback) {
    Log.debug(TAG, `registerListener start`);
    inputConsumer.on('key', this.leftKeyOptions, (data) => {
      Log.debug(TAG, `notificationRegister data: ${JSON.stringify(data)}`);
      callback(0);
    });
    inputConsumer.on('key', this.rightKeyOptions, (data) => {
      Log.debug(TAG, `controlRegister data: ${JSON.stringify(data)}`);
      callback(1);
    });
    inputConsumer.on('key', this.escKeyOptions, (data) => {
      Log.debug(TAG, `escRegister data: ${JSON.stringify(data)}`);
      callback(2);
    });
    Log.debug(TAG, `registerListener end`);
  }

  async unregisterListener() {
    Log.debug(TAG, `unregisterListener start`);
    inputConsumer.off('key', this.leftKeyOptions, (data) => {
      Log.debug(TAG, `notificationUnregister data: ${JSON.stringify(data)}`);
    });
    inputConsumer.off('key', this.rightKeyOptions, (data) => {
      Log.debug(TAG, `controlUnregister data: ${JSON.stringify(data)}`);
    });
    inputConsumer.off('key', this.escKeyOptions, (data) => {
      Log.debug(TAG, `escUnregister data: ${JSON.stringify(data)}`);
    });
    Log.debug(TAG, `unregisterListener end`);
  }
}

export const mMultimodalInputManager = new MultimodalInputManager();