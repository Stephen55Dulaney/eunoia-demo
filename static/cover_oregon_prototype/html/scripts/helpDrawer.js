/* =============================================================================
/* ===== DOCUMENT INFO  ========================================================
/* =============================================================================
 * ===== NAME:  helpDrawer.js
 * ===== VERSION: v0.1
 * ===== UPDATED: 8/14/2013
 * ===== AUTHOR: Sean Monteverdi
 * ===== CLIENT: Oregon Health Insurance Exchange (OR-HIX)
 ============================================================================== */


//==== Help Drawer ======================================== //

function openHelpPanelDefault(){
    var bodyContent         = $( '#modalTemplate' );
    var bodyContentWidth    = bodyContent.width();
    var panel               = $( '.help-panel' );
    var panelWidth          = panel.width();
    var panelHeight         = panel.height();
    var offsetContent       = bodyContent.offset();
    var offsetPanel         = offsetContent.left + bodyContentWidth - panelWidth;
    var panelTop            = 150;
 
    panel.css({ 'left'    : offsetPanel,
                'top'     : panelTop
              }).fadeIn(200);
 
  $(window).resize(function() {
        var bodyContentWidth    = bodyContent.width();
        var offsetContent       = bodyContent.offset();
        var offsetPanel         = offsetContent.left + bodyContentWidth;
        panel.css({ 'left' : offsetPanel - panelWidth });
      });
}
 
function helpPanelButtonClose ()  {
  $( '.close-help' ).click(function(){
    closeHelpPanel();
  });
}
 
function closeHelpPanel(){
    $( '.help-panel' ).fadeOut(200);
}
