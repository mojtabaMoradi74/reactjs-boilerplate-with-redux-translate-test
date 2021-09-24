
/**
 * Check if the values match with the type specs
 * Return a type error message or null
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 */
export function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
        const ReactPropTypesSecret = require('prop-types/lib/ReactPropTypesSecret');
        var name = componentName || 'React class';
        for (var typeSpecName in typeSpecs) {
            if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error;
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    return (name + ': ' + location + ' type `' + typeSpecName + '` is ' +
                        'invalid; it must be a function, usually from React.PropTypes.');
                } else {
                    // Prop type validation may throw. In case they do, catch and save the
                    // exception as the error.
                    try {
                        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                        error = ex;
                    }
                }
                if (error && !(error instanceof Error)) {
                    return (name + ': type specification of ' + location + ' `' +
                        typeSpecName + '` is invalid; the type checker function must ' +
                        'return `null` or an `Error` but returned a ' + typeof error + '. ' +
                        'You may have forgotten to pass an argument to the type checker ' +
                        'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                        'shape all require an argument).');
                }
                if (error instanceof Error) {
                    var stack = getStack && getStack() || '';
                    return 'Failed ' + location + ' type: ' + error.message + stack;
                }
            }
        }
    }
}

/**
 * Same as checkPropTypes but throws on error
 */
export function assertPropTypes() {
    if (process.env.NODE_ENV !== 'production') {
        var error = checkPropTypes.apply(null, arguments);
        if (error) {
            throw new Error(error);
        }
    }
}


