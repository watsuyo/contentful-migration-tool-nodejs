本ツールは、Contentful 上にある複数のスペースにあるコンテンツを、新たな1つのスペースに移行するためのCLIツールです。

この Readme では、本ツールの使い方について説明します。

1. 実行環境
    1. 本ツールは、Node.js で実装されています。ツールを実行するためには、実行する環境に Node.js をインストールする必要があります。
        
        ```bash
        $ node -v
        v20.11.1
        ```
        
    2. もし Node.js のバージョンが確認できなかった場合、以下の手順に従って Node.js をインストールしてください
    
    [Node.js — Download Node.js®](https://nodejs.org/en/download/package-manager)
    
2. 実行方法
    1. 以下のコマンドもしくは、`Download ZIP` からソースコードをローカルにダウンロード
        
        ```bash
        $ git clone  
        ```
        
    2. 以下のコマンドを実行して、サーバーを起動する
        
        ```bash
        $ pnpm run dev
        or
        $ npm run dev
        or
        $ yarn run dev
        ```
        
    3. CLIからAPIトークンとスペースIDを要求されるため、それらを入力
    4. 必要な情報を入力すると、/expoted フォルダへコンテンツがエクスポートされ、入力したスペースへのインポートが開始される
        1. エクスポートされたファイル一覧と、インポートされたファイル一覧が、CLIに表示される

## What is this?

This is a command-line interface (CLI) tool designed to simplify the process of exporting content from one specific space and importing it into another specific space on Contentful. With just a few simple commands, you can seamlessly transfer your content between spaces hassle-free. Let's get started!


## How to use

1. Clone the repository
2. Run the following command to install the required packages

```bash
pnpm install
```

3. Run the following command to start the server

```bash
pnpm dev
```

4. CLI will ask for your management token and space ID
5. After providing the required information, the CLI will export the content from the space and import it to the space with the provided space ID
6. The CLI will show the exported file and the imported message
7. You can check the space to see the imported content

## Contact

watsuyo - [@watsuyo_2](https://bit.ly/3gzFAfa)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DONATE -->
## Donate
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bit.ly/3Jpi4h7)
