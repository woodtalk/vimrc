;(function() {
    var content = document.querySelector('article.post-content');
    content.innerHTML = content.innerHTML.replace(/\[\[(.+?)\]\]\{(.+?)\}/g, '<a href="wiki/$1">$2</a>');
    content.innerHTML = content.innerHTML.replace(/\[\[(.+?)\]\]/g, '<a href="wiki/$1">$1</a>');
})();
