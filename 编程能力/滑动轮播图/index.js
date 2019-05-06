$(document).ready(function () {
  let imgRoot = './img/';
  let imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  let defaultLeft = parseInt($('#slideBanner .img_inner_box').css('left'));
  let imgWidth = parseInt($('#slideBanner .img_inner_box').css('width'));
  let store = {
    currentIndex: ""
  };
  // 定义store的getter与setter
  Object.defineProperty(store, 'currentIndex', {
    get: function () {
      return currentIndex;
    },
    set: function (newValue) {
      // 如果新的索引值为负数，则将其总动引导为数组的最后一个元素
      if (newValue < 0) {
        newValue = imgArr.length - 1;
      }
      // 如果新的索引值超过数组的长度，则将其总动引导为数组的第一个元素
      if (newValue > imgArr.length - 1) {
        newValue = 0;
      }
      currentIndex = newValue;
      renderImg(currentIndex);
    }
  })


  // 初始化
  store.currentIndex = 0;


  // 由坐标渲染图片位置
  function renderImg(currentIndex) {
    let jqImg = $('#slideBanner .img_inner_box img');
    jqImg.eq(0).attr('src', imgRoot + imgArr[currentIndex == 0 ? imgArr.length - 1 : currentIndex - 1]);
    jqImg.eq(1).attr('src', imgRoot + imgArr[currentIndex]);
    jqImg.eq(2).attr('src', imgRoot + imgArr[currentIndex == imgArr.length - 1 ? 0 : currentIndex + 1]);
    // 规整位置（因为永远只显示位于中心的图片）
    $('#slideBanner .img_inner_box').css('left', defaultLeft + 'px');
  }


  $('#slideBanner img').bind('dragstart', function () {
    return false;
  })


  // 当鼠标在图片域内进行操作时
  $('#slideBanner .img_box').on('mousedown', function (e) {
    // 鼠标点击图片时相对于整个屏幕的X轴坐标
    let downX = e.clientX;
    let slide = 0;

    /**
     * 判断滑动后图片的停留位置
     */
    function judgeImgPosition(e) {
      // 鼠标松开时相对于整个屏幕的X轴坐标
      let upX = e.clientX;
      // 鼠标的滑动距离，向左滑动为负值，向右滑动为正值
      slide = upX - downX;
      if (Math.abs(slide) > imgWidth / 2) {
        // 如果鼠标滑动的距离大于图片的图片宽度的一半,就滑动成功
        if (slide < 0) {
          // 鼠标向左滑动，拨向下一张图片
          $('#slideBanner .img_inner_box').animate({ left: defaultLeft - imgWidth }, 200, function () {
            store.currentIndex++;
          });
        } else {
          // 鼠标向右滑动，拨向上一张图片
          $('#slideBanner .img_inner_box').animate({ left: 0 }, 200, function () {
            store.currentIndex--;
          });
        }
        // 规正位置
      } else {
        // 滑动失败，图片位置返回原图
        $('#slideBanner .img_inner_box').animate({ left: defaultLeft }, 200);
      }
    }


    $(this).on('mousemove', function (e) {
      let currentX = e.clientX;
      // slide记录了鼠标的滑动距离，负值代表鼠标向左滑动，正值代表鼠标向右滑动
      slide = currentX - downX;
      // 当鼠标滑动时，由鼠标的滑动距离和原始偏移量，重新计算图片的偏移量
      let newPositionLeft = defaultLeft + slide;
      $('#slideBanner .img_inner_box').css('left', newPositionLeft + 'px');
    })


    $(this).on('mouseup', function (e) {
      judgeImgPosition(e);
      $(this).unbind('mousemove');
      $(this).unbind('mouseleave')
      $(this).unbind('mouseup');
    })


    $(this).on('mouseleave', function (e) {
      judgeImgPosition(e);
      $(this).unbind('mousemove');
      $(this).unbind('mouseup');
      $(this).unbind('mouseleave');
    })
    
  })





})

