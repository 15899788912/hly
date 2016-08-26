/**
 * Created by Administrator on 2016/8/19.
 */

window.nav_menus = (function(win,doc){
  // init variable  and store dom element.
  var dom_el = $(".nav-menus");
  var right = dom_el.find(".right");
  var title = dom_el.find(".nav_title");
  var left = dom_el.find(".left");
  var arrow = dom_el.find(".nav_arrow");
  var nav_status = false;
  var init_num = 0;

  //this is for offset().
  $(document).ready(function(){
    initClass();
    dom_el.on("click",function(e){
      var target = e.target || e.toElement;
      //展开,收缩菜单
      if (target.className === "right" || target.className.indexOf("nav_arrow") >=0) {
        if (!nav_status){  //展开
          dom_el.addClass("menus_box");
          left.removeClass("line").addClass("box");
          //left.attr("style","height:150px");
          //dom_el.attr("style","overflow:hidden;");
          arrow.removeClass("nav_down");
          addFloat(left,"a","fl");
          nav_status = true;
        } else {
          dom_el.removeClass("menus_box");
          left.removeClass("box").addClass("line");
          //left.attr("style","height:100px");
          //dom_el.attr("style","overflow:hidden;");
          arrow.addClass("nav_down");
          clearFloat(left,"a","fl");
          nav_status = false;
        }
      }
      //链接状态,不同页面要保存状态. change 选中的样式.
      if(target.nodeName ==="A" && target.className.indexOf("nav_nav") >= 0) {
        window.localStorage.setItem("nav_selected",target.id);
        activeClass(left,"a","active",target);
      }
      $('.video').trigger('pause');
      $('.video_player').hide();
    })
  })

  /**
   * @desp//根据以前链接的状态，改变链接的样式.  根据当前location的path和a 列表进行比较，如果a 的href和path相等则active.
   */
  function initClass(){
    var path = (window.location.pathname || "");
    path = path.substr(0,path.length-1);            //去掉 类似/basket/的最后一个/
    var store_id = window.localStorage.getItem("nav_selected");
    var focusItem = 0;
    var t = "";
    var scrollLeft = 0;

    // if 默认index.html， else 其他匹配激活.
    if (path === "" || path.indexOf("index.htm")>=0) {
      left.find("a").each(function(index,item){
        if (item.id === "nav3") {
          $(item).addClass("active");
        } else {
          $(item).removeClass("active");
        }
      });
    } else {                                                      // 因为nav5,nav1,nav2等还有其他内嵌子页面，在返回的时候需要特别处理下.
      left.find("a").each(function(index,item){
        if (item.href.indexOf(path)>=0) {
          $(item).addClass("active");
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
        } else {
          $(item).removeClass("active");
        }
        /**
        if(store_id === "nav5"  && item.id === "nav5") {          // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else if(store_id === "nav1" && item.id === "nav1") {   // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else if(store_id === "nav2" && item.id === "nav2") {   // 数据跳转返回的时候特殊处理.
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
          $(item).addClass("active");
        } else  if (item.href.indexOf(path)>=0) {
          $(item).addClass("active");
          focusItem = item.id.substr(3,3);
          scrollLeft = item.offsetLeft;
        } else {
          $(item).removeClass("active");
        }
         **/
      });
      // 滚动的计算.
      var viewWidth = left.width();
      var toLeft = scrollLeft -( viewWidth /2) ;
       left.animate({scrollLeft:toLeft}, 500,"linear")
    }

  }

  /**
   * @desp 获取某容器下的某元素的offsetLeft.
   */
  function getOffsetLeft(obj){
    var left = obj.offsetLeft;
    if (obj.offsetParent !== null) {
      left += getOffsetLeft(obj.offsetParent);
    }
    return left;
  }

  /**
   * @desp 给父容器下的子元素添加浮动.
   * @param parent
   */
  function addFloat(parent,subtag,className){
    parent.find(subtag).each(function(index,item){
      $(item).addClass(className);
    })
  }

  /**
   * @desp 给父容器下的子元素清除浮动
   */
  function clearFloat(parent,subtag,className){
    parent.find(subtag).each(function(index,item){
      $(item).removeClass(className);
    })
  }

  /**
   * @desp 选中的样式.
   */
  function activeClass(parent,subtag,className,target){
    parent.find(subtag).each(function(index,item){
      if ($(item).attr("id") === target.id) {
        $(item).addClass(className);
      } else {
        $(item).removeClass(className);
      }
    })
  }
})(window,document);
