export interface ResultTest {
    currentRace?: string;
    race?       : string;
    difficulty? : string;
    strategy  ? : string
}
export interface BuildType {
    vs         : string[],
    strategy   : string,
    difficulty : string,
    name       : string,
    units      : string[],
    paragraph  : string,
    buildOrder?: string[],
    link?      : string
}