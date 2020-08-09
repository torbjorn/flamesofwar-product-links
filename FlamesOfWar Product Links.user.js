// ==UserScript==
// @name         Flames Of War Product Links
// @namespace    https://github.com/torbjorn
// @version      0.1
// @description  Create proper product links on the page
// @author       Torbjørn Lindahl <torbjorn.lindahl@gmail.com>
// @match        http*s://www.flamesofwar.com/online_store.aspx?*CategoryID*
// @match        http*s://www.flamesofwar.com/Default.aspx?*CategoryID*
// @grant        none
// @supportURL   https://github.com/torbjorn/flamesofwar-product-links/issues
// @license      MIT
// ==/UserScript==

// Example:
// https://www.flamesofwar.com/online_store.aspx?CategoryID=9546

(function() {
    'use strict';

    if(!jQuery) {
        console.log("jQuery not found - not fixing product links");
        return;
    }

    var url_template = 'https://www.flamesofwar.com/Default.aspx?tabid=79&ProductID=';

    jQuery("a[onclick^='ShowProductDetails(']").each( function(i,elm) {

        var a = jQuery(elm);
        var action = a.attr( "onclick" );

        var m = String(action).match( /ShowProductDetails\((\d+)\)/ )

        if( m.length > 0 && m[1] != undefined ) {
            a.removeAttr( "onclick" );
            a.attr( "href", url_template + m[1] );
        }

    });

})();
