import {
  createColorClasses
} from "./chunk-QPJI5M5R.js";
import {
  getIonMode
} from "./chunk-STVEE43Z.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-2YSWQYGY.js";
import "./chunk-L44VN3HG.js";

// node_modules/.pnpm/@ionic+core@8.1.2/node_modules/@ionic/core/dist/esm/ion-chip.entry.js
var chipIosCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;margin-top:4px;margin-bottom:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;min-height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)}::slotted(ion-icon){font-size:1.4285714286em}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}::slotted(ion-icon:first-child){-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-icon:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar){-ms-flex-negative:0;flex-shrink:0;width:1.7142857143em;height:1.7142857143em}::slotted(ion-avatar:first-child){-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px;margin-top:-4px;margin-bottom:-4px}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}:host{font-size:clamp(13px, 0.875rem, 22px)}";
var IonChipIosStyle0 = chipIosCss;
var chipMdCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;margin-top:4px;margin-bottom:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;min-height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)}::slotted(ion-icon){font-size:1.4285714286em}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}::slotted(ion-icon:first-child){-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-icon:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar){-ms-flex-negative:0;flex-shrink:0;width:1.7142857143em;height:1.7142857143em}::slotted(ion-avatar:first-child){-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:-4px;margin-bottom:-4px}::slotted(ion-avatar:last-child){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px;margin-top:-4px;margin-bottom:-4px}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}:host{font-size:0.875rem}";
var IonChipMdStyle0 = chipMdCss;
var Chip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
    this.outline = false;
    this.disabled = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "7dd923c1b28d1eb1efa348f66f49cec067645af9", "aria-disabled": this.disabled ? "true" : null, class: createColorClasses(this.color, {
      [mode]: true,
      "chip-outline": this.outline,
      "chip-disabled": this.disabled,
      "ion-activatable": true
    }) }, h("slot", { key: "7ede838bf109dc27a898ee2dcdeabc3f439c8e6f" }), mode === "md" && h("ion-ripple-effect", { key: "5acb073029544e73fcc0db4cc4e661ec1df4d231" }));
  }
};
Chip.style = {
  ios: IonChipIosStyle0,
  md: IonChipMdStyle0
};
export {
  Chip as ion_chip
};