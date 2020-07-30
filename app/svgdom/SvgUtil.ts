export default class SvgUtil {
    public static pxToMM = 1 / 3.7795;
    public static pxToPt = 0.75;

    public static asPt(px: number): string {
        return (px * this.pxToPt) + "pt";
    }

    public static asMm(px: number): string {
        return (px * this.pxToMM) + "mm";
    }
}
