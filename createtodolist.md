## What I learned

1. useState

```ts
const [text, setText] = useState<string>("initializingValue");
```

state は現在の状態を表すもの．text は現在の状態，setText は更新する関数，useState(初期値)で初期値を設定している． 2.
onChange

2. onChange

```ts
onChang = {(element)
=>
setText(element.target.value)
}
```

onChangeイベントは，フォーム内のelementの値(text)がユーザーの操作によって変更された際にelement.target.valueに受け渡すイベントである．

3. onClick

```ts
<button onClick = {onClickAddList} > AddtoList < /button>
```
onClickイベントは，buttonに関数(onClickAddList)を紐付け，クリックする度に関数を実行するようにする．
