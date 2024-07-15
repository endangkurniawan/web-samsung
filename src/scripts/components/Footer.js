/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {
  // hanlePaddingBottomMain
  const handlePaddingBottomMain = () => {
    if ($(window).width() > 575.5) {
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
