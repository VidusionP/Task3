!function(n,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(n="undefined"!=typeof globalThis?globalThis:n||self).EmblaCarouselAutoplay=o()}(this,(function(){"use strict";var n={delay:4e3,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1};return function(o,e){var t,i=Object.assign({},n,o),r=i.stopOnInteraction,a=i.stopOnMouseEnter,s=i.stopOnLastSnap,u=i.delay,f=!1,p=0;function l(){c(),requestAnimationFrame((function(){p=window.setTimeout(m,u)}))}function c(){p&&(window.clearTimeout(p),p=0)}function d(){c(),a&&f||r||l()}function m(){var n=t.internalEngine().index;(n.get()!==n.max||!s)&&(t.canScrollNext()?t.scrollNext():t.scrollTo(0),l())}return{name:"Autoplay",options:i,init:function(n){var o=(t=n).internalEngine().eventStore,i=t.rootNode(),r=e&&e(i)||i;t.on("init",l),t.on("pointerDown",c),t.on("pointerUp",d),a&&(o.add(r,"mouseenter",(function(){f=!0,c()})),o.add(r,"mouseleave",(function(){f=!1,d()})))},destroy:function(){t.off("init",l),t.off("pointerDown",c),t.off("pointerUp",d),f=!1,c()},play:l,stop:c,reset:d}}}));
