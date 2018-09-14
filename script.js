var commentlist = document.querySelector(".comment-list");
var send = document.querySelector(".send");

send.addEventListener("click", function() {
    var html = commentlist.innerHTML;
    var textarea = document.querySelector(".comment");
    html += "<li><small><a href='../users/2.html'>tor_ragnarok</a></small><small> ∙ 3 hours ago</small><p>" + textarea.value + "</p></li>";
    commentlist.innerHTML = html;
    textarea.value = "";
});