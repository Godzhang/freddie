(() => {
  function getinfoSuc(data) {
    let { params } = data;
    let szPois = [];
    for (let url in params) {
      let localSearch = new BMap.LocalSearch(map);
      localSearch.setSearchCompleteCallback((url, infos) => {
        let hasShowUrls = [];
        return searchResult => {
          // for (let j = 0; j < hasShowUrls.length; j++) {
          //   if (url === hasShowUrls[j]) return
          // }
          if (hasShowUrls.includes(url)) return;
          hasShowUrls.push(url);
          let poi = searchResult.getPoi(0);
          if (!poi) return;
          let isHasPoi = false;
          for (var i = 0; i < szPois.length; i++) {
            let cur = szPois[i];
            if (
              cur.point.lng === poi.point.lng &&
              cur.point.lat === poi.point.lat
            ) {
              isHasPoi = true;
              break;
            }
          }
          // 同一个小区有多个房子
          if (isHasPoi) {
            let point = new BMap.Point(poi.point.lng, poi.point.lat);
            szPois[i].urls.push(url);
            szPois[i].imgs.push(infos.img);
            szPois[i].marker.addEventListener("click", p => {
              return () => {
                // 点击房屋图标后弹出的信息框
                let opts = {
                  width: 200,
                  height: 200,
                  title: poi.title,
                  enableMessage: true
                };
                let message = "";
                p.urls.forEach((item, index) => {
                  message += `<div><a href="+item+"><img title='点击访问' class='img-responsive showImg' alt='Responsive image' src="${
                    p.imgs[index]
                  }"></img></a></div>`;
                });
                let infoWindow = new BMap.InfoWindow(message, opts);
                map.openInfoWindow(infoWindow, point);
              };
            })(szPois[i]);
          } else {
            var point = new BMap.Point(poi.point.lng, poi.point.lat);

            var myIcon = new BMap.Icon(
              "../image/house.png",
              new BMap.Size(30, 30),
              {}
            );
            // 创建标注对象并添加到地图
            var marker = new BMap.Marker(point, { icon: myIcon });
            map.addOverlay(marker);

            marker.addEventListener("click", function() {
              /*点击房屋图标后弹出的信息框*/
              var opts = {
                width: 200,
                height: 200,
                title: poi.title,
                enableMessage: true
              };
              var infoWindow = new BMap.InfoWindow(
                "<a href=" +
                  url +
                  "><img title='点击访问' class='img-responsive showImg' alt='Responsive image' src=" +
                  infos.img +
                  "></img></a>",
                opts
              );
              map.openInfoWindow(infoWindow, point); //开启信息窗口
            });

            poi.marker = marker;
            poi.urls = [url];
            poi.imgs = [infos.img];
            szPois.push(poi);
          }
        };
      })(url, params[url]);
      localSearch.search(params[url].location);
    }
  }

  function getInfosErr(e) {
    alert("获取数据失败");
  }

  const map = new BMap.Map("container");
  map.centerAndZoom("北京", 12);
  map.enableScrollWheelZoom();
  map.enableContinuousZoom();

  let geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(
    function(r) {
      if (this.getStatus() === BMAP_STATUS_SUCCESS) {
        let mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        mk.setAnimation(BMAP_ANIMATION_BOUNCE);
      } else {
        alert(`failed ${this.getStatus()}`);
      }
    },
    { enableHighAccuracy: true }
  );

  $.ajax({
    type: "post",
    url: "/rental/getInfos",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify({ params: null }),
    success: getinfoSuc,
    async: true,
    error: getInfosErr
  });
})();
