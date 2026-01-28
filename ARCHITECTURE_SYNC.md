# 🔄 Kiến trúc đồng bộ History

## ✅ **Đúng rồi! Hệ thống đang đồng bộ qua `backend/data/history.json`**

## 📊 Sơ đồ hoạt động

```
┌─────────────────────────────────────────────────────────────────┐
│                    MÁY Ở NHÀ                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. User làm bài thi                                            │
│     ↓                                                            │
│  2. Frontend gọi API: POST /api/history/                        │
│     ↓                                                            │
│  3. Backend (Django) nhận request                               │
│     ↓                                                            │
│  4. views.py: write_history(data)                               │
│     ↓                                                            │
│  5. Ghi vào: /app/data/history.json (trong container)          │
│     ↓ (bind mount)                                              │
│  6. File được ghi vào: ./backend/data/history.json (trên host) │
│     ↓                                                            │
│  7. Git add + commit + push                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ Git push/pull
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                   MÁY Ở CÔNG TY                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Git pull                                                     │
│     ↓                                                            │
│  2. File cập nhật: ./backend/data/history.json (trên host)     │
│     ↓                                                            │
│  3. docker-compose restart backend                              │
│     ↓                                                            │
│  4. Container đọc lại: /app/data/history.json                   │
│     ↓ (bind mount - file đã mới)                                │
│  5. Frontend gọi API: GET /api/history/                         │
│     ↓                                                            │
│  6. Backend trả về history từ file mới                          │
│     ↓                                                            │
│  7. User thấy history từ lần thi ở nhà! ✅                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 🔍 Chi tiết cấu hình

### 1. **Docker Volume Mapping**

```yaml
# docker-compose.yml
services:
  backend:
    volumes:
      - ./backend/data:/app/data # ← Bind mount
```

**Ý nghĩa:**

- `./backend/data` (host) ↔️ `/app/data` (container)
- Mọi thay đổi trong container → ghi vào host
- Mọi thay đổi trên host → container thấy ngay

### 2. **Backend Settings**

```python
# backend/config/settings.py
BASE_DIR = Path(__file__).resolve().parent.parent  # /app
DATA_DIR = BASE_DIR / 'data'                       # /app/data
HISTORY_FILE = DATA_DIR / 'history.json'           # /app/data/history.json
```

### 3. **API Endpoints**

```python
# backend/history_api/views.py

# Đọc history
def read_history():
    file_path = settings.HISTORY_FILE  # /app/data/history.json
    with open(file_path, 'r') as f:
        return json.load(f)

# Ghi history
def write_history(data):
    file_path = settings.HISTORY_FILE  # /app/data/history.json
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)
```

## 🎯 Luồng dữ liệu đầy đủ

### **Khi làm bài thi:**

```
Frontend (React)
    ↓ POST /api/history/
Backend (Django Container)
    ↓ write_history()
/app/data/history.json (Container)
    ↓ (bind mount)
./backend/data/history.json (Host - trong Git repo)
    ↓ git add + commit + push
GitHub Repository
```

### **Khi sync sang máy khác:**

```
GitHub Repository
    ↓ git pull
./backend/data/history.json (Host - cập nhật)
    ↓ (bind mount)
/app/data/history.json (Container - tự động sync)
    ↓ read_history()
Backend (Django Container)
    ↓ GET /api/history/
Frontend (React)
    ↓ Hiển thị
User thấy history! ✅
```

## 📁 Cấu trúc file

```
UDM_exam/
├── backend/
│   ├── data/
│   │   └── history.json          ← File này được sync qua Git
│   ├── config/
│   │   └── settings.py           ← Định nghĩa HISTORY_FILE
│   ├── history_api/
│   │   └── views.py              ← Đọc/ghi history.json
│   └── Dockerfile                ← Tạo /app/data trong container
├── docker-compose.yml            ← Mount ./backend/data:/app/data
└── HISTORY_SYNC.md               ← Hướng dẫn này
```

## ✅ Xác nhận hoạt động

Để kiểm tra xem có đang hoạt động đúng không:

```bash
# 1. Kiểm tra file có trong Git
git ls-files backend/data/history.json
# Output: backend/data/history.json ✅

# 2. Kiểm tra volume mapping
docker-compose config | grep -A 5 "volumes:"
# Output:
#   volumes:
#     - type: bind
#       source: /path/to/backend/data
#       target: /app/data ✅

# 3. Kiểm tra trong container
docker-compose exec backend ls -la /app/data/
# Output: history.json ✅

# 4. Test API
curl http://localhost:8000/api/history/
# Output: [...] ✅
```

## 🎉 Kết luận

**VÂ NG, hệ thống đang đồng bộ history qua `backend/data/history.json`!**

- ✅ File được lưu trong Git repo
- ✅ Docker mount trực tiếp vào container
- ✅ Backend đọc/ghi vào đúng file này
- ✅ Có thể sync giữa các máy qua Git

**Không cần thay đổi gì thêm!** Chỉ cần:

1. Làm bài → commit → push
2. Pull → restart backend
3. Xem lại history! 🚀
