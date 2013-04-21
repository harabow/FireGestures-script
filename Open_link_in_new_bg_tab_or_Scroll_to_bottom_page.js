/*
 * [ハイブリット] リンクを新しいタブで開く（背面のタブ）／ページの末尾へスクロール
 */

// (1) If you started gesture from a link, do 'Open Link in New Tab (Background)'
var srcNode = FireGestures.sourceNode;
var linkURL = FireGestures.getLinkURL(srcNode);
if (linkURL) {
  FireGestures._performAction(event, "FireGestures:OpenLinkInBgTab");
} else {
// (2) Else, do 'Scroll to Bottom Page'
  goDoCommand("cmd_scrollBottom");
}
