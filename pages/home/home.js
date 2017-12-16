// pages/home/home.js
const imageAddress = "../../images/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        "title": "合肥市蜀山区",
        "image": imageAddress + "address.png",
        "id":"list1"
      },
      {
        "title": "10:00-20:00",
        "image": imageAddress + "time.png",
        "id": "list2"
      },
      {
        "title": "13155463802",
        "image": imageAddress + "operator.png",
        "id": "list3"
      },
    ],

    imageList: [
      imageAddress + "1.jpeg",
      imageAddress + "2.jpeg",
      imageAddress + "3.jpeg",
      imageAddress + "4.jpeg",
      imageAddress + "5.jpeg",
      imageAddress + "6.jpeg",
      imageAddress + "7.jpeg",
      imageAddress + "8.jpeg",
      imageAddress + "9.jpeg",
    ],
    imageWidth: "87px",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var currentPage = this;
    wx.getSystemInfo({
      success: function(res) {
        var width = res.windowWidth;
        var imageWidth = (width-44)/3;
        currentPage.setData({
          imageWidth: imageWidth + "px",
        });
        console.log(currentPage.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  touchCell: function(e) {
    var cellId = e.currentTarget.id;
    if (cellId == "list1") {
    } else if (cellId == "list2") {

    }else {

      this.callMeMaybe()
    }
  },

  /**
   * 打电话
   */
  callMeMaybe: function() {
    wx.makePhoneCall({
      phoneNumber: '13155463802',
    })
  },

  /**
   * 打开地点
   */
  showLocation: function() {

  },


  /**
   * 显示图片
   */
  showImage: function (e) {
    var currentPage = this;
    var imageUrl = e.currentTarget.dataset.src;
    wx.previewImage({
      current: imageUrl,
      urls: currentPage.data.imageList,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})