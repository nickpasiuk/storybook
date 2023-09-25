/*
  * Show More jQuery Plugin
  * Author: Jason Alvis
  * Author Site: http://www.jasonalvis.com
  * License: Free General Public License (GPL)
  * Version: 1.0.4
  * Date: 21.05.2013
  */
(function(a) {
  a.fn.showMore = function(b) {
    var c = {
      speedDown:300,
      speedUp:300,
      height:"265px",
      showText:"Show",
      hideText:"Hide"
    };

    return this.each(function() {
      var e=a(this),d=e.height();

      if(d>parseInt(b.height)) {
        e.wrapInner('<div class="showmore_content" />');
        e.find(".showmore_content").css("height", b.height);
        e.append('<div class="showmore_trigger"><button aria-expanded="false" class="button--show-more more" aria-controls="'+b.ariaControls+'" >'+b.showText+'</button> </div>');

        e.find(".showmore_trigger").on("click", ".button--show-more", function() {

          a(this)[0].className = a(this)[0].className == 'button--show-more more' ? 'button--show-more less' : 'button--show-more more';

          let ariaHidden = a(this).parent().parent().children('.showmore_content').children(`#${b.ariaControls}`)[0].ariaHidden;
          let ariaHiddenToggled = ariaHidden == 'false' ? 'true' : 'false';
          a(this).parent().parent().children('.showmore_content').children(`#${b.ariaControls}`)[0].ariaHidden = ariaHiddenToggled
          
          let ariaExpandedButton = a(this)[0].ariaExpanded = a(this)[0].ariaExpanded;
          let ariaExpandedButtonToggled = ariaExpandedButton == 'true' ? 'false' : 'true';
          a(this)[0].ariaExpanded = a(this)[0].ariaExpanded = ariaExpandedButtonToggled;

          if (ariaExpandedButton == 'false') {
            a(this).parent().prev().animate({height:d},b.speedDown);
            a(this)[0].innerText = b.hideText;
            window.location.href='#content-logos-group-skip-link';
          }
          else {
            a(this).parent().prev().animate({height:b.height},b.speedUp);
            a(this)[0].innerText = b.showText;
          }

        });
      }
    })
  }
})(jQuery);


(function ($) {
  'use strict';

  Drupal.behaviors.readMoreLogos = {
    attach(context) {

      const logosGroup = $(context).find('.m-logos-group').once();

      const activeLanguage = document.location.pathname.split('/')[1];

      let showTextJS = activeLanguage == 'fr' ? 'Voir plus' : 'Show more' ;
      let hideTextJS = activeLanguage == 'fr' ? 'Afficher moins' : 'Show less';


      let ariaLabelJS = activeLanguage == 'fr' ? 'de Logos' : 'Logos';

      let contentID = $(context).find('.m-logos-group__wrapper').once()[0].id;

      $(document).ready(function() {
     	
        $(logosGroup).showMore({
          speedDown: 300,
          speedUp: 300,
          height: '360px',
          showText: showTextJS,
          hideText: hideTextJS,
          ariaLabel: ariaLabelJS,
          ariaControls: contentID,
        });
      });

    }
  };
})(jQuery);