# チームコンパス

学校と生徒をつなぐ、日々の成長記録プラットフォーム

## 概要

チームコンパスは、生徒の挑戦と成長を日常の記録として残し、教師と保護者が一緒に伴走できる学習体験を提供するWebアプリケーションです。

## 機能

- **生徒向け機能**
  - ジャーナリング記録の作成・閲覧
  - 成長指標の可視化（チャレンジする心、諦めない力、やり遂げる力）
  - 成長グラフの表示

- **教師向け機能**
  - 生徒一覧の閲覧
  - 個別生徒の詳細情報確認
  - 成長データの分析

## 技術スタック

- **フロントエンド**: Next.js 14, React 18, TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: PostgreSQL
- **ORM**: Prisma
- **認証**: NextAuth.js
- **バリデーション**: Zod
- **グラフ**: Recharts
- **テスト**: Jest, React Testing Library

## セットアップ

### 必要な環境

- Node.js 18以上
- PostgreSQL 14以上
- npm または yarn

### インストール

1. リポジトリをクローンします

```bash
git clone <repository-url>
cd Step4_koyasans
```

2. 依存関係をインストールします

```bash
npm install
```

3. 環境変数を設定します

`.env.local`ファイルを作成し、以下の変数を設定してください：

```env
DATABASE_URL="postgresql://user:password@localhost:5432/team_compass?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
NODE_ENV="development"
```

4. データベースをセットアップします

```bash
npx prisma generate
npx prisma migrate dev
```

5. 開発サーバーを起動します

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## スクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintを実行
- `npm run test` - テストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジ付きでテストを実行

## プロジェクト構造

```
Step4_koyasans/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── student/           # 生徒向けページ
│   ├── teacher/           # 教師向けページ
│   └── login/             # ログインページ
├── components/             # Reactコンポーネント
│   └── ui/                # UIコンポーネント
├── lib/                    # ユーティリティ関数
├── prisma/                 # Prismaスキーマ
├── types/                  # TypeScript型定義
└── __tests__/             # テストファイル
```

## データベーススキーマ

- **User**: ユーザーアカウント情報
- **Student**: 生徒情報
- **Teacher**: 教師情報
- **JournalEntry**: ジャーナリング記録
- **GrowthData**: 成長データ

詳細は `prisma/schema.prisma` を参照してください。

## 認証

NextAuth.jsを使用した認証システムを実装しています。

- 認証が必要なルートは自動的にログインページにリダイレクトされます
- 生徒は `/student/*` ルートにのみアクセス可能
- 教師は `/teacher/*` ルートにのみアクセス可能

## テスト

ユニットテストはJestとReact Testing Libraryを使用しています。

```bash
npm run test
```

## デプロイ

### Vercelでのデプロイ

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. データベース接続を設定
4. デプロイ

### その他のプラットフォーム

Next.jsの標準的なデプロイ手順に従ってください。

## ライセンス

このプロジェクトはプライベートプロジェクトです。

