# 📋 Quick Reference - Đồng bộ History

## ✅ Quy trình chuẩn (4 bước)

### Ở nhà:

```bash
# Bước 1: Làm bài thi (history.json tự động cập nhật)

# Bước 2: Commit và push
git add backend/data/history.json
git commit -m "Update history after practice test"
git push
```

### Ở công ty:

```bash
# Bước 3: Pull code
git pull

# Bước 4: Restart container (KHÔNG cần --build)
docker-compose restart backend
```

## 🎯 Khi nào cần làm gì?

| Tình huống                | Lệnh cần chạy                                 | Lý do                          |
| ------------------------- | --------------------------------------------- | ------------------------------ |
| **Sync history**          | `docker-compose restart backend`              | File data được mount trực tiếp |
| **Thay đổi code Python**  | `docker-compose up -d --build backend`        | Cần rebuild image              |
| **Thay đổi dependencies** | `docker-compose up -d --build`                | Cần cài lại packages           |
| **Container chưa chạy**   | `docker-compose up -d`                        | Khởi động containers           |
| **Container bị lỗi**      | `docker-compose down && docker-compose up -d` | Reset hoàn toàn                |

## ⚡ Lệnh nhanh

```bash
# Sync history (chạy ở công ty sau khi pull)
docker-compose restart backend

# Kiểm tra container đang chạy
docker-compose ps

# Xem logs nếu có lỗi
docker-compose logs backend

# Xem nội dung history
cat backend/data/history.json | jq '.'
```

## ❌ Sai lầm thường gặp

| ❌ SAI                                            | ✅ ĐÚNG                           |
| ------------------------------------------------- | --------------------------------- |
| `docker-compose up -d --build` (khi sync history) | `docker-compose restart backend`  |
| `docker-compose down` (mất data tạm)              | `docker-compose restart backend`  |
| Quên commit history.json                          | Luôn commit sau khi làm bài       |
| Push mà không pull trước                          | Pull trước, merge conflict nếu có |

## 🔍 Debug checklist

Nếu history không sync:

- [ ] Đã pull code chưa? (`git pull`)
- [ ] File có trong Git chưa? (`git ls-files backend/data/history.json`)
- [ ] Container đã restart chưa? (`docker-compose restart backend`)
- [ ] Có lỗi permission không? (`ls -la backend/data/`)
- [ ] Container có chạy không? (`docker-compose ps`)

## 💡 Tips

1. **Alias hữu ích:**

   ```bash
   # Thêm vào ~/.zshrc hoặc ~/.bashrc
   alias sync-history="git pull && docker-compose restart backend"
   alias push-history="git add backend/data/history.json && git commit -m 'Update history' && git push"
   ```

2. **Git hook tự động:**
   Tạo file `.git/hooks/post-merge`:

   ```bash
   #!/bin/sh
   # Auto restart backend after pull
   if git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD | grep --quiet "backend/data/history.json"; then
       echo "History updated, restarting backend..."
       docker-compose restart backend
   fi
   ```

   Sau đó: `chmod +x .git/hooks/post-merge`

---

**Nhớ:** Chỉ cần `restart`, KHÔNG cần `--build` khi sync history! 🚀
