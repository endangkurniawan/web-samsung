/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

const Header = (() => {
  // - handleToggleMenu
  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      Scrolllable.disable();
    }
  };

  // - handleEvents
  const handleEvents = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });

    $(".js-close-showMenu").on("click", () => {
      const burgerMenu = $(".js-burger-menu");
      if (burgerMenu.hasClass("show")) {
        handleToggleMenu(burgerMenu, true);
      }
    });

    $(document).on("keyup", (e) => {
      if (e.which === 27 && $(".js-burger-menu").hasClass("show")) {
        handleToggleMenu($(".js-burger-menu"), true);
      }
    });
  };

  // - init
  const init = () => {
    handleEvents();
  };

  return {
    init,
  };
})();

export default Header;
