/**
 * Common constants for fields names and values:
 * https://developer.apple.com/library/content/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/LowerLevel.html#//apple_ref/doc/uid/TP40012026-CH3-SW3
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BARCODES_FORMAT = exports.STRUCTURE_FIELDS = exports.TOP_LEVEL_FIELDS = exports.PASS_STYLES = exports.DENSITIES = exports.IMAGES = exports.numberStyle = exports.dataDetector = exports.dateTimeFormat = exports.barcodeFormat = exports.textDirection = exports.TRANSIT = exports.PASS_MIME_TYPE = void 0;
exports.PASS_MIME_TYPE = 'application/vnd.apple.pkpass';
exports.TRANSIT = {
    AIR: 'PKTransitTypeAir',
    BOAT: 'PKTransitTypeBoat',
    BUS: 'PKTransitTypeBus',
    TRAIN: 'PKTransitTypeTrain',
    GENERIC: 'PKTransitTypeGeneric',
};
exports.textDirection = {
    LEFT: 'PKTextAlignmentLeft',
    CENTER: 'PKTextAlignmentCenter',
    RIGHT: 'PKTextAlignmentRight',
    NATURAL: 'PKTextAlignmentNatural',
};
exports.barcodeFormat = {
    QR: 'PKBarcodeFormatQR',
    PDF417: 'PKBarcodeFormatPDF417',
    Aztec: 'PKBarcodeFormatAztec',
    Code128: 'PKBarcodeFormatCode128',
};
exports.dateTimeFormat = {
    NONE: 'PKDateStyleNone',
    SHORT: 'PKDateStyleShort',
    MEDIUM: 'PKDateStyleMedium',
    LONG: 'PKDateStyleLong',
    FULL: 'PKDateStyleFull',
};
exports.dataDetector = {
    PHONE: 'PKDataDetectorTypePhoneNumber',
    LINK: 'PKDataDetectorTypeLink',
    ADDRESS: 'PKDataDetectorTypeAddress',
    CALENDAR: 'PKDataDetectorTypeCalendarEvent',
};
exports.numberStyle = {
    DECIMAL: 'PKNumberStyleDecimal',
    PERCENT: 'PKNumberStylePercent',
    SCIENTIFIC: 'PKNumberStyleScientific',
    SPELL_OUT: 'PKNumberStyleSpellOut',
};
/**
 * Supported images.
 */
exports.IMAGES = {
    icon: {
        width: 29,
        height: 29,
        required: true,
    },
    logo: {
        width: 160,
        height: 50,
        required: true,
    },
    background: {
        width: 180,
        height: 220,
    },
    footer: {
        width: 295,
        height: 15,
    },
    strip: {
        width: 375,
        height: 123,
    },
    thumbnail: {
        width: 90,
        height: 90,
    },
};
exports.DENSITIES = new Set(['1x', '2x', '3x']);
// Supported passbook styles.
exports.PASS_STYLES = new Set([
    'boardingPass',
    'coupon',
    'eventTicket',
    'storeCard',
    'generic',
]);
// Optional top level fields
// Top-level pass fields.
// https://developer.apple.com/library/content/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/TopLevel.html#//apple_ref/doc/uid/TP40012026-CH2-SW1
exports.TOP_LEVEL_FIELDS = {
    // Standard Keys
    description: {
        required: true,
        type: 'string',
        templatable: true,
        localizable: true,
    },
    organizationName: {
        required: true,
        type: 'string',
        templatable: true,
        localizable: true,
    },
    passTypeIdentifier: {
        required: true,
        type: 'string',
        templatable: true,
    },
    serialNumber: {
        required: true,
        type: 'string',
    },
    teamIdentifier: {
        required: true,
        type: 'string',
        templatable: true,
    },
    sharingProhibited: {
        required: false,
        type: Boolean,
        templatable: true,
    },
    associatedStoreIdentifiers: {
        required: false,
        type: Array,
        templatable: true,
    },
    // Expiration Keys
    expirationDate: {
        type: 'string', // W3C date, as a string
    },
    voided: {
        type: Boolean,
    },
    // Relevance Keys
    beacons: {
        type: Array,
    },
    locations: {
        type: Array,
    },
    maxDistance: {
        type: 'number',
    },
    relevantDate: {
        type: 'string', // W3C date, as a string
    },
    // Visual Appearance Keys
    barcodes: {
        type: Array,
    },
    backgroundColor: {
        type: 'string',
        templatable: true,
    },
    foregroundColor: {
        type: 'string',
        templatable: true,
    },
    groupingIdentifier: {
        type: 'string',
    },
    labelColor: {
        type: 'string',
        templatable: true,
    },
    logoText: {
        type: 'string',
        templatable: true,
        localizable: true,
    },
    suppressStripShine: {
        type: Boolean,
        templatable: true,
    },
    // Web Service Keys
    authenticationToken: {
        type: 'string',
        minlength: 16,
    },
    webServiceURL: {
        type: 'string',
        templatable: true,
    },
};
// Pass structure keys.
// https://developer.apple.com/library/content/documentation/UserExperience/Reference/PassKit_Bundle/Chapters/LowerLevel.html#//apple_ref/doc/uid/TP40012026-CH3-SW3
exports.STRUCTURE_FIELDS = [
    'auxiliaryFields',
    'backFields',
    'headerFields',
    'primaryFields',
    'secondaryFields',
];
exports.BARCODES_FORMAT = new Set([
    'PKBarcodeFormatQR',
    'PKBarcodeFormatPDF417',
    'PKBarcodeFormatAztec',
    'PKBarcodeFormatCode128',
]);
//# sourceMappingURL=constants.js.map