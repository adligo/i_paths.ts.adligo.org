/**
  * Copyright 2023 Adligo Inc / Scott Morgan
  *
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

import {I_String} from './i_strings.ts.adligo.org@slink/i_strings.mjs';

/**
 * A interface for a more complex description of filesystem paths
 * than a string.
 */
export interface I_Path {
  getParts(): string[];
  isRelative(): boolean;
  isWindows(): boolean;
}