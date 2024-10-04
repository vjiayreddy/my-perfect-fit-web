import { makeVar } from "@apollo/client";
export const themeModeVar = makeVar("light");
export const setGlobalGqlErrorState = makeVar<any>(null);

