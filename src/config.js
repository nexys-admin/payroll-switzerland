import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

const ghUrl = "https://github.com/nexys-admin/payroll-switzerland";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const ghUrlSha = `${ghUrl}/commit/${sha}`;
export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const ghUrlVersion = `${ghUrl}/releases/tag/${version}`;
