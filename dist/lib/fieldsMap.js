'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsMap = void 0;
const w3cdate_1 = require("./w3cdate");
class FieldsMap extends Map {
    /**
     * Returns Map as array of objects with key moved inside like a key property
     */
    toJSON() {
        if (!this.size)
            return undefined;
        return [...this].map(([key, data]) => {
            // Remap Date objects to string
            if (data.value instanceof Date)
                data.value = (0, w3cdate_1.getW3CDateString)(data.value);
            return { key, ...data };
        });
    }
    /**
     * Adds a field to the end of the list
     *
     * @param {Field} field - Field key or object with all fields
     * @returns {FieldsMap}
     * @memberof FieldsMap
     */
    add(field) {
        const { key, ...data } = field;
        if (typeof key !== 'string')
            throw new TypeError(`To add a field you must provide string key value, received ${typeof key}`);
        if (!('value' in data))
            throw new TypeError(`To add a field you must provide a value field, received: ${JSON.stringify(data)}`);
        if ('dateStyle' in data) {
            const date = data.value instanceof Date ? data.value : new Date(data.value);
            if (!Number.isFinite(date.getTime()))
                throw new TypeError(`When dateStyle specified the value must be a valid Date instance or string, received ${data.value}`);
            this.set(key, { ...data, value: date });
        }
        else
            this.set(key, data);
        return this;
    }
    /**
     * Sets value field for a given key, without changing the rest of field properties
     *
     * @param {string} key
     * @param {string} value
     * @memberof FieldsMap
     */
    setValue(key, value) {
        if (typeof key !== 'string')
            throw new TypeError(`key for setValue must be a string, received ${typeof key}`);
        if (typeof value !== 'string')
            throw new TypeError(`value for setValue must be a string, received ${typeof value}`);
        const field = this.get(key) || { value };
        field.value = value;
        this.set(key, field);
        return this;
    }
    /**
     * Set a field as Date value with appropriated options
     *
     * @param {string} key
     * @param {string} label
     * @param {Date} date
     * @param {{dateStyle?: string, ignoresTimeZone?: boolean, isRelative?: boolean, timeStyle?:string, changeMessage?: string}} [formatOptions]
     * @returns {FieldsMap}
     * @throws if date is not a Date or invalid Date
     * @memberof FieldsMap
     */
    setDateTime(key, label, date, { dateStyle, ignoresTimeZone, isRelative, timeStyle, changeMessage, } = {}) {
        if (typeof key !== 'string')
            throw new TypeError(`Key must be a string, received ${typeof key}`);
        if (typeof label !== 'string')
            throw new TypeError(`Label must be a string, received ${typeof label}`);
        if (!(date instanceof Date))
            throw new TypeError('Third parameter of setDateTime must be an instance of Date');
        //  Either specify both a date style and a time style, or neither.
        if (!!dateStyle !== !!timeStyle)
            throw new ReferenceError('Either specify both a date style and a time style, or neither');
        // adding
        this.set(key, {
            label,
            value: date,
            changeMessage,
            dateStyle,
            ignoresTimeZone,
            isRelative,
            timeStyle,
        });
        return this;
    }
}
exports.FieldsMap = FieldsMap;
//# sourceMappingURL=fieldsMap.js.map