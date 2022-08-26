/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { OperationImpl } from '../model/browser/photo/OperationImpl'
import { AlbumOperationImpl } from '../model/browser/album/AlbumOperationImpl'
import { BrowserOperationInterface } from './BrowserOperationInterface'

export class BrowserOperationFactory {
    static readonly TYPE_PHOTO = 'photo';
    static readonly TYPE_ALBUM = 'album';

    static getFeature(type: string): BrowserOperationInterface {
        if (type == BrowserOperationFactory.TYPE_PHOTO) {
            return new OperationImpl();
        } else if (type == BrowserOperationFactory.TYPE_ALBUM) {
            return new AlbumOperationImpl();
        }
    }
}