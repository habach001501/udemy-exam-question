# 📚 Hướng dẫn đồng bộ History giữa các máy

## 🎯 Mục đích

File này giải thích cách đồng bộ lịch sử làm bài thi (`history.json`) giữa máy ở nhà và máy ở công ty thông qua Git repository.

## ✅ Cách hoạt động

### 1. **Docker Volume Mapping**

Trong `docker-compose.yml`, chúng ta đã cấu hình:

```yaml
volumes:
  - ./backend/data:/app/data
```

Điều này có nghĩa là:

- Thư mục `backend/data` trong repo được **mount trực tiếp** vào container
- Mọi thay đổi trong container sẽ **ghi ngay vào file** trong repo
- File `history.json` sẽ được **lưu trong repo**, không phải trong Docker volume riêng biệt

### 2. **Git Tracking**

File `backend/data/history.json` đã được track bởi Git:

```bash
git ls-files backend/data/history.json
# Output: backend/data/history.json
```

## 🔄 Quy trình đồng bộ

### **Tại nhà:**

1. Làm bài thi thử → History được lưu vào `backend/data/history.json`
2. Commit và push lên Git:
   ```bash
   git add backend/data/history.json
   git commit -m "Update history after practice test"
   git push
   ```

### **Tại công ty:**

1. Pull code mới nhất:

   ```bash
   git pull
   ```

2. **Nếu container đang chạy** - chỉ cần restart:

   ```bash
   docker-compose restart backend
   ```

   **Nếu container chưa chạy** - start lên:

   ```bash
   docker-compose up -d
   ```

3. ✅ History từ nhà đã có sẵn!

### ⚠️ **Lưu ý quan trọng:**

- **KHÔNG CẦN `--build`** khi chỉ sync history
- File `history.json` được mount trực tiếp, container sẽ đọc file mới nhất
- Chỉ cần `--build` khi thay đổi code hoặc dependencies

## 📝 Ví dụ cụ thể

### Scenario: Làm bài thi ở nhà

```bash
# Ở nhà
cd /path/to/UDM_exam
docker-compose up -d
# Làm bài thi → history.json được cập nhật tự động

# Commit và push
git add backend/data/history.json
git commit -m "Add practice test history - 2026-01-28"
git push
```

### Scenario: Học lại ở công ty

```bash
# Ở công ty
cd /path/to/UDM_exam
git pull  # Lấy history mới nhất

# Restart để đảm bảo container đọc file mới
docker-compose restart backend

# Bây giờ có thể xem lại history từ lần thi ở nhà
```

## ⚠️ Lưu ý quan trọng

### 1. **Conflict khi cả 2 nơi đều làm bài**

Nếu bạn làm bài ở cả 2 nơi mà chưa sync, sẽ xảy ra Git conflict:

```bash
# Giải quyết conflict
git pull  # Sẽ báo conflict
# Mở file history.json và merge thủ công
# Hoặc chọn giữ version nào đó
git add backend/data/history.json
git commit -m "Merge history from both locations"
```

### 2. **Backup định kỳ**

Nên backup file history.json thường xuyên:

```bash
cp backend/data/history.json backend/data/history.backup.$(date +%Y%m%d).json
```

### 3. **File size**

Nếu history.json quá lớn, có thể cân nhắc:

- Dùng Git LFS (Large File Storage)
- Hoặc archive history cũ định kỳ

## 🔧 Troubleshooting

### Vấn đề: History không cập nhật sau khi pull

**Giải pháp:**

```bash
# Restart backend container
docker-compose restart backend

# Hoặc rebuild nếu cần
docker-compose down
docker-compose up -d --build backend
```

### Vấn đề: Permission denied khi ghi file

**Giải pháp:**

```bash
# Kiểm tra quyền của thư mục
ls -la backend/data/

# Nếu cần, sửa quyền
chmod 755 backend/data
chmod 644 backend/data/history.json
```

## 📊 Cấu trúc History JSON

```json
[
  {
    "test_id": "...",
    "timestamp": "...",
    "score": 85,
    "answers": [...],
    "mode": "practice"
  }
]
```

## 🎉 Kết luận

Với cấu hình này, bạn có thể:

- ✅ Làm bài thi ở nhà
- ✅ Push lên Git
- ✅ Pull về ở công ty
- ✅ Xem lại history và học từ các lần thi trước

**Quan trọng:** Luôn nhớ commit và push sau mỗi lần làm bài!
