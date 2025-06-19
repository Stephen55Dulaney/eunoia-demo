/* jQuery DC Mega Menu 1.2 - Placeholder for Cover Oregon Prototype */
console.log('jQuery DC Mega Menu 1.2 loaded');

// Basic mega menu functionality
if (window.jQuery) {
    (function($) {
        $.fn.dcMegaMenu = function(options) {
            var defaults = {
                speed: 300,
                effect: 'fade',
                event: 'hover'
            };
            
            var settings = $.extend({}, defaults, options);
            
            return this.each(function() {
                var $this = $(this);
                var $menuItems = $this.find('.mega-menu-item');
                
                $menuItems.each(function() {
                    var $item = $(this);
                    var $submenu = $item.find('.mega-submenu');
                    
                    if ($submenu.length > 0) {
                        if (settings.event === 'hover') {
                            $item.hover(
                                function() {
                                    $submenu.stop().fadeIn(settings.speed);
                                },
                                function() {
                                    $submenu.stop().fadeOut(settings.speed);
                                }
                            );
                        } else if (settings.event === 'click') {
                            $item.click(function(e) {
                                e.preventDefault();
                                $submenu.stop().fadeToggle(settings.speed);
                            });
                        }
                    }
                });
            });
        };
    })(jQuery);
} 