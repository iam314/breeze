  // 1. This code loads the Youtube IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 2. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube_video', {
      height: '720',
      width: '1280',
      videoId: 'iyqsolL0USo',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 3. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      $("#splash_screen").show()
      $("#youtube_video_parent").hide()
    }
  }

  $(document).ready(function() {

    $("#splash_screen").click(function(event) {
      $("#splash_screen").hide();
      $("#youtube_video_parent").show();

      player.playVideo();

      event.preventDefault();
    });

  });
