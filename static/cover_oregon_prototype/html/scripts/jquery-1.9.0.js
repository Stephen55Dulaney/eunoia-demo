/* jQuery 1.9.0 - Placeholder for Cover Oregon Prototype */
console.log('jQuery 1.9.0 loaded');

// Basic jQuery functionality
window.jQuery = window.$ = function(selector) {
    if (typeof selector === 'string') {
        return document.querySelectorAll(selector);
    }
    return selector;
};

// Add basic methods
jQuery.fn = {
    addClass: function(className) {
        this.forEach(function(el) {
            el.classList.add(className);
        });
        return this;
    },
    removeClass: function(className) {
        this.forEach(function(el) {
            el.classList.remove(className);
        });
        return this;
    },
    on: function(event, handler) {
        this.forEach(function(el) {
            el.addEventListener(event, handler);
        });
        return this;
    },
    ready: function(handler) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handler);
        } else {
            handler();
        }
    }
}; 