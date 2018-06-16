# [WIP] はてなブログの AtomPub を WSSE 認証 + node.js を使って操作しやすくするやつ

## 使い方

* `config-sample.json` を参考に `config.json` を作成する

### getEntry()

記事の取得

```js
const { getEntry } = require('./index');
console.log(getEntry().then((res) => console.log(res)));
```

### postEntry()

* 記事の追加
* 詳細は [はてなブログAtomPub](http://developer.hatena.ne.jp/ja/documents/blog/apis/atom) 内の `ブログエントリの投稿` を参照

```js
postEntry(options).then(() => console.log('done!'));
```

#### Options

* `title`(default: `タイトル`):
* `author`(default: `name`):
* `type`(default: `text/x-markdown`):
* `content`(default: `コンテンツ`):
* `updated`(default: 現在時刻):
* `category`(default: ''):
: `draft`(deafult: `yes`):
