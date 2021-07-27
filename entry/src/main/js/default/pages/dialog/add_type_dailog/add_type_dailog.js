/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * @file: 新建相册移动复制图片、视频弹框
 */

export default {
    data: {
        inputName: ''
    },
    onReady() {

    },
    onInit() {

    },
    show() {
        this.$element('addTypeDialog').show();
    },
    close() {
        this.$element('addTypeDialog').close();
    },
    query() {
        this.close();
    },
    cancel() {
        this.close();
    },
    operation(name) {
        this.$emit('addTypeDialogClick', name);
    }
};
