#!/bin/bash

# Script kiểm tra cấu hình đồng bộ history
# Chạy: bash verify-sync-config.sh

echo "🔍 Kiểm tra cấu hình đồng bộ History..."
echo ""

# Màu sắc
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Biến đếm
PASS=0
FAIL=0

# Test 1: Kiểm tra file có trong Git
echo "1️⃣  Kiểm tra file history.json có trong Git..."
if git ls-files backend/data/history.json | grep -q "history.json"; then
    echo -e "   ${GREEN}✅ PASS${NC} - File đã được track bởi Git"
    ((PASS++))
else
    echo -e "   ${RED}❌ FAIL${NC} - File chưa được track bởi Git"
    echo "   → Chạy: git add backend/data/history.json"
    ((FAIL++))
fi
echo ""

# Test 2: Kiểm tra docker-compose volume mapping
echo "2️⃣  Kiểm tra Docker volume mapping..."
if docker-compose config 2>/dev/null | grep -q "target: /app/data"; then
    echo -e "   ${GREEN}✅ PASS${NC} - Volume được mount đúng"
    echo "   → ./backend/data (host) ↔️ /app/data (container)"
    ((PASS++))
else
    echo -e "   ${RED}❌ FAIL${NC} - Volume mapping không đúng"
    echo "   → Kiểm tra docker-compose.yml"
    ((FAIL++))
fi
echo ""

# Test 3: Kiểm tra file tồn tại
echo "3️⃣  Kiểm tra file history.json tồn tại..."
if [ -f "backend/data/history.json" ]; then
    echo -e "   ${GREEN}✅ PASS${NC} - File tồn tại"
    FILE_SIZE=$(wc -c < backend/data/history.json)
    echo "   → Kích thước: $FILE_SIZE bytes"
    ((PASS++))
else
    echo -e "   ${YELLOW}⚠️  WARN${NC} - File chưa tồn tại (sẽ được tạo khi làm bài thi đầu tiên)"
fi
echo ""

# Test 4: Kiểm tra quyền file
echo "4️⃣  Kiểm tra quyền truy cập file..."
if [ -r "backend/data/history.json" ] && [ -w "backend/data/history.json" ]; then
    echo -e "   ${GREEN}✅ PASS${NC} - File có quyền đọc/ghi"
    ls -lh backend/data/history.json | awk '{print "   → Quyền:", $1, "| Owner:", $3}'
    ((PASS++))
elif [ ! -f "backend/data/history.json" ]; then
    echo -e "   ${YELLOW}⚠️  SKIP${NC} - File chưa tồn tại"
else
    echo -e "   ${RED}❌ FAIL${NC} - File không có quyền đọc/ghi"
    echo "   → Chạy: chmod 644 backend/data/history.json"
    ((FAIL++))
fi
echo ""

# Test 5: Kiểm tra .gitattributes
echo "5️⃣  Kiểm tra .gitattributes..."
if [ -f ".gitattributes" ] && grep -q "backend/data/history.json" .gitattributes; then
    echo -e "   ${GREEN}✅ PASS${NC} - .gitattributes đã cấu hình"
    ((PASS++))
else
    echo -e "   ${YELLOW}⚠️  WARN${NC} - .gitattributes chưa cấu hình (không bắt buộc)"
fi
echo ""

# Test 6: Kiểm tra container đang chạy
echo "6️⃣  Kiểm tra container backend..."
if docker-compose ps 2>/dev/null | grep -q "exam-backend.*Up"; then
    echo -e "   ${GREEN}✅ PASS${NC} - Container đang chạy"
    ((PASS++))
    
    # Test 7: Kiểm tra file trong container
    echo ""
    echo "7️⃣  Kiểm tra file trong container..."
    if docker-compose exec -T backend ls /app/data/history.json 2>/dev/null | grep -q "history.json"; then
        echo -e "   ${GREEN}✅ PASS${NC} - File có trong container"
        ((PASS++))
    else
        echo -e "   ${YELLOW}⚠️  WARN${NC} - File chưa có trong container"
    fi
else
    echo -e "   ${YELLOW}⚠️  WARN${NC} - Container chưa chạy"
    echo "   → Chạy: docker-compose up -d"
fi
echo ""

# Tổng kết
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 KẾT QUẢ KIỂM TRA"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Passed: $PASS${NC}"
if [ $FAIL -gt 0 ]; then
    echo -e "${RED}❌ Failed: $FAIL${NC}"
fi
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 CẤU HÌNH HOÀN HẢO!${NC}"
    echo ""
    echo "Bạn có thể đồng bộ history bằng cách:"
    echo "  1. Làm bài thi ở nhà"
    echo "  2. git add backend/data/history.json && git commit -m 'Update history' && git push"
    echo "  3. Ở công ty: git pull && docker-compose restart backend"
else
    echo -e "${RED}⚠️  CÓ VẤN ĐỀ CẦN KHẮC PHỤC${NC}"
    echo "Vui lòng xem các lỗi ở trên và sửa chúng."
fi
echo ""
