# API ドキュメント

## エンドポイント一覧

### 認証

#### POST `/api/auth/signin`
ユーザーのログイン

**リクエストボディ:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**レスポンス:**
```json
{
  "ok": true
}
```

### 生徒データ

#### GET `/api/students/[id]`
生徒情報を取得

**認証:** 必須（生徒は自分のデータのみアクセス可能）

**レスポンス:**
```json
{
  "data": {
    "id": "string",
    "userId": "string",
    "name": "string",
    "grade": 1,
    "class": "1-A",
    "avatar": "string | null",
    "user": {
      "email": "string",
      "role": "STUDENT"
    }
  }
}
```

#### GET `/api/students/[id]/growth`
成長データを取得

**認証:** 必須（生徒は自分のデータのみアクセス可能）

**レスポンス:**
```json
{
  "data": [
    {
      "id": "string",
      "studentId": "string",
      "date": "2024-01-01T00:00:00.000Z",
      "challenge": 70,
      "persistence": 80,
      "completion": 90
    }
  ]
}
```

#### GET `/api/students/[id]/journal`
ジャーナルエントリ一覧を取得

**認証:** 必須（生徒は自分のデータのみアクセス可能）

**レスポンス:**
```json
{
  "data": [
    {
      "id": "string",
      "studentId": "string",
      "date": "2024-01-01T00:00:00.000Z",
      "content": "string",
      "tags": ["tag1", "tag2"],
      "student": {
        "id": "string",
        "name": "string"
      }
    }
  ]
}
```

#### POST `/api/students/[id]/journal`
ジャーナルエントリを作成

**認証:** 必須（生徒は自分のデータのみ作成可能）

**リクエストボディ:**
```json
{
  "date": "2024-01-01",
  "content": "今日の記録内容（10文字以上5000文字以内）",
  "tags": ["tag1", "tag2"]
}
```

**レスポンス:**
```json
{
  "data": {
    "id": "string",
    "studentId": "string",
    "date": "2024-01-01T00:00:00.000Z",
    "content": "string",
    "tags": ["tag1", "tag2"]
  }
}
```

### 教師データ

#### GET `/api/teachers/students`
生徒一覧を取得

**認証:** 必須（教師のみ）

**レスポンス:**
```json
{
  "data": [
    {
      "id": "string",
      "userId": "string",
      "name": "string",
      "grade": 1,
      "class": "1-A",
      "user": {
        "email": "string",
        "role": "STUDENT"
      }
    }
  ]
}
```

## エラーレスポンス

すべてのエンドポイントは以下の形式でエラーを返します：

```json
{
  "error": {
    "message": "エラーメッセージ",
    "code": "ERROR_CODE"
  }
}
```

### エラーコード

- `VALIDATION_ERROR` - バリデーションエラー（400）
- `UNAUTHORIZED` - 認証が必要（401）
- `FORBIDDEN` - 権限がありません（403）
- `NOT_FOUND` - リソースが見つかりません（404）
- `INTERNAL_SERVER_ERROR` - サーバーエラー（500）

## 認証

すべてのAPIエンドポイントは認証が必要です。リクエストヘッダーにセッションCookieを含める必要があります。

NextAuth.jsのセッション管理を使用しているため、ログイン後は自動的にセッションが維持されます。

