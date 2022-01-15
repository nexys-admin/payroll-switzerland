export const ghUrl = "https://github.com/nexys-admin/payroll-switzerland";

export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const ghUrlSha = `${ghUrl}/commit/${sha}`;

export const version = import.meta.env.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const ghUrlVersion= `${ghUrl}/releases/tag/${version}`;
