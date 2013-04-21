/*
 * [ハイブリット] リンクを新しいタブで開く（前面のタブ）／ページの先頭へスクロール
 */

// (1) If you started gesture from a link, do 'Open Link in New Tab (Foreground)'
var srcNode = FireGestures.sourceNode;
var linkURL = FireGestures.getLinkURL(srcNode);
if (linkURL) {
  FireGestures._performAction(event, "FireGestures:OpenLinkInFgTab");
} else {
// (2) Else, do 'Scroll to Top Page'
  goDoCommand("cmd_scrollTop");
}
