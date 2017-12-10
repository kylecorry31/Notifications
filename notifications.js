var _notificationPane;

function createNotification(title, desc, timeout, delay){
  if(!timeout){
    timeout = 2;
  }
  if(!_notificationPane){
    _notificationPane = document.createElement('div');
    _notificationPane.classList.add('notificationPane');
    document.body.appendChild(_notificationPane);
  }
  var notification = document.createElement('div');
  notification.classList.add('notification');
  notification.addEventListener("click", function(){
   _notificationPane.removeChild(notification);
 });
  notification.innerHTML = '<h1 class="notification-title">'+ title + '</h1><p class="notification-desc">' + desc + '</p>';
  if(delay){
    setTimeout(function(){
      _displayNotification(notification, timeout);
    }, delay * 1000);
  } else {
    _displayNotification(notification, timeout);
  }
}

function _displayNotification(notification, timeout){
  _notificationPane.appendChild(notification);
  setTimeout(function(){
    _notificationPane.removeChild(notification);
  }, timeout * 1000);
}
