/* jQuery Mega Menu - Placeholder for Cover Oregon Prototype */
console.log('jQuery Mega Menu loaded');

// Basic mega menu functionality
if (window.jQuery) {
    (function($) {
        $.fn.megaMenu = function(options) {
            var defaults = {
                animation: 'fade',
                speed: 300,
                event: 'hover',
                delay: 0
            };
            
            var settings = $.extend({}, defaults, options);
            
            return this.each(function() {
                var $this = $(this);
                var $menuItems = $this.find('.mega-menu-item');
                
                $menuItems.each(function() {
                    var $item = $(this);
                    var $submenu = $item.find('.mega-submenu');
                    var timer;
                    
                    if ($submenu.length > 0) {
                        if (settings.event === 'hover') {
                            $item.hover(
                                function() {
                                    clearTimeout(timer);
                                    $submenu.stop().fadeIn(settings.speed);
                                },
                                function() {
                                    timer = setTimeout(function() {
                                        $submenu.stop().fadeOut(settings.speed);
                                    }, settings.delay);
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
        
        // Auto-initialize mega menus
        $(document).ready(function() {
            $('.mega-menu').megaMenu();
        });
    })(jQuery);
} 