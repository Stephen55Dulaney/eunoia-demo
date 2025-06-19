/* Widgets.js - Placeholder for Cover Oregon Prototype */
console.log('Widgets.js loaded');

// Basic widget functionality
var CoverOregonWidgets = {
    // Initialize all widgets
    init: function() {
        this.initTooltips();
        this.initModals();
        this.initAccordions();
        this.initTabs();
    },
    
    // Tooltip functionality
    initTooltips: function() {
        var tooltips = document.querySelectorAll('[data-tooltip]');
        tooltips.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                var tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = this.getAttribute('data-tooltip');
                tooltip.style.cssText = 'position: absolute; background: #333; color: white; padding: 5px; border-radius: 3px; font-size: 12px; z-index: 1000;';
                
                document.body.appendChild(tooltip);
                
                var rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
                
                this._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.remove();
                    this._tooltip = null;
                }
            });
        });
    },
    
    // Modal functionality
    initModals: function() {
        var modalTriggers = document.querySelectorAll('[data-modal]');
        modalTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                var modalId = this.getAttribute('data-modal');
                var modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block';
                }
            });
        });
        
        // Close modals
        var modalCloses = document.querySelectorAll('.modal-close, .modal-overlay');
        modalCloses.forEach(function(close) {
            close.addEventListener('click', function() {
                var modal = this.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });
    },
    
    // Accordion functionality
    initAccordions: function() {
        var accordions = document.querySelectorAll('.accordion');
        accordions.forEach(function(accordion) {
            var headers = accordion.querySelectorAll('.accordion-header');
            headers.forEach(function(header) {
                header.addEventListener('click', function() {
                    var content = this.nextElementSibling;
                    var isOpen = content.style.display === 'block';
                    
                    // Close all other sections
                    accordion.querySelectorAll('.accordion-content').forEach(function(section) {
                        section.style.display = 'none';
                    });
                    
                    // Toggle current section
                    if (!isOpen) {
                        content.style.display = 'block';
                    }
                });
            });
        });
    },
    
    // Tab functionality
    initTabs: function() {
        var tabContainers = document.querySelectorAll('.tabs');
        tabContainers.forEach(function(container) {
            var tabs = container.querySelectorAll('.tab');
            var contents = container.querySelectorAll('.tab-content');
            
            tabs.forEach(function(tab, index) {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs and contents
                    tabs.forEach(function(t) { t.classList.remove('active'); });
                    contents.forEach(function(c) { c.classList.remove('active'); });
                    
                    // Add active class to current tab and content
                    this.classList.add('active');
                    if (contents[index]) {
                        contents[index].classList.add('active');
                    }
                });
            });
            
            // Show first tab by default
            if (tabs.length > 0) {
                tabs[0].click();
            }
        });
    }
};

// Initialize widgets when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    CoverOregonWidgets.init();
}); 