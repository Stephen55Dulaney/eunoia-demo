/* WaterMark.js - Placeholder for Cover Oregon Prototype */
console.log('WaterMark.js loaded');

// Basic watermark functionality
function addWatermark(element, text) {
    if (!element) return;
    
    var watermark = document.createElement('div');
    watermark.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgba(0,0,0,0.1); font-size: 24px; pointer-events: none; z-index: 1000;';
    watermark.textContent = text;
    
    element.style.position = 'relative';
    element.appendChild(watermark);
}

// Auto-add watermarks to form fields
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    inputs.forEach(function(input) {
        if (input.placeholder) {
            addWatermark(input.parentNode, input.placeholder);
        }
    });
}); 