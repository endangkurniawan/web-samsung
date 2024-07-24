/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
----------------------------
----------------------------------------------------- */

const Footer = (() => {
  // handleAccordion
  const handleAccordion = () => {
    $(".js-footer-accordion .footer__nav__title").on("click", (e) => {
      if ($(window).width() <= 575.8) {
        const _this = $(e.currentTarget);
        const _navBox = _this.parents(".footer__nav__box");

        // Tutup semua menu lainnya
        $(".js-footer-accordion .footer__nav__box")
          .not(_navBox)
          .find(".footer__menu")
          .slideUp(300);
        $(".js-footer-accordion .footer__nav__box")
          .not(_navBox)
          .removeClass("footer__nav--active");
        $(".js-footer-accordion .footer__nav__title")
          .not(_this)
          .removeClass("active");

        // Buka atau tutup menu yang diklik
        if (_this.hasClass("active")) {
          _navBox.find(".footer__menu").slideUp(300);
          _navBox.removeClass("footer__nav--active");
          _this.removeClass("active");
        } else {
          _navBox.find(".footer__menu").slideDown(300);
          _navBox.addClass("footer__nav--active");
          _this.addClass("active");
        }
      }
    });
  };

  // handlePaddingBottomMain
  const handlePaddingBottomMain = () => {
    if ($(window).width() > 767.96) {
      const _heightFooter = $(".footer").innerHeight();
      $(".js-main-site").css("padding-bottom", `${_heightFooter}px`);
    } else {
      $(".js-main-site").removeAttr("style");
    }
  };

  // - init
  const init = () => {
    $(document).ready(() => {
      if ($(".footer").length) {
        handleAccordion();
        handlePaddingBottomMain();
      }
    });
  };

  return {
    init,
    setPaddingBottomMain: handlePaddingBottomMain,
  };
})();

export default Footer;
