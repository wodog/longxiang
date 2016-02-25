$(function() {
  /**
   * 导航栏绑定下拉菜单事件
   */
  $('.head-nav >ul >li').hover(function(e) {
    $(e.currentTarget).children('ul').toggle();
  });
});