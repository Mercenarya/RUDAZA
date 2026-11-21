/**
 * RUSSIAN LEARNING WEB APPLICATION - COMPLETE DATA MODULE
 * Bảng 33 chữ cái Cyrillic, 32 bài học chi tiết từ A1 đến C1, Ngân hàng bài tập và Flashcards
 */

const RUSSIAN_DATA = {
  "alphabet": [
    {
      "num": 1,
      "upper": "А",
      "lower": "а",
      "name": "а",
      "ipa": "[a]",
      "vn": "a (như 'a' trong tiếng Việt)",
      "type": "Nguyên âm cứng",
      "word": "Авто́бус",
      "word_ipa": "[афто́бус]",
      "word_vn": "xe buýt"
    },
    {
      "num": 2,
      "upper": "Б",
      "lower": "б",
      "name": "бэ",
      "ipa": "[b] / [b']",
      "vn": "b (như 'b' tiếng Việt)",
      "type": "Phụ âm hữu thanh",
      "word": "Брат",
      "word_ipa": "[брат]",
      "word_vn": "anh, em trai"
    },
    {
      "num": 3,
      "upper": "В",
      "lower": "в",
      "name": "вэ",
      "ipa": "[v] / [v']",
      "vn": "v (như 'v' tiếng Việt)",
      "type": "Phụ âm hữu thanh",
      "word": "Вода́",
      "word_ipa": "[вада́]",
      "word_vn": "nước"
    },
    {
      "num": 4,
      "upper": "Г",
      "lower": "г",
      "name": "гэ",
      "ipa": "[g] / [g']",
      "vn": "g (như 'g' trong 'gà')",
      "type": "Phụ âm hữu thanh",
      "word": "Го́род",
      "word_ipa": "[го́рат]",
      "word_vn": "thành phố"
    },
    {
      "num": 5,
      "upper": "Д",
      "lower": "д",
      "name": "дэ",
      "ipa": "[d] / [d']",
      "vn": "đ (như 'đ' tiếng Việt)",
      "type": "Phụ âm hữu thanh",
      "word": "Дом",
      "word_ipa": "[дом]",
      "word_vn": "ngôi nhà"
    },
    {
      "num": 6,
      "upper": "Е",
      "lower": "е",
      "name": "е",
      "ipa": "[je] / [e]",
      "vn": "ye / ê (mềm)",
      "type": "Nguyên âm mềm",
      "word": "Е́сли",
      "word_ipa": "[йэ́сли]",
      "word_vn": "nếu, giả sử"
    },
    {
      "num": 7,
      "upper": "Ё",
      "lower": "ё",
      "name": "ё",
      "ipa": "[jo] / [o]",
      "vn": "yo (luôn mang trọng âm)",
      "type": "Nguyên âm mềm",
      "word": "Ёлка",
      "word_ipa": "[йо́лка]",
      "word_vn": "cây thông Noel"
    },
    {
      "num": 8,
      "upper": "Ж",
      "lower": "ж",
      "name": "жэ",
      "ipa": "[ʐ]",
      "vn": "gi / zh (uốn lưỡi, luôn cứng)",
      "type": "Phụ âm luôn cứng",
      "word": "Журна́л",
      "word_ipa": "[журна́л]",
      "word_vn": "tạp chí"
    },
    {
      "num": 9,
      "upper": "З",
      "lower": "з",
      "name": "зэ",
      "ipa": "[z] / [z']",
      "vn": "d / z (rung thanh đới)",
      "type": "Phụ âm hữu thanh",
      "word": "Заво́д",
      "word_ipa": "[заво́т]",
      "word_vn": "nhà máy"
    },
    {
      "num": 10,
      "upper": "И",
      "lower": "и",
      "name": "и",
      "ipa": "[i]",
      "vn": "i (như 'i' tiếng Việt)",
      "type": "Nguyên âm mềm",
      "word": "Ива́н",
      "word_ipa": "[ива́н]",
      "word_vn": "Ivan (tên người)"
    },
    {
      "num": 11,
      "upper": "Й",
      "lower": "й",
      "name": "и краткое",
      "ipa": "[j]",
      "vn": "i ngắn (bán nguyên âm)",
      "type": "Bán nguyên âm",
      "word": "Музе́й",
      "word_ipa": "[муз'э́й]",
      "word_vn": "bảo tàng"
    },
    {
      "num": 12,
      "upper": "К",
      "lower": "к",
      "name": "ка",
      "ipa": "[k] / [k']",
      "vn": "c / k (không bật hơi)",
      "type": "Phụ âm vô thanh",
      "word": "Кни́га",
      "word_ipa": "[кни́га]",
      "word_vn": "quyển sách"
    },
    {
      "num": 13,
      "upper": "Л",
      "lower": "л",
      "name": "эль",
      "ipa": "[l] / [l']",
      "vn": "l (l cứng đặt đầu lưỡi sau răng)",
      "type": "Phụ âm vang",
      "word": "Ла́мпа",
      "word_ipa": "[ла́мпа]",
      "word_vn": "cái đèn"
    },
    {
      "num": 14,
      "upper": "М",
      "lower": "м",
      "name": "эм",
      "ipa": "[m] / [m']",
      "vn": "m (như 'm' tiếng Việt)",
      "type": "Phụ âm vang",
      "word": "Ма́ма",
      "word_ipa": "[ма́ма]",
      "word_vn": "mẹ"
    },
    {
      "num": 15,
      "upper": "Н",
      "lower": "н",
      "name": "эн",
      "ipa": "[n] / [n']",
      "vn": "n (như 'n' tiếng Việt)",
      "type": "Phụ âm vang",
      "word": "Нос",
      "word_ipa": "[нос]",
      "word_vn": "cái mũi"
    },
    {
      "num": 16,
      "upper": "О",
      "lower": "о",
      "name": "о",
      "ipa": "[o] -> [a]",
      "vn": "o (không trọng âm đọc là a)",
      "type": "Nguyên âm cứng",
      "word": "Окно́",
      "word_ipa": "[акно́]",
      "word_vn": "cửa sổ"
    },
    {
      "num": 17,
      "upper": "П",
      "lower": "п",
      "name": "пэ",
      "ipa": "[p] / [p']",
      "vn": "p (như 'p' tiếng Việt)",
      "type": "Phụ âm vô thanh",
      "word": "Па́па",
      "word_ipa": "[па́па]",
      "word_vn": "bố, ba"
    },
    {
      "num": 18,
      "upper": "Р",
      "lower": "р",
      "name": "эр",
      "ipa": "[r] / [r']",
      "vn": "r (rung đầu lưỡi mạnh)",
      "type": "Phụ âm vang",
      "word": "Росси́я",
      "word_ipa": "[расси́йа]",
      "word_vn": "nước Nga"
    },
    {
      "num": 19,
      "upper": "С",
      "lower": "с",
      "name": "эс",
      "ipa": "[s] / [s']",
      "vn": "x / s (nhẹ, răng khép)",
      "type": "Phụ âm vô thanh",
      "word": "Студе́нт",
      "word_ipa": "[студэ́нт]",
      "word_vn": "sinh viên nam"
    },
    {
      "num": 20,
      "upper": "Т",
      "lower": "т",
      "name": "тэ",
      "ipa": "[t] / [t']",
      "vn": "t (như 't' tiếng Việt)",
      "type": "Phụ âm vô thanh",
      "word": "Тетра́дь",
      "word_ipa": "[титра́т']",
      "word_vn": "quyển vở"
    },
    {
      "num": 21,
      "upper": "У",
      "lower": "у",
      "name": "у",
      "ipa": "[u]",
      "vn": "u (tròn môi)",
      "type": "Nguyên âm cứng",
      "word": "Уро́к",
      "word_ipa": "[уро́к]",
      "word_vn": "bài học"
    },
    {
      "num": 22,
      "upper": "Ф",
      "lower": "ф",
      "name": "эф",
      "ipa": "[f] / [f']",
      "vn": "ph / f (răng trên chạm môi dưới)",
      "type": "Phụ âm vô thanh",
      "word": "Фильм",
      "word_ipa": "[ф'ил'м]",
      "word_vn": "bộ phim"
    },
    {
      "num": 23,
      "upper": "Х",
      "lower": "х",
      "name": "ха",
      "ipa": "[x] / [x']",
      "vn": "kh (phát âm từ sâu cuống họng)",
      "type": "Phụ âm vô thanh",
      "word": "Хорошо́",
      "word_ipa": "[харашо́]",
      "word_vn": "tốt, giỏi"
    },
    {
      "num": 24,
      "upper": "Ц",
      "lower": "ц",
      "name": "цэ",
      "ipa": "[ts]",
      "vn": "ts / c-s (bật hơi nhanh, luôn cứng)",
      "type": "Phụ âm luôn cứng",
      "word": "Центр",
      "word_ipa": "[цэнтр]",
      "word_vn": "trung tâm"
    },
    {
      "num": 25,
      "upper": "Ч",
      "lower": "ч",
      "name": "че",
      "ipa": "[tɕ]",
      "vn": "ch (mềm, cong môi, luôn mềm)",
      "type": "Phụ âm luôn mềm",
      "word": "Чай",
      "word_ipa": "[тшай / чай]",
      "word_vn": "trà, chè"
    },
    {
      "num": 26,
      "upper": "Ш",
      "lower": "ш",
      "name": "ша",
      "ipa": "[ʂ]",
      "vn": "s / sh (uốn lưỡi sâu, luôn cứng)",
      "type": "Phụ âm luôn cứng",
      "word": "Шко́ла",
      "word_ipa": "[шко́ла]",
      "word_vn": "trường học"
    },
    {
      "num": 27,
      "upper": "Щ",
      "lower": "щ",
      "name": "ща",
      "ipa": "[ɕː]",
      "vn": "sh-ch (dài và mềm, luôn mềm)",
      "type": "Phụ âm luôn mềm",
      "word": "Борщ",
      "word_ipa": "[борщ']",
      "word_vn": "súp củ dền Nga"
    },
    {
      "num": 28,
      "upper": "Ъ",
      "lower": "ъ",
      "name": "твёрдый знак",
      "ipa": "[-]",
      "vn": "dấu cứng (ngăn cách phụ âm với nguyên âm mềm)",
      "type": "Ký hiệu không âm",
      "word": "Объе́кт",
      "word_ipa": "[абйэ́кт]",
      "word_vn": "đối tượng"
    },
    {
      "num": 29,
      "upper": "Ы",
      "lower": "ы",
      "name": "ы",
      "ipa": "[ɨ]",
      "vn": "ư / i sâu (phát âm từ đáy họng)",
      "type": "Nguyên âm cứng",
      "word": "Ры́ба",
      "word_ipa": "[ры́ба]",
      "word_vn": "con cá"
    },
    {
      "num": 30,
      "upper": "Ь",
      "lower": "ь",
      "name": "мягкий знак",
      "ipa": "[-]",
      "vn": "dấu mềm (làm mềm phụ âm đứng trước nó)",
      "type": "Ký hiệu không âm",
      "word": "Мать",
      "word_ipa": "[мат']",
      "word_vn": "người mẹ"
    },
    {
      "num": 31,
      "upper": "Э",
      "lower": "э",
      "name": "э оборотное",
      "ipa": "[ɛ]",
      "vn": "e (mở rộng miệng, e cứng)",
      "type": "Nguyên âm cứng",
      "word": "Э́то",
      "word_ipa": "[э́та]",
      "word_vn": "đây là, cái này"
    },
    {
      "num": 32,
      "upper": "Ю",
      "lower": "ю",
      "name": "ю",
      "ipa": "[ju] / [u]",
      "vn": "yu (như 'du' hoặc 'iu')",
      "type": "Nguyên âm mềm",
      "word": "Юг",
      "word_ipa": "[йук]",
      "word_vn": "hướng Nam"
    },
    {
      "num": 33,
      "upper": "Я",
      "lower": "я",
      "name": "я",
      "ipa": "[ja] / [a]",
      "vn": "ya (không trọng âm đọc ngả sang i)",
      "type": "Nguyên âm mềm",
      "word": "Я́блоко",
      "word_ipa": "[йа́блака]",
      "word_vn": "quả táo"
    }
  ],
  "levels": [
    {
      "id": "a1",
      "code": "A1",
      "name": "Căn bản & Nhập môn (Элементарный)",
      "desc": "Làm quen bảng chữ cái Cyrillic 33 chữ, quy tắc ngữ âm, trọng âm, giống danh từ, đại từ sở hữu, thì hiện tại - quá khứ và cách 6, cách 4 cơ bản.",
      "badgeColor": "#27ae60",
      "totalLessons": 10,
      "lessons": [
        {
          "id": "a1_1",
          "title": "Bài 1: Bảng 33 chữ cái Cyrillic & Phiên âm chuẩn",
          "subtitle": "Русский алфавит и Фонетическая система",
          "content": "\n          <h4>1. Bảng 33 chữ cái Cyrillic (Русский алфавит)</h4>\n          <p>Bảng chữ cái tiếng Nga bao gồm <strong>33 chữ cái</strong>: 10 nguyên âm (5 nguyên âm cứng: А, О, У, Ы, Э; 5 nguyên âm mềm: Я, Ё, Ю, И, Е), 21 phụ âm và 2 ký hiệu không phát âm (ь - dấu mềm, ъ - dấu cứng).</p>\n          \n          <div class=\"alphabet-intro-box\">\n            <div style=\"display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;\">\n              <div>\n                <h5 style=\"margin: 0; font-size: 1.1rem; color: #2c3e50;\">🔤 Bảng Chữ Cái Tương Tác 33 Chữ</h5>\n                <p style=\"font-size: 0.88rem; color: #64748b; margin-top: 0.2rem;\">Nhấp vào từng chữ cái để <strong>nghe phát âm giọng đọc bản xứ</strong> và xem phiên âm IPA & cách đọc tiếng Việt:</p>\n              </div>\n            </div>\n            <div class=\"alphabet-grid\" id=\"alphabetGridContainer\">\n              <!-- Rendered by JS -->\n            </div>\n            <div id=\"alphabetDetailPreview\" class=\"alphabet-detail-banner\">\n              <span style=\"font-size: 2.2rem; font-weight: 800; color: #2980b9;\" id=\"alphaPreviewChar\">А а</span>\n              <div style=\"flex: 1;\">\n                <div style=\"font-size: 1.1rem; font-weight: 700; color: #2c3e50;\" id=\"alphaPreviewTitle\">Chữ cái А - Tên gọi: \"а\"</div>\n                <div style=\"font-size: 0.92rem; color: #475569;\" id=\"alphaPreviewDesc\">Phiên âm IPA: [a] | Cách đọc: như chữ \"a\" trong tiếng Việt. Ví dụ: Автобус [афто́бус] - xe buýt.</div>\n              </div>\n              <button class=\"flat-btn flat-btn-success flat-btn-sm\" onclick=\"speakLetter(currentPreviewChar)\">\n                🔊 Nghe phát âm\n              </button>\n            </div>\n          </div>\n\n          <h4 style=\"margin-top: 2rem;\">2. Bảng tổng hợp 33 chữ cái đầy đủ</h4>\n          <div style=\"overflow-x: auto;\">\n            <table class=\"flat-table\">\n              <thead>\n                <tr><th>STT</th><th>Chữ cái</th><th>Tên</th><th>IPA</th><th>Phiên âm Việt</th><th>Phân loại</th><th>Từ ví dụ</th><th>Nghĩa</th></tr>\n              </thead>\n              <tbody>\n                <tr><td>1</td><td><strong>А а</strong></td><td>а</td><td><code>[a]</code></td><td>a (như 'a' trong tiếng Việt)</td><td>Nguyên âm cứng</td><td><strong>Авто́бус</strong></td><td>xe buýt</td></tr><tr><td>2</td><td><strong>Б б</strong></td><td>бэ</td><td><code>[b] / [b']</code></td><td>b (như 'b' tiếng Việt)</td><td>Phụ âm hữu thanh</td><td><strong>Брат</strong></td><td>anh, em trai</td></tr><tr><td>3</td><td><strong>В в</strong></td><td>вэ</td><td><code>[v] / [v']</code></td><td>v (như 'v' tiếng Việt)</td><td>Phụ âm hữu thanh</td><td><strong>Вода́</strong></td><td>nước</td></tr><tr><td>4</td><td><strong>Г г</strong></td><td>гэ</td><td><code>[g] / [g']</code></td><td>g (như 'g' trong 'gà')</td><td>Phụ âm hữu thanh</td><td><strong>Го́род</strong></td><td>thành phố</td></tr><tr><td>5</td><td><strong>Д д</strong></td><td>дэ</td><td><code>[d] / [d']</code></td><td>đ (như 'đ' tiếng Việt)</td><td>Phụ âm hữu thanh</td><td><strong>Дом</strong></td><td>ngôi nhà</td></tr><tr><td>6</td><td><strong>Е е</strong></td><td>е</td><td><code>[je] / [e]</code></td><td>ye / ê (mềm)</td><td>Nguyên âm mềm</td><td><strong>Е́сли</strong></td><td>nếu, giả sử</td></tr><tr><td>7</td><td><strong>Ё ё</strong></td><td>ё</td><td><code>[jo] / [o]</code></td><td>yo (luôn mang trọng âm)</td><td>Nguyên âm mềm</td><td><strong>Ёлка</strong></td><td>cây thông Noel</td></tr><tr><td>8</td><td><strong>Ж ж</strong></td><td>жэ</td><td><code>[ʐ]</code></td><td>gi / zh (uốn lưỡi, luôn cứng)</td><td>Phụ âm luôn cứng</td><td><strong>Журна́л</strong></td><td>tạp chí</td></tr><tr><td>9</td><td><strong>З з</strong></td><td>зэ</td><td><code>[z] / [z']</code></td><td>d / z (rung thanh đới)</td><td>Phụ âm hữu thanh</td><td><strong>Заво́д</strong></td><td>nhà máy</td></tr><tr><td>10</td><td><strong>И и</strong></td><td>и</td><td><code>[i]</code></td><td>i (như 'i' tiếng Việt)</td><td>Nguyên âm mềm</td><td><strong>Ива́н</strong></td><td>Ivan (tên người)</td></tr><tr><td>11</td><td><strong>Й й</strong></td><td>и краткое</td><td><code>[j]</code></td><td>i ngắn (bán nguyên âm)</td><td>Bán nguyên âm</td><td><strong>Музе́й</strong></td><td>bảo tàng</td></tr><tr><td>12</td><td><strong>К к</strong></td><td>ка</td><td><code>[k] / [k']</code></td><td>c / k (không bật hơi)</td><td>Phụ âm vô thanh</td><td><strong>Кни́га</strong></td><td>quyển sách</td></tr><tr><td>13</td><td><strong>Л л</strong></td><td>эль</td><td><code>[l] / [l']</code></td><td>l (l cứng đặt đầu lưỡi sau răng)</td><td>Phụ âm vang</td><td><strong>Ла́мпа</strong></td><td>cái đèn</td></tr><tr><td>14</td><td><strong>М м</strong></td><td>эм</td><td><code>[m] / [m']</code></td><td>m (như 'm' tiếng Việt)</td><td>Phụ âm vang</td><td><strong>Ма́ма</strong></td><td>mẹ</td></tr><tr><td>15</td><td><strong>Н н</strong></td><td>эн</td><td><code>[n] / [n']</code></td><td>n (như 'n' tiếng Việt)</td><td>Phụ âm vang</td><td><strong>Нос</strong></td><td>cái mũi</td></tr><tr><td>16</td><td><strong>О о</strong></td><td>о</td><td><code>[o] -> [a]</code></td><td>o (không trọng âm đọc là a)</td><td>Nguyên âm cứng</td><td><strong>Окно́</strong></td><td>cửa sổ</td></tr><tr><td>17</td><td><strong>П п</strong></td><td>пэ</td><td><code>[p] / [p']</code></td><td>p (như 'p' tiếng Việt)</td><td>Phụ âm vô thanh</td><td><strong>Па́па</strong></td><td>bố, ba</td></tr><tr><td>18</td><td><strong>Р р</strong></td><td>эр</td><td><code>[r] / [r']</code></td><td>r (rung đầu lưỡi mạnh)</td><td>Phụ âm vang</td><td><strong>Росси́я</strong></td><td>nước Nga</td></tr><tr><td>19</td><td><strong>С с</strong></td><td>эс</td><td><code>[s] / [s']</code></td><td>x / s (nhẹ, răng khép)</td><td>Phụ âm vô thanh</td><td><strong>Студе́нт</strong></td><td>sinh viên nam</td></tr><tr><td>20</td><td><strong>Т т</strong></td><td>тэ</td><td><code>[t] / [t']</code></td><td>t (như 't' tiếng Việt)</td><td>Phụ âm vô thanh</td><td><strong>Тетра́дь</strong></td><td>quyển vở</td></tr><tr><td>21</td><td><strong>У у</strong></td><td>у</td><td><code>[u]</code></td><td>u (tròn môi)</td><td>Nguyên âm cứng</td><td><strong>Уро́к</strong></td><td>bài học</td></tr><tr><td>22</td><td><strong>Ф ф</strong></td><td>эф</td><td><code>[f] / [f']</code></td><td>ph / f (răng trên chạm môi dưới)</td><td>Phụ âm vô thanh</td><td><strong>Фильм</strong></td><td>bộ phim</td></tr><tr><td>23</td><td><strong>Х х</strong></td><td>ха</td><td><code>[x] / [x']</code></td><td>kh (phát âm từ sâu cuống họng)</td><td>Phụ âm vô thanh</td><td><strong>Хорошо́</strong></td><td>tốt, giỏi</td></tr><tr><td>24</td><td><strong>Ц ц</strong></td><td>цэ</td><td><code>[ts]</code></td><td>ts / c-s (bật hơi nhanh, luôn cứng)</td><td>Phụ âm luôn cứng</td><td><strong>Центр</strong></td><td>trung tâm</td></tr><tr><td>25</td><td><strong>Ч ч</strong></td><td>че</td><td><code>[tɕ]</code></td><td>ch (mềm, cong môi, luôn mềm)</td><td>Phụ âm luôn mềm</td><td><strong>Чай</strong></td><td>trà, chè</td></tr><tr><td>26</td><td><strong>Ш ш</strong></td><td>ша</td><td><code>[ʂ]</code></td><td>s / sh (uốn lưỡi sâu, luôn cứng)</td><td>Phụ âm luôn cứng</td><td><strong>Шко́ла</strong></td><td>trường học</td></tr><tr><td>27</td><td><strong>Щ щ</strong></td><td>ща</td><td><code>[ɕː]</code></td><td>sh-ch (dài và mềm, luôn mềm)</td><td>Phụ âm luôn mềm</td><td><strong>Борщ</strong></td><td>súp củ dền Nga</td></tr><tr><td>28</td><td><strong>Ъ ъ</strong></td><td>твёрдый знак</td><td><code>[-]</code></td><td>dấu cứng (ngăn cách phụ âm với nguyên âm mềm)</td><td>Ký hiệu không âm</td><td><strong>Объе́кт</strong></td><td>đối tượng</td></tr><tr><td>29</td><td><strong>Ы ы</strong></td><td>ы</td><td><code>[ɨ]</code></td><td>ư / i sâu (phát âm từ đáy họng)</td><td>Nguyên âm cứng</td><td><strong>Ры́ба</strong></td><td>con cá</td></tr><tr><td>30</td><td><strong>Ь ь</strong></td><td>мягкий знак</td><td><code>[-]</code></td><td>dấu mềm (làm mềm phụ âm đứng trước nó)</td><td>Ký hiệu không âm</td><td><strong>Мать</strong></td><td>người mẹ</td></tr><tr><td>31</td><td><strong>Э э</strong></td><td>э оборотное</td><td><code>[ɛ]</code></td><td>e (mở rộng miệng, e cứng)</td><td>Nguyên âm cứng</td><td><strong>Э́то</strong></td><td>đây là, cái này</td></tr><tr><td>32</td><td><strong>Ю ю</strong></td><td>ю</td><td><code>[ju] / [u]</code></td><td>yu (như 'du' hoặc 'iu')</td><td>Nguyên âm mềm</td><td><strong>Юг</strong></td><td>hướng Nam</td></tr><tr><td>33</td><td><strong>Я я</strong></td><td>я</td><td><code>[ja] / [a]</code></td><td>ya (không trọng âm đọc ngả sang i)</td><td>Nguyên âm mềm</td><td><strong>Я́блоко</strong></td><td>quả táo</td></tr>\n              </tbody>\n            </table>\n          </div>\n        "
        },
        {
          "id": "a1_2",
          "title": "Bài 2: Trọng âm & Quy tắc Giảm âm (Редукция)",
          "subtitle": "Ударение и Редукция гласных",
          "content": "\n          <h4>1. Trọng âm trong tiếng Nga (Ударение)</h4>\n          <p>Trọng âm rơi vào âm tiết nào thì âm tiết đó được phát âm <strong>dài hơn, to hơn và rõ ràng nhất</strong>. Trong sách học, trọng âm được ký hiệu bằng dấu sắc (´) trên nguyên âm: <em>кни́га, студе́нт, молоко́</em>.</p>\n          <div class=\"flat-note\">\n            <strong>Đặc biệt:</strong> Chữ <strong>Ё</strong> trong tiếng Nga luôn luôn mang trọng âm! Khi một từ có chữ Ё, ta không cần đánh dấu trọng âm nữa: <em>ёлка, ребёнок, самолёт</em>.\n          </div>\n\n          <h4>2. Quy tắc giảm âm của chữ О không mang trọng âm</h4>\n          <p>Chữ <strong>О</strong> khi không mang trọng âm sẽ bị đọc lướt thành âm <strong>[а]</strong>:</p>\n          <ul>\n            <li><em>молоко́</em> -> phát âm là <code>[малако́]</code> (sữa)</li>\n            <li><em>хорошо́</em> -> phát âm là <code>[харашо́]</code> (tốt, giỏi)</li>\n            <li><em>соба́ка</em> -> phát âm là <code>[саба́ка]</code> (con chó)</li>\n            <li><em>окно́</em> -> phát âm là <code>[акно́]</code> (cửa sổ)</li>\n          </ul>\n\n          <h4>3. Quy tắc giảm âm của chữ Е và Я không mang trọng âm</h4>\n          <p>Khi đứng trước trọng âm, chữ <strong>Е</strong> và <strong>Я</strong> được đọc lướt ngả sang âm <strong>[и]</strong>:</p>\n          <ul>\n            <li><em>тетра́дь</em> -> đọc là <code>[титра́т']</code> (quyển vở)</li>\n            <li><em>язы́к</em> -> đọc là <code>[йизы́к]</code> (ngôn ngữ / cái lưỡi)</li>\n            <li><em>мясно́й</em> -> đọc là <code>[м'исно́й]</code> (thuộc về thịt)</li>\n          </ul>\n        "
        },
        {
          "id": "a1_3",
          "title": "Bài 3: Quy tắc biến âm phụ âm (Vô thanh & Hữu thanh)",
          "subtitle": "Оглушение и Озвончение согласных",
          "content": "\n          <h4>1. Vô thanh hóa phụ âm cuối từ (Оглушение)</h4>\n          <p>Khi 6 phụ âm hữu thanh đứng ở cuối từ (không có nguyên âm theo sau), chúng tự động phát âm thành phụ âm vô thanh tương ứng:</p>\n          <table class=\"flat-table\">\n            <thead><tr><th>Cặp phụ âm</th><th>Từ ví dụ</th><th>Phát âm thực tế</th><th>Nghĩa tiếng Việt</th></tr></thead>\n            <tbody>\n              <tr><td><strong>Б -> П</strong></td><td>хлеб, клуб</td><td><code>[хлеп], [клуп]</code></td><td>bánh mì, câu lạc bộ</td></tr>\n              <tr><td><strong>В -> Ф</strong></td><td>город, Киев</td><td><code>[горат], [кииф]</code></td><td>thành phố, Kiev</td></tr>\n              <tr><td><strong>Г -> К</strong></td><td>друг, пирог</td><td><code>[друк], [пирок]</code></td><td>bạn thân, bánh nướng</td></tr>\n              <tr><td><strong>Д -> Т</strong></td><td>сад, обед, плод</td><td><code>[сат], [аб'эт], [плот]</code></td><td>khu vườn, bữa trưa, quả</td></tr>\n              <tr><td><strong>Ж -> Ш</strong></td><td>нож, этаж, гараж</td><td><code>[нош], [эташ], [гараш]</code></td><td>con dao, tầng gác, ga-ra</td></tr>\n              <tr><td><strong>З -> С</strong></td><td>глаз, мороз, поезд</td><td><code>[глас], [марос], [пойэст]</code></td><td>con mắt, sương giá, tàu hỏa</td></tr>\n            </tbody>\n          </table>\n\n          <h4>2. Đồng hóa phụ âm (Ассимиляция)</h4>\n          <ul>\n            <li><strong>Hữu thanh đứng trước vô thanh -> bị vô thanh hóa:</strong> <em>ложка</em> [лошка] (cái thìa), <em>водка</em> [вотка] (rượu vodka).</li>\n            <li><strong>Vô thanh đứng trước hữu thanh (trừ в, л, м, н, р, й) -> bị hữu thanh hóa:</strong> <em>вокзал</em> [вагзал] (nhà ga), <em>футбол</em> [фудбол] (bóng đá).</li>\n          </ul>\n        "
        },
        {
          "id": "a1_4",
          "title": "Bài 4: Danh từ - Phân biệt 3 Giống (Род)",
          "subtitle": "Мужской, Женский и Средний род",
          "content": "\n          <h4>Bảng nhận diện 3 giống của danh từ số ít</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Giống</th><th>Đuôi nhận diện</th><th>Ví dụ</th><th>Đại từ thay thế</th></tr></thead>\n            <tbody>\n              <tr>\n                <td><strong>Giống đực (Мужской)</strong></td>\n                <td>Phụ âm cứng, <strong>-й</strong>, hoặc <strong>-ь</strong> (học thuộc)<br>Từ chỉ nam giới tận cùng -а/-я</td>\n                <td><em>стол, студент, музей, чай, словарь, день, папа, дедушка</em></td>\n                <td><strong>Он</strong></td>\n              </tr>\n              <tr>\n                <td><strong>Giống cái (Женский)</strong></td>\n                <td><strong>-а</strong>, <strong>-я</strong>, <strong>-ия</strong>, hoặc <strong>-ь</strong> (học thuộc)</td>\n                <td><em>мама, книга, песня, семья, Россия, станция, тетрадь, ночь, дверь</em></td>\n                <td><strong>Она</strong></td>\n              </tr>\n              <tr>\n                <td><strong>Giống trung (Средний)</strong></td>\n                <td><strong>-о</strong>, <strong>-е</strong>, <strong>-ие</strong><br>10 danh từ đuôi <strong>-мя</strong></td>\n                <td><em>окно, письмо, море, поле, здание, общежитие, время, имя</em></td>\n                <td><strong>Оно</strong></td>\n              </tr>\n            </tbody>\n          </table>\n          <p class=\"flat-note\"><strong>Mẹo phân biệt đuôi dấu mềm (-ь):</strong> Từ tận cùng <em>-тель</em> luôn là giống đực (<em>учитель, преподаватель</em>); từ tận cùng <em>-ость/-есть</em> luôn là giống cái (<em>новость, радость</em>).</p>\n        "
        },
        {
          "id": "a1_5",
          "title": "Bài 5: Số nhiều của danh từ & Các ngoại lệ",
          "subtitle": "Множественное число имён существительных",
          "content": "\n          <h4>1. Quy tắc lập số nhiều cơ bản</h4>\n          <ul>\n            <li>Đuôi <strong>-ы</strong>: Sau phụ âm cứng: <em>стол -> столы, газета -> газеты, завод -> заводы</em>.</li>\n            <li>Đuôi <strong>-и</strong>: Sau phụ âm mềm, -й, và sau <strong>7 phụ âm cấm đi với -ы: г, к, х, ж, ч, ш, щ</strong>:\n              <br><em>книга -> книги, ручка -> ручки, музей -> музеи, врач -> врачи, тетрадь -> тетради</em>.\n            </li>\n            <li>Giống trung: đuôi <strong>-о</strong> đổi thành <strong>-а</strong> (<em>окно -> окна</em>); đuôi <strong>-е</strong> đổi thành <strong>-я</strong> (<em>море -> моря</em>).</li>\n          </ul>\n\n          <h4>2. Các trường hợp ngoại lệ bất quy tắc thông dụng nhất</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Số ít</th><th>Số nhiều</th><th>Nghĩa tiếng Việt</th></tr></thead>\n            <tbody>\n              <tr><td>дом</td><td><strong>дома́</strong></td><td>ngôi nhà</td></tr>\n              <tr><td>город</td><td><strong>города́</strong></td><td>thành phố</td></tr>\n              <tr><td>друг</td><td><strong>друзья́</strong></td><td>người bạn</td></tr>\n              <tr><td>брат</td><td><strong>бра́тья</strong></td><td>anh em trai</td></tr>\n              <tr><td>стул</td><td><strong>сту́лья</strong></td><td>cái ghế</td></tr>\n              <tr><td>дерево</td><td><strong>дере́вья</strong></td><td>cái cây</td></tr>\n              <tr><td>человек</td><td><strong>лю́ди</strong></td><td>con người</td></tr>\n              <tr><td>ребёнок</td><td><strong>де́ти</strong></td><td>đứa trẻ</td></tr>\n              <tr><td>время</td><td><strong>времена́</strong></td><td>thời gian</td></tr>\n              <tr><td>имя</td><td><strong>имена́</strong></td><td>tên gọi</td></tr>\n            </tbody>\n          </table>\n        "
        },
        {
          "id": "a1_6",
          "title": "Bài 6: Đại từ nhân xưng, Sở hữu & Chỉ định",
          "subtitle": "Личные, Притяжательные и Указательные местоимения",
          "content": "\n          <h4>1. Bảng Đại từ sở hữu</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Đại từ nhân xưng</th><th>Đực (Он)</th><th>Cái (Она)</th><th>Trung (Оно)</th><th>Số nhiều (Они)</th><th>Nghĩa</th></tr></thead>\n            <tbody>\n              <tr><td>Я</td><td>мой</td><td>моя́</td><td>моё</td><td>мои́</td><td>của tôi</td></tr>\n              <tr><td>Ты</td><td>твой</td><td>твоя́</td><td>твоё</td><td>твои́</td><td>của bạn</td></tr>\n              <tr><td>Он / Оно</td><td>его́ [йево́]</td><td>его́</td><td>его́</td><td>его́</td><td>của anh ấy/nó</td></tr>\n              <tr><td>Она</td><td>её [йейо́]</td><td>её</td><td>её</td><td>её</td><td>của cô ấy</td></tr>\n              <tr><td>Мы</td><td>наш</td><td>на́ша</td><td>на́ше</td><td>на́ши</td><td>của chúng tôi</td></tr>\n              <tr><td>Вы</td><td>ваш</td><td>ва́ша</td><td>ва́ше</td><td>ва́ши</td><td>của các bạn/ngài</td></tr>\n              <tr><td>Они</td><td>их</td><td>их</td><td>их</td><td>их</td><td>của họ</td></tr>\n            </tbody>\n          </table>\n\n          <h4>2. Đại từ chỉ định (Этот - Cái này, người này)</h4>\n          <ul>\n            <li>Giống đực: <em>э́тот студе́нт, э́тот стол</em></li>\n            <li>Giống cái: <em>э́та кни́га, э́та де́вушка</em></li>\n            <li>Giống trung: <em>э́то зда́ние, э́то окно́</em></li>\n            <li>Số nhiều: <em>э́ти студе́нты, э́ти кни́ги</em></li>\n          </ul>\n        "
        },
        {
          "id": "a1_7",
          "title": "Bài 7: Động từ thì Hiện tại - 2 Nhóm chia",
          "subtitle": "Настоящее время глаголов: I и II спряжение",
          "content": "\n          <h4>1. Hai nhóm chia động từ (Спряжение)</h4>\n          <div class=\"flat-grid-2\">\n            <div class=\"flat-box\">\n              <h5>Nhóm I (-ать, -ять): Ví dụ: читать (đọc)</h5>\n              <ul>\n                <li>я чита́<strong>ю</strong></li>\n                <li>ты чита́<strong>ешь</strong></li>\n                <li>он/она чита́<strong>ет</strong></li>\n                <li>мы чита́<strong>ем</strong></li>\n                <li>вы чита́<strong>ете</strong></li>\n                <li>они чита́<strong>ют</strong></li>\n              </ul>\n            </div>\n            <div class=\"flat-box\">\n              <h5>Nhóm II (-ить): Ví dụ: говорить (nói)</h5>\n              <ul>\n                <li>я говор<strong>ю́</strong></li>\n                <li>ты говор<strong>и́шь</strong></li>\n                <li>он/она говор<strong>и́т</strong></li>\n                <li>мы говор<strong>и́м</strong></li>\n                <li>вы говор<strong>и́те</strong></li>\n                <li>они говор<strong>я́т</strong></li>\n              </ul>\n            </div>\n          </div>\n\n          <h4>2. Bốn động từ biến vị bất quy tắc thường gặp nhất</h4>\n          <ul>\n            <li><strong>жить (sống):</strong> живу́, живёшь, живёт, живём, живёте, живу́т.</li>\n            <li><strong>писать (viết):</strong> пишу́, пи́шешь, пи́шет, пи́шем, пи́шете, пи́шут.</li>\n            <li><strong>любить (yêu, thích):</strong> люблю́, лю́бишь, лю́бит, лю́бим, лю́бите, лю́бят.</li>\n            <li><strong>хотеть (muốn):</strong> хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т.</li>\n          </ul>\n        "
        },
        {
          "id": "a1_8",
          "title": "Bài 8: Động từ thì Quá khứ & Tương lai đơn giản",
          "subtitle": "Прошедшее и Сложное будущее время",
          "content": "\n          <h4>1. Thì Quá khứ (Прошедшее время)</h4>\n          <p>Bỏ đuôi <em>-ть</em> của nguyên thể, thêm đuôi theo giống và số của chủ ngữ:</p>\n          <ul>\n            <li>Giống đực (он): <strong>-л</strong> (<em>Он читал, работал, жил</em>)</li>\n            <li>Giống cái (ona): <strong>-ла</strong> (<em>Она читала, работала, жила</em>)</li>\n            <li>Giống trung (оно): <strong>-ло</strong> (<em>Солнце светило, время шло</em>)</li>\n            <li>Số nhiều (они): <strong>-ли</strong> (<em>Они читали, работали, жили</em>)</li>\n          </ul>\n\n          <h4>2. Thì Tương lai kép (Сложное будущее время)</h4>\n          <p>Công thức: <strong>Chia động từ БЫТЬ + Động từ nguyên thể (Инфинитив)</strong>:</p>\n          <ul>\n            <li>я <strong>буду читать</strong></li>\n            <li>ты <strong>будешь читать</strong></li>\n            <li>он/она <strong>будет читать</strong></li>\n            <li>мы <strong>будем читать</strong></li>\n            <li>вы <strong>будете читать</strong></li>\n            <li>они <strong>будут читать</strong></li>\n          </ul>\n        "
        },
        {
          "id": "a1_9",
          "title": "Bài 9: Cách 6 - Địa điểm nơi chốn (Где?)",
          "subtitle": "Предложный падеж: значение места",
          "content": "\n          <h4>1. Cấu trúc diễn tả vị trí (Где? - Ở đâu?)</h4>\n          <p>Đi kèm giới từ <strong>В</strong> (trong) hoặc <strong>НА</strong> (trên, tại sự kiện):</p>\n          <ul>\n            <li>Đa số danh từ đổi đuôi thành <strong>-е</strong>: <em>в городе, на столе, в Москве, в комнате</em>.</li>\n            <li>Danh từ tận cùng <strong>-ия, -ие, -ь (nữ)</strong> đổi thành <strong>-и</strong>: <em>в России, в общежитии, на площади</em>.</li>\n          </ul>\n\n          <h4>2. Phân biệt dùng В hay НА</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Dùng giới từ В</th><th>Dùng giới từ НА</th></tr></thead>\n            <tbody>\n              <tr>\n                <td>Không gian kín, tòa nhà, thành phố, quốc gia:<br><em>в комнате, в доме, в банке, в Москве, во Вьетнаме</em></td>\n                <td>Bề mặt mở, hòn đảo, phương hướng, sự kiện:<br><em>на столе, на улице, на стадионе, на концерте, на уроке, на работе</em></td>\n              </tr>\n            </tbody>\n          </table>\n        "
        },
        {
          "id": "a1_10",
          "title": "Bài 10: Cách 4 - Tân ngữ trực tiếp & Đích đến (Куда?)",
          "subtitle": "Винительный падеж: прямой объект и направление",
          "content": "\n          <h4>1. Tân ngữ trực tiếp (Кого? Что?)</h4>\n          <ul>\n            <li><strong>Bất động vật (đồ vật):</strong> Đực và Trung <strong>giữ nguyên</strong> như Cách 1; Cái: đuôi <strong>-а -> -у</strong>, <strong>-я -> -ю</strong> (<em>Я читаю интересную книгу và новый журнал</em>).</li>\n            <li><strong>Động vật (con người, động vật):</strong> Đực thêm <strong>-а / -я</strong> (<em>Я вижу студента, брата</em>); Cái đổi thành <strong>-у / -ю</strong> (<em>Я вижу сестру</em>).</li>\n          </ul>\n\n          <h4>2. Phương hướng đích đến (Куда? - Đi đâu?)</h4>\n          <p>Công thức: <strong>Động từ chuyển động + В / НА + Cách 4</strong>:</p>\n          <ul>\n            <li><em>Я иду в парк</em> (đực bất động vật: giữ nguyên)</li>\n            <li><em>Она спешит на работу</em> (cái: работа -> работу)</li>\n            <li><em>Мы едем в Россию</em> (cái: Россия -> Россию)</li>\n          </ul>\n        "
        }
      ]
    },
    {
      "id": "a2",
      "code": "A2",
      "name": "Sơ cấp & Giao tiếp tự tin (Базовый)",
      "desc": "Nắm vững toàn diện 6 cách danh từ - tính từ số ít & nhiều; bản chất Thể động từ (НСВ/СВ); ĐT chuyển động không tiền tố, động từ phản thân và câu ghép.",
      "badgeColor": "#2980b9",
      "totalLessons": 8,
      "lessons": [
        {
          "id": "a2_1",
          "title": "Bài 1: Cách 2 - Phủ định với НЕТ & Số lượng",
          "subtitle": "Родительный падеж (Кого? Чего? Откуда? Сколько?)",
          "content": "\n          <h4>1. Phủ định với НЕТ (Không có ai / không có cái gì)</h4>\n          <p>Công thức: <em>У меня / в городе + НЕТ + Danh từ ở Cách 2</em></p>\n          <ul>\n            <li>Giống đực thêm <strong>-а / -я</strong>: <em>нет словаря, нет времени, нет брата</em>.</li>\n            <li>Giống cái đổi thành <strong>-ы / -и</strong>: <em>нет машины, нет книги, нет сестры</em>.</li>\n            <li>Giống trung đổi thành <strong>-а / -я</strong>: <em>нет молока, нет места</em>.</li>\n          </ul>\n\n          <h4>2. Quy tắc danh từ sau số từ</h4>\n          <ul>\n            <li>Sau số <strong>1</strong>: Danh từ ở Cách 1 (<em>один стол, одна книга</em>).</li>\n            <li>Sau số <strong>2, 3, 4</strong>: Danh từ ở <strong>Cách 2 số ít</strong> (<em>два стола, три книги, четыре студента</em>).</li>\n            <li>Sau số <strong>5 - 20</strong>, số tròn chục và từ chỉ lượng (<em>много, мало, сколько</em>): Danh từ ở <strong>Cách 2 số nhiều</strong> (<em>пять столов, много книг, десять студентов</em>).</li>\n          </ul>\n\n          <h4>3. Giới từ chỉ xuất phát điểm (Откуда? - Từ đâu đến)</h4>\n          <p>Đối ứng: <em>В -> ИЗ</em>; <em>НА -> С</em>: <em>из Вьетнама, из университета, с работы, с вокзала</em>.</p>\n        "
        },
        {
          "id": "a2_2",
          "title": "Bài 2: Cách 3 - Người nhận, Tuổi tác & Trạng thái",
          "subtitle": "Дательный падеж (Кому? Чему?)",
          "content": "\n          <h4>1. Đối tượng tiếp nhận hành động</h4>\n          <p>Đuôi số ít: Giống đực/trung: <strong>-у / -ю</strong>; Giống cái: <strong>-е / -и</strong>.</p>\n          <ul>\n            <li><em>Я звоню другу / сестре.</em> (Tôi gọi điện cho bạn / em gái).</li>\n            <li><em>Преподаватель объясняет студентам правило.</em> (Thầy giải thích cho sinh viên).</li>\n          </ul>\n\n          <h4>2. Hỏi và nói tuổi tác</h4>\n          <p>Chủ thể được hỏi bắt buộc ở <strong>Cách 3</strong>: <em>Сколько вам лет? - Мне двадцать лет. Моему брату 25 лет.</em></p>\n\n          <h4>3. Cấu trúc Trạng thái vô nhân xưng & Cần phải</h4>\n          <ul>\n            <li><em>Мне холодно.</em> (Tôi thấy lạnh); <em>Ему скучно.</em> (Anh ấy thấy buồn chán).</li>\n            <li><em>Студенту нужно много читать.</em> (Sinh viên cần phải đọc nhiều).</li>\n          </ul>\n        "
        },
        {
          "id": "a2_3",
          "title": "Bài 3: Cách 5 - Phương tiện, Đồng hành & Nghề nghiệp",
          "subtitle": "Творительный падеж (Кем? Чем? С кем? С чем?)",
          "content": "\n          <h4>1. Đồng hành với giới từ C (Cùng với ai/cái gì)</h4>\n          <p>Đuôi số ít: Giống đực/trung: <strong>-ом / -ем</strong>; Giống cái: <strong>-ой (-ей) / -ью</strong>.</p>\n          <ul>\n            <li><em>Я иду в кино с другом / с подругой.</em> (Tôi đi xem phim cùng bạn trai / bạn gái).</li>\n            <li><em>Чай с сахаром и с лимоном.</em> (Trà với đường và chanh).</li>\n          </ul>\n\n          <h4>2. Nghề nghiệp sau các động từ быть, стать, работать</h4>\n          <ul>\n            <li><em>Мой отец работает врачом.</em> (Bố tôi làm bác sĩ).</li>\n            <li><em>Анна хочет стать известной актрисой.</em> (Anna muốn trở thành diễn viên nổi tiếng).</li>\n          </ul>\n\n          <h4>3. Phương tiện / Công cụ (Không có giới từ C)</h4>\n          <ul>\n            <li><em>писать ручкой</em> (viết bằng bút), <em>есть ложкой</em> (ăn bằng thìa).</li>\n          </ul>\n        "
        },
        {
          "id": "a2_4",
          "title": "Bài 4: Hoàn thiện Biến cách Tính từ & Đại từ",
          "subtitle": "Склонение прилагательных и местоимений",
          "content": "\n          <h4>Bảng tổng hợp Đuôi Tính từ 6 Cách (Số ít & Số nhiều)</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Cách</th><th>Đực (Мужской)</th><th>Trung (Средний)</th><th>Cái (Женский)</th><th>Số nhiều (Множественное)</th></tr></thead>\n            <tbody>\n              <tr><td>Cách 1</td><td>-ый / -ий / -ой</td><td>-ое / -ее</td><td>-ая / -яя</td><td>-ые / -ие</td></tr>\n              <tr><td>Cách 2</td><td>-ого / -его</td><td>-ого / -его</td><td>-ой / -ей</td><td>-ых / -их</td></tr>\n              <tr><td>Cách 3</td><td>-ому / -ему</td><td>-ому / -ему</td><td>-ой / -ей</td><td>-ым / -им</td></tr>\n              <tr><td>Cách 4</td><td>Bất động vật=C1; Động vật=C2</td><td>Như Cách 1</td><td>-ую / -юю</td><td>Bất động vật=C1; Động vật=C2</td></tr>\n              <tr><td>Cách 5</td><td>-ым / -им</td><td>-ым / -им</td><td>-ой / -ей</td><td>-ыми / -ими</td></tr>\n              <tr><td>Cách 6</td><td>-ом / -ем</td><td>-ом / -ем</td><td>-ой / -ей</td><td>-ых / -их</td></tr>\n            </tbody>\n          </table>\n        "
        },
        {
          "id": "a2_5",
          "title": "Bài 5: Bản chất Thể động từ (НСВ vs СВ)",
          "subtitle": "Вид глагола: Несовершенный и Совершенный вид",
          "content": "\n          <h4>So sánh đối chiếu НСВ và СВ</h4>\n          <table class=\"flat-table\">\n            <thead><tr><th>Yếu tố</th><th>Chưa hoàn thành thể (НСВ)</th><th>Hoàn thành thể (СВ)</th></tr></thead>\n            <tbody>\n              <tr><td>Bản chất</td><td>Quá trình, thời lượng hành động kéo dài</td><td>Kết quả, sự hoàn tất trọn vẹn</td></tr>\n              <tr><td>Tính lặp lại</td><td>Thường xuyên (<em>всегда, часто, каждый день</em>)</td><td>Một lần duy nhất, kết thúc dứt điểm (<em>вчера, вдруг, сразу</em>)</td></tr>\n              <tr><td>Các thì</td><td>Quá khứ, Hiện tại, Tương lai ghép (<em>буду делать</em>)</td><td>Chỉ có Quá khứ (<em>сделал</em>) và Tương lai đơn (<em>сделаю</em>)</td></tr>\n            </tbody>\n          </table>\n          <p><strong>Ví dụ đối chiếu:</strong></p>\n          <ul>\n            <li><em>Вчера я <strong>писал</strong> письмо целый час.</em> (Quá trình tốn 1 giờ -> dùng НСВ).</li>\n            <li><em>Я <strong>написал</strong> письмо и отправил его.</em> (Đã viết xong và gửi đi -> dùng СВ).</li>\n          </ul>\n        "
        },
        {
          "id": "a2_6",
          "title": "Bài 6: Động từ chuyển động cơ bản không tiền tố",
          "subtitle": "Глаголы движения без приставок",
          "content": "\n          <h4>4 Cặp động từ chuyển động cơ bản</h4>\n          <div class=\"flat-grid-2\">\n            <div class=\"flat-box\">\n              <h5>1 Chiều (Định hướng tại 1 thời điểm)</h5>\n              <ul>\n                <li><strong>Идти</strong>: đi bộ (đang đi)</li>\n                <li><strong>Ехать</strong>: đi xe (đang đi)</li>\n                <li><strong>Лететь</strong>: đang bay</li>\n                <li><strong>Плыть</strong>: đang bơi</li>\n              </ul>\n              <p><em>Сейчас я <strong>иду</strong> в библиотеку.</em></p>\n            </div>\n            <div class=\"flat-box\">\n              <h5>Đa chiều (Thường xuyên / Khứ hồi)</h5>\n              <ul>\n                <li><strong>Ходить</strong>: đi bộ (thường xuyên/đã về)</li>\n                <li><strong>Ездить</strong>: đi xe (thường xuyên/đã về)</li>\n                <li><strong>Летать</strong>: bay thường xuyên</li>\n                <li><strong>Плавать</strong>: bơi lội chung</li>\n              </ul>\n              <p><em>Вчера мы <strong>ходили</strong> в театр (đã đi và về).</em></p>\n            </div>\n          </div>\n        "
        },
        {
          "id": "a2_7",
          "title": "Bài 7: Động từ phản thân (-ся / -сь)",
          "subtitle": "Возвратные глаголы",
          "content": "\n          <h4>1. Quy tắc thêm hậu tố</h4>\n          <ul>\n            <li>Sau phụ âm: thêm <strong>-ся</strong> (<em>он учится, они одеваются</em>).</li>\n            <li>Sau nguyên âm: thêm <strong>-сь</strong> (<em>я учусь, мы одеваемся</em>).</li>\n          </ul>\n\n          <h4>2. Các nhóm ý nghĩa thông dụng</h4>\n          <ul>\n            <li><strong>Hành động hướng vào bản thân:</strong> <em>мыться</em> (tắm), <em>одеваться</em> (mặc quần áo), <em>причёсываться</em> (chải đầu).</li>\n            <li><strong>Hành động tương hỗ qua lại:</strong> <em>встречаться</em> (gặp gỡ nhau), <em>целоваться</em> (hôn nhau), <em>переписываться</em> (nhắn tin cho nhau).</li>\n            <li><strong>Cảm xúc, tâm trạng:</strong> <em>радоваться</em> (vui mừng), <em>бояться</em> (sợ hãi), <em>сердиться</em> (tức giận).</li>\n          </ul>\n        "
        },
        {
          "id": "a2_8",
          "title": "Bài 8: Cú pháp câu phức với который, потому что, поэтому",
          "subtitle": "Сложноподчинённые предложения",
          "content": "\n          <h4>1. Đại từ quan hệ КОТОРЫЙ</h4>\n          <p>Hòa hợp giống và số với danh từ đứng trước, nhưng biến cách theo chức năng cú pháp trong mệnh đề phụ:</p>\n          <ul>\n            <li><em>Вот студент, <strong>который</strong> приехал из Ханоя.</em> (Giống đực, C1 làm chủ ngữ).</li>\n            <li><em>Вот книга, <strong>которую</strong> я вчера прочитал.</em> (Giống cái, C4 làm tân ngữ).</li>\n            <li><em>Вот дом, в <strong>котором</strong> я живу.</em> (Giống đực, C6 nơi chốn).</li>\n          </ul>\n\n          <h4>2. Cặp liên từ Nguyên nhân - Kết quả</h4>\n          <ul>\n            <li><strong>Потому что</strong> (Bởi vì - chỉ nguyên nhân): <em>Я не пришёл на урок, <strong>потому что</strong> заболел.</em></li>\n            <li><strong>Поэтому</strong> (Vì vậy - chỉ kết quả): <em>Я заболел, <strong>поэтому</strong> не пришёл на урок.</em></li>\n          </ul>\n        "
        }
      ]
    },
    {
      "id": "b1",
      "code": "B1",
      "name": "Trung cấp & Tiêu chuẩn Đại học (TRKI-1)",
      "desc": "Làm chủ động từ chuyển động có tiền tố (по-, при-, у-, вы-...), Phân từ (Причастие), Trạng từ động từ (Деепричастие) và cú pháp văn bản học thuật.",
      "badgeColor": "#e67e22",
      "totalLessons": 8,
      "lessons": [
        {
          "id": "b1_1",
          "title": "Bài 1: Động từ chuyển động có tiền tố không gian",
          "subtitle": "Глаголы движения с приставками",
          "content": "\n          <h4>Bản chất Tiền tố không gian</h4>\n          <p>Khi thêm tiền tố vào động từ 1 chiều (идти/ехать) -> tạo động từ <strong>Hoàn thành thể (СВ)</strong>. Thêm vào động từ đa chiều (ходить/ездить) -> tạo động từ <strong>Chưa hoàn thành thể (НСВ)</strong>.</p>\n          <table class=\"flat-table\">\n            <thead><tr><th>Tiền tố</th><th>Ý nghĩa</th><th>Ví dụ Đi bộ (СВ/НСВ)</th><th>Giới từ đi kèm</th></tr></thead>\n            <tbody>\n              <tr><td><strong>ПРИ-</strong></td><td>Đến nơi, xuất hiện</td><td>прийти / приходить</td><td>в, на, к</td></tr>\n              <tr><td><strong>У-</strong></td><td>Rời đi hẳn, đi xa</td><td>уйти / уходить</td><td>из, с, от</td></tr>\n              <tr><td><strong>В- (ВО-)</strong></td><td>Đi vào trong</td><td>войти / входить</td><td>в + C4</td></tr>\n              <tr><td><strong>ВЫ-</strong></td><td>Đi ra ngoài</td><td>выйти / выходить</td><td>из + C2</td></tr>\n              <tr><td><strong>ПОД-</strong></td><td>Tiến lại gần</td><td>подойти / подходить</td><td>к + C3</td></tr>\n              <tr><td><strong>ОТ-</strong></td><td>Lùi ra xa</td><td>отойти / отходить</td><td>от + C2</td></tr>\n              <tr><td><strong>ДО-</strong></td><td>Đến được đích</td><td>дойти / доходить</td><td>до + C2</td></tr>\n              <tr><td><strong>ПЕРЕ-</strong></td><td>Băng qua đường</td><td>перейти / переходить</td><td>через + C4</td></tr>\n              <tr><td><strong>ЗА-</strong></td><td>Tạt qua trên đường</td><td>зайти / заходить</td><td>в, к</td></tr>\n            </tbody>\n          </table>\n        "
        },
        {
          "id": "b1_2",
          "title": "Bài 2: Phân từ chủ động (Hiện tại & Quá khứ)",
          "subtitle": "Действительные причастия",
          "content": "\n          <h4>1. Thời Hiện tại</h4>\n          <p>Đuôi <strong>-ущ- / -ющ-</strong> (Nhóm I), <strong>-ащ- / -ящ-</strong> (Nhóm II):</p>\n          <ul>\n            <li><em>читать -> чита́ющий</em> (người đang đọc)</li>\n            <li><em>говорить -> говоря́щий</em> (người đang nói)</li>\n            <li><em>Студент, **читающий** книгу, сидит у окна.</em></li>\n          </ul>\n\n          <h4>2. Thời Quá khứ</h4>\n          <p>Đuôi <strong>-вш-</strong> (sau nguyên âm) hoặc <strong>-ш-</strong> (sau phụ âm):</p>\n          <ul>\n            <li><em>прочитать -> прочита́вший</em> (người đã đọc xong)</li>\n            <li><em>погибнуть -> поги́бший</em> (người đã hy sinh)</li>\n            <li><em>Человек, **написавший** это письмо, живёт в Москве.</em></li>\n          </ul>\n        "
        },
        {
          "id": "b1_3",
          "title": "Bài 3: Phân từ bị động đầy đủ & Ngắn đuôi",
          "subtitle": "Страдательные причастия",
          "content": "\n          <h4>1. Thời Quá khứ (Dạng đầy đủ)</h4>\n          <p>Đuôi <strong>-нн- / -енн- / -т-</strong>:</p>\n          <ul>\n            <li><em>написать -> напи́санный</em> (đã được viết)</li>\n            <li><em>открыть -> откры́тый</em> (đã được mở)</li>\n            <li><em>Статья, **написанная** профессором, очень интересная.</em></li>\n          </ul>\n\n          <h4>2. Dạng ngắn đuôi (Краткие причастия) làm vị ngữ câu bị động</h4>\n          <ul>\n            <li><em>Книга прочитана.</em> (Quyển sách đã được đọc xong).</li>\n            <li><em>Дом был построен в прошлом году.</em> (Ngôi nhà đã được xây năm ngoái).</li>\n            <li><em>Все билеты проданы.</em> (Mọi vé đã được bán hết).</li>\n          </ul>\n        "
        },
        {
          "id": "b1_4",
          "title": "Bài 4: Trạng từ động từ / Phó từ phân từ (Деепричастие)",
          "subtitle": "Деепричастие несовершенного и совершенного вида",
          "content": "\n          <h4>Quy tắc vàng: Bắt buộc cùng chủ ngữ!</h4>\n          <ul>\n            <li><strong>Chưa hoàn thành thể (НСВ) - Đuôi -а / -я:</strong> Diễn tả hành động phụ diễn ra <em>đồng thời song song</em> với hành động chính:\n              <br><em>Он читал газету, **слушая** музыку.</em> (Vừa đọc báo vừa nghe nhạc).\n            </li>\n            <li><strong>Hoàn thành thể (СВ) - Đuôi -в / -вши / -ши:</strong> Diễn tả hành động phụ <em>đã hoàn tất trước</em> hành động chính:\n              <br><em>**Придя** домой, он сразу лёг спать.</em> (Về đến nhà, anh ấy đi ngủ ngay).\n              <br><em>**Закончив** университет, она уехала на родину.</em> (Tốt nghiệp xong, cô ấy về nước).\n            </li>\n          </ul>\n        "
        },
        {
          "id": "b1_5",
          "title": "Bài 5: Câu vô nhân xưng nâng cao",
          "subtitle": "Безличные предложения в научном стиле",
          "content": "\n          <h4>Các mô hình vô nhân xưng chính</h4>\n          <ul>\n            <li>Hiện tượng tự nhiên & thời tiết: <em>Смеркается, холодает, морозит</em>.</li>\n            <li>Trạng thái thể chất & tâm lý (+ Cách 3): <em>Мне не спится, ему нездоровится</em>.</li>\n            <li>Chỉ sự cần thiết hoặc cấm đoán: <em>Можно, нельзя, следует, необходимо, требуется</em>.</li>\n          </ul>\n        "
        },
        {
          "id": "b1_6",
          "title": "Bài 6: Mệnh đề mục đích với ЧТОБЫ",
          "subtitle": "Придаточные предложения цели",
          "content": "\n          <h4>Phân biệt cùng và khác chủ ngữ</h4>\n          <ul>\n            <li><strong>Cùng chủ ngữ:</strong> Dùng động từ nguyên thể (Инфинитив):\n              <br><em>Я приехал в Россию, **чтобы учиться** в университете.</em>\n            </li>\n            <li><strong>Khác chủ ngữ:</strong> Bắt buộc dùng động từ ở <strong>thì Quá khứ</strong>:\n              <br><em>Я хочу, **чтобы ты успешно сдал** экзамен.</em>\n              <br><em>Преподаватель объяснил ещё раз, **чтобы студенты поняли** правило.</em>\n            </li>\n          </ul>\n        "
        },
        {
          "id": "b1_7",
          "title": "Bài 7: Mệnh đề Nhượng bộ & Giả định",
          "subtitle": "Уступительные и Условные предложения",
          "content": "\n          <h4>1. Mệnh đề nhượng bộ với ХОТЯ và НЕСМОТРЯ НА ТО ЧТО</h4>\n          <p><em><strong>Хотя</strong> погода была плохая, мы всё равно пошли гулять.</em></p>\n          <p><em><strong>Несмотря на то что</strong> он устал, он продолжал работать.</em></p>\n\n          <h4>2. Mệnh đề giả định điều kiện không có thật: ЕСЛИ БЫ ... ТО БЫ...</h4>\n          <p><em>Если бы у меня было больше времени, я бы с удовольствием выучил ещё один язык.</em></p>\n        "
        },
        {
          "id": "b1_8",
          "title": "Bài 8: Đọc báo chí & Từ vựng chủ đề hiện đại",
          "subtitle": "Чтение публицистики и Современная лексика",
          "content": "\n          <h4>Từ nối liên kết văn bản báo chí</h4>\n          <ul>\n            <li><em>Во-первых, во-вторых, в-третьих</em> (Thứ nhất, thứ hai, thứ ba)</li>\n            <li><em>С одной стороны ..., с другой стороны ...</em> (Một mặt thì ..., mặt khác thì ...)</li>\n            <li><em>Таким образом, следовательно</em> (Như vậy, do đó)</li>\n            <li><em>По моему мнению, с моей точки зрения</em> (Theo quan điểm của tôi)</li>\n          </ul>\n        "
        }
      ]
    },
    {
      "id": "b2",
      "code": "B2-C1",
      "name": "Cao cấp & Học thuật chuyên sâu (TRKI-2 & 3)",
      "desc": "Ngữ pháp thuần chất (Чистая грамматика), phân biệt các phong cách chức năng, đọc hiểu văn học và dịch thuật chuyên nghiệp.",
      "badgeColor": "#8e44ad",
      "totalLessons": 6,
      "lessons": [
        {
          "id": "b2_1",
          "title": "Bài 1: Sắc thái thể trong Mệnh lệnh & Phủ định",
          "subtitle": "Тонкости вида глагола в императиве и отрицании",
          "content": "\n          <h4>1. Phủ định câu mệnh lệnh (Не + Động từ)</h4>\n          <ul>\n            <li><strong>Dùng НСВ để CẤM ĐOÁN hoặc khuyên không nên làm:</strong> <em>Не открывай окно!</em> (Đừng mở cửa sổ!).</li>\n            <li><strong>Dùng СВ với 'смотри, не...' để CẢNH BÁO nguy cơ ngoài ý muốn:</strong> <em>Смотри, не упади!</em> (Coi chừng ngã đấy!); <em>Не забудь ключи!</em> (Đừng quên chìa khóa!).</li>\n          </ul>\n\n          <h4>2. Hiện tượng hủy bỏ kết quả (Аннулирование результата)</h4>\n          <p>Khi hành động đã hoàn tất trong quá khứ nhưng kết quả hiện tại đã bị đảo ngược, bắt buộc dùng <strong>НСВ</strong>:</p>\n          <ul>\n            <li><em>Кто открывал окно?</em> (Ai đã mở cửa sổ thế? - hiện tại cửa sổ đã đóng rồi).</li>\n            <li>So sánh với: <em>Кто открыл окно?</em> (Ai đã mở cửa sổ thế? - hiện tại cửa sổ vẫn đang mở toang).</li>\n          </ul>\n        "
        },
        {
          "id": "b2_2",
          "title": "Bài 2: Phân biệt Đại từ bất định (-то, -нибудь, кое-, не-)",
          "subtitle": "Неопределённые местоимения",
          "content": "\n          <h4>So sánh bản chất 4 tiền/hậu tố:</h4>\n          <ul>\n            <li><strong>-ТО (кто-то, что-то, где-то):</strong> Có thật cụ thể nhưng người nói không rõ danh tính chi tiết: <em>Кто-то оставил эту сумку.</em> (Ai đó đã để lại cái túi này).</li>\n            <li><strong>-НИБУДЬ (кто-нибудь, что-нибудь):</strong> Bất kỳ ai, bất kỳ cái gì, đối tượng chưa xác định, dùng trong câu hỏi hoặc giả định: <em>Ты купил что-нибудь к чаю?</em> (Bạn có mua gì uống trà không?).</li>\n            <li><strong>КОЕ- (кое-кто, кое-что):</strong> Người nói biết rất rõ nhưng cố ý giấu hoặc không muốn nói thẳng: <em>Я кое-что слышал об этом.</em> (Tôi có nghe phong phanh vài điều về vụ này).</li>\n            <li><strong>НЕ- (некий, нечто):</strong> Sắc thái văn phong trang trọng, sách vở: <em>произошло нечто невероятное</em> (đã xảy ra một điều kỳ diệu).</li>\n          </ul>\n        "
        },
        {
          "id": "b2_3",
          "title": "Bài 3: Cú pháp phân nhánh đa tầng Văn bản Khoa học",
          "subtitle": "Сложный синтаксис научного текста",
          "content": "\n          <h4>Cấu trúc danh hóa và liên từ kép</h4>\n          <ul>\n            <li>Danh hóa hành động: <em>исследовать -> исследование, развивать -> развитие</em>.</li>\n            <li>Giới từ kép hành chính: <em>в целях, на основании, в соответствии с, по мере того как</em>.</li>\n          </ul>\n        "
        },
        {
          "id": "b2_4",
          "title": "Bài 4: 4 Phong cách chức năng ngôn ngữ",
          "subtitle": "Функциональные стили речи",
          "content": "\n          <h4>4 Phong cách chính:</h4>\n          <ul>\n            <li><strong>Khoa học (Научный):</strong> Câu bị động, thuật ngữ chuyên ngành chính xác, câu vô nhân xưng.</li>\n            <li><strong>Báo chí (Публицистический):</strong> Tính thời sự, biểu cảm, kêu gọi và tác động xã hội.</li>\n            <li><strong>Hành chính (Официально-деловой):</strong> Chuẩn mực khuôn mẫu pháp lý, không biểu cảm.</li>\n            <li><strong>Văn nghệ (Художественный):</strong> Tác phẩm văn học (Dostoevsky, Tolstoy, Pushkin), sử dụng đa dạng biện pháp tu từ, ẩn dụ.</li>\n          </ul>\n        "
        },
        {
          "id": "b2_5",
          "title": "Bài 5: Thành ngữ & Quán ngữ tiếng Nga (Фразеологизмы)",
          "subtitle": "Русские фразеологизмы и устойчивые выражения",
          "content": "\n          <h4>Các thành ngữ phổ biến nhất</h4>\n          <ul>\n            <li><em>Бить баклуши</em> - Ngồi chơi xơi nước, lười biếng.</li>\n            <li><em>Водить за нос</em> - Dắt mũi, lừa dối ai đó.</li>\n            <li><em>Повесить нос</em> - Buồn bã, ủ rũ, chán nản.</li>\n            <li><em>Как снег на голову</em> - Bất ngờ ập đến như sét đánh ngang tai.</li>\n            <li><em>Делать из мухи слона</em> - Chuyện bé xé ra to.</li>\n          </ul>\n        "
        },
        {
          "id": "b2_6",
          "title": "Bài 6: Văn học Nga nguyên bản & Dịch thuật chuyên nghiệp",
          "subtitle": "Чтение классики и Переводческая практика",
          "content": "\n          <h4>Kỹ thuật dịch thuật nâng cao</h4>\n          <ul>\n            <li>Xử lý hiện tượng không có từ tương đương (Лакуны).</li>\n            <li>Chuyển dịch các sắc thái biểu cảm, câu đảo ngữ trong văn học kinh điển (Dostoevsky, Tolstoy).</li>\n            <li>Bảo tồn phong cách văn phong nguyên tác sang tiếng Việt.</li>\n          </ul>\n        "
        }
      ]
    }
  ],
  "exercises": [
    {
      "id": "EX_A1_001",
      "level": "A1",
      "lessonId": "a1_2",
      "topic": "Phát âm & Giảm âm",
      "type": "single",
      "question": "Từ 'молоко́' (sữa) được phát âm chuẩn như thế nào theo quy tắc giảm âm của chữ О không mang trọng âm?",
      "options": [
        "[молоко́]",
        "[малако́]",
        "[мулуку́]",
        "[молако́]"
      ],
      "correctAnswer": 1,
      "explanation": "Chữ О đứng trước trọng âm và không mang trọng âm sẽ bị giảm âm thành âm [а]. Do đó, 'молоко' được phát âm là [малако́]."
    },
    {
      "id": "EX_A1_002",
      "level": "A1",
      "lessonId": "a1_3",
      "topic": "Vô thanh hóa phụ âm",
      "type": "single",
      "question": "Phụ âm cuối của từ 'хлеб' (bánh mì) khi phát âm sẽ bị vô thanh hóa thành âm nào?",
      "options": [
        "Âm [б]",
        "Âm [п]",
        "Âm [ф]",
        "Âm [в]"
      ],
      "correctAnswer": 1,
      "explanation": "Phụ âm hữu thanh 'Б' khi đứng ở cuối từ sẽ bị vô thanh hóa thành phụ âm vô thanh tương ứng là [П] -> phát âm là [хлеп]."
    },
    {
      "id": "EX_A1_003",
      "level": "A1",
      "lessonId": "a1_4",
      "topic": "Giống của danh từ",
      "type": "single",
      "question": "Từ 'время' (thời gian) thuộc giống nào trong tiếng Nga?",
      "options": [
        "Giống đực (Мужской род)",
        "Giống cái (Женский род)",
        "Giống trung (Средний род)",
        "Số nhiều không có giống"
      ],
      "correctAnswer": 2,
      "explanation": "'Время' là 1 trong 10 danh từ đặc biệt tận cùng bằng đuôi '-мя' (время, имя, знамя...), thuộc GIỐNG TRUNG (Средний род - Оно)."
    },
    {
      "id": "EX_A1_004",
      "level": "A1",
      "lessonId": "a1_5",
      "topic": "Số nhiều danh từ",
      "type": "single",
      "question": "Dạng số nhiều bất quy tắc của từ 'друг' (người bạn) là gì?",
      "options": [
        "други",
        "другы",
        "друзья",
        "друзьями"
      ],
      "correctAnswer": 2,
      "explanation": "Danh từ 'друг' có dạng số nhiều bất quy tắc đặc biệt là 'друзья' (những người bạn)."
    },
    {
      "id": "EX_A1_005",
      "level": "A1",
      "lessonId": "a1_6",
      "topic": "Đại từ sở hữu",
      "type": "single",
      "question": "Điền đại từ sở hữu thích hợp: 'Где лежит _____ (книга)?'",
      "options": [
        "мой",
        "моя",
        "моё",
        "мои"
      ],
      "correctAnswer": 1,
      "explanation": "'Книга' là danh từ giống cái (Она), do đó đại từ sở hữu giống cái đi kèm phải là 'моя'."
    },
    {
      "id": "EX_A1_006",
      "level": "A1",
      "lessonId": "a1_7",
      "topic": "Chia động từ thì Hiện tại",
      "type": "single",
      "question": "Chia động từ trong ngoặc: 'Они сейчас (жить) ________ в Москве.'",
      "options": [
        "живут",
        "живёт",
        "живем",
        "живите"
      ],
      "correctAnswer": 0,
      "explanation": "Động từ bất quy tắc 'жить' chia ở ngôi Họ (Они) là 'живут' (я живу, ты живёшь, они живут)."
    },
    {
      "id": "EX_A1_007",
      "level": "A1",
      "lessonId": "a1_9",
      "topic": "Cách 6 - Nơi chốn",
      "type": "single",
      "question": "Điền dạng đúng của từ trong ngoặc: 'Студент сейчас занимается в (библиотека) ________.'",
      "options": [
        "библиотеку",
        "библиотеки",
        "библиотеке",
        "библиотекой"
      ],
      "correctAnswer": 2,
      "explanation": "Hỏi nơi chốn (Ở đâu? - Где?) với giới từ 'в' yêu cầu danh từ ở Cách 6 (Предложный падеж). Danh từ giống cái 'библиотека' đổi đuôi -а thành -е -> 'в библиотеке'."
    },
    {
      "id": "EX_A1_008",
      "level": "A1",
      "lessonId": "a1_10",
      "topic": "Cách 4 - Tân ngữ trực tiếp",
      "type": "single",
      "question": "Chọn câu chia đúng Cách 4: 'Mỗi tối tôi đều đọc một cuốn báo thú vị.'",
      "options": [
        "Каждый вечер я читаю интересная газета.",
        "Каждый вечер я читаю интересную газету.",
        "Каждый вечер я читаю интересной газете.",
        "Каждый вечер я читаю интересной газетой."
      ],
      "correctAnswer": 1,
      "explanation": "Đọc cái gì (Что?) dùng Cách 4. Danh từ giống cái 'газета' đổi thành 'газету', tính từ giống cái 'интересная' đổi thành 'интересную'."
    },
    {
      "id": "EX_A1_009",
      "level": "A1",
      "lessonId": "a1_8",
      "topic": "Động từ thì Quá khứ",
      "type": "single",
      "question": "Chọn dạng đúng của động từ cho chủ ngữ 'Анна': 'Вчера Анна долго (читать) ________.'",
      "options": [
        "читал",
        "читала",
        "читало",
        "читали"
      ],
      "correctAnswer": 1,
      "explanation": "Chủ ngữ 'Анна' là danh từ giống cái (Она), nên động từ thời quá khứ có đuôi là '-ла' -> 'читала'."
    },
    {
      "id": "EX_A1_010",
      "level": "A1",
      "lessonId": "a1_10",
      "topic": "Cách 4 - Hướng chuyển động",
      "type": "single",
      "question": "Điền từ thích hợp: 'Утром отец едет на ________ (работа).'",
      "options": [
        "работе",
        "работу",
        "работой",
        "работы"
      ],
      "correctAnswer": 1,
      "explanation": "Câu hỏi 'Đi đâu?' (Куда?) dùng giới từ 'на' + Cách 4. Danh từ 'работа' đổi thành 'работу'."
    },
    {
      "id": "EX_A2_001",
      "level": "A2",
      "lessonId": "a2_1",
      "topic": "Cách 2 - Phủ định với НЕТ",
      "type": "single",
      "question": "Điền dạng đúng của từ trong ngoặc: 'К сожалению, у меня сейчас нет ________ (время).'",
      "options": [
        "время",
        "времени",
        "временем",
        "времене"
      ],
      "correctAnswer": 1,
      "explanation": "Sau từ phủ định 'нет' danh từ chia ở Cách 2. Danh từ giống trung tận cùng -мя có dạng Cách 2 là 'времени'."
    },
    {
      "id": "EX_A2_002",
      "level": "A2",
      "lessonId": "a2_1",
      "topic": "Số đếm & Biến cách",
      "type": "single",
      "question": "Điền từ thích hợp sau số 3: 'В комнате стоят три ________ (стол).'",
      "options": [
        "стол",
        "стола",
        "столов",
        "столе"
      ],
      "correctAnswer": 1,
      "explanation": "Sau các số 2, 3, 4 danh từ chia ở Cách 2 số ít. Danh từ giống đực 'стол' có Cách 2 số ít là 'стола'."
    },
    {
      "id": "EX_A2_003",
      "level": "A2",
      "lessonId": "a2_2",
      "topic": "Cách 3 - Tuổi tác",
      "type": "single",
      "question": "Điền đại từ đúng: '________ (Я) исполнилось двадцать лет.'",
      "options": [
        "Меня",
        "Мне",
        "Мной",
        "Обо мне"
      ],
      "correctAnswer": 1,
      "explanation": "Cấu trúc chỉ tuổi tác bắt buộc dùng chủ thể ở Cách 3 (Дательный падеж): đại từ 'Я' chuyển thành 'Мне'."
    },
    {
      "id": "EX_A2_004",
      "level": "A2",
      "lessonId": "a2_3",
      "topic": "Cách 5 - Nghề nghiệp",
      "type": "single",
      "question": "Điền dạng đúng của từ: 'Мой старший брат хочет стать ________ (врач).'",
      "options": [
        "врач",
        "врача",
        "врачом",
        "врачу"
      ],
      "correctAnswer": 2,
      "explanation": "Sau động từ 'стать' (trở thành) danh từ chỉ nghề nghiệp chia ở Cách 5 (Творительный падеж): 'врач -> врачом'."
    },
    {
      "id": "EX_A2_005",
      "level": "A2",
      "lessonId": "a2_5",
      "topic": "Thể động từ (НСВ/СВ)",
      "type": "single",
      "question": "Chọn thể động từ chính xác: 'Вчера я два часа (писал / написал) ________ сочинение.'",
      "options": [
        "писал",
        "написал",
        "напишу",
        "пишу"
      ],
      "correctAnswer": 0,
      "explanation": "Có trạng ngữ 'два часа' nhấn mạnh quá trình hành động kéo dài tốn thời gian, do đó bắt buộc dùng động từ Chưa hoàn thành thể (НСВ) -> 'писал'."
    },
    {
      "id": "EX_A2_006",
      "level": "A2",
      "lessonId": "a2_5",
      "topic": "Thể động từ (НСВ/СВ)",
      "type": "single",
      "question": "Chọn động từ đúng: 'Он быстро ________ (решал / решил) эту задачу и пошёл гулять.'",
      "options": [
        "решал",
        "решил",
        "решает",
        "будет решать"
      ],
      "correctAnswer": 1,
      "explanation": "Hành động đã hoàn thành trọn vẹn và đạt kết quả để chuyển sang hành động tiếp theo -> dùng Hoàn thành thể (СВ) 'решил'."
    },
    {
      "id": "EX_A2_007",
      "level": "A2",
      "lessonId": "a2_6",
      "topic": "Động từ chuyển động",
      "type": "single",
      "question": "Điền từ thích hợp: 'Куда ты сейчас ________ (идёшь / ходишь)?'",
      "options": [
        "идёшь",
        "ходишь",
        "пошёл",
        "пойдёшь"
      ],
      "correctAnswer": 0,
      "explanation": "Hành động đang diễn ra tại thời điểm nói ('сейчас') theo một hướng xác định -> dùng động từ 1 chiều 'идти' (ngôi ты -> 'идёшь')."
    },
    {
      "id": "EX_A2_008",
      "level": "A2",
      "lessonId": "a2_6",
      "topic": "Động từ chuyển động",
      "type": "single",
      "question": "Điền từ thích hợp: 'Вчера вечером мы ________ (шли / ходили) в театр на новый спектакль.'",
      "options": [
        "шли",
        "ходили",
        "ехали",
        "пошли"
      ],
      "correctAnswer": 1,
      "explanation": "Chuyến đi khứ hồi trong quá khứ (đến rạp hát xem kịch và nay đã trở về nhà) -> dùng động từ đa chiều 'ходили'."
    },
    {
      "id": "EX_A2_009",
      "level": "A2",
      "lessonId": "a2_8",
      "topic": "Đại từ quan hệ который",
      "type": "single",
      "question": "Điền đại từ đúng: 'Вот книга, о ________ (который) мы вчера говорили.'",
      "options": [
        "которую",
        "которой",
        "котором",
        "которых"
      ],
      "correctAnswer": 1,
      "explanation": "'Книга' là danh từ giống cái. Đi với giới từ 'о' (về cái gì) đòi hỏi Cách 6 -> 'о которой'."
    },
    {
      "id": "EX_A2_010",
      "level": "A2",
      "lessonId": "a2_8",
      "topic": "Liên từ câu phức",
      "type": "single",
      "question": "Điền liên từ thích hợp: 'Он много занимался, ________ успешно сдал все экзамены.'",
      "options": [
        "потому что",
        "поэтому",
        "чтобы",
        "если"
      ],
      "correctAnswer": 1,
      "explanation": "Vế sau là KẾT QUẢ của hành động chăm chỉ ở vế trước, do đó dùng liên từ 'поэтому' (vì vậy)."
    },
    {
      "id": "EX_B1_001",
      "level": "B1",
      "lessonId": "b1_1",
      "topic": "Động từ chuyển động tiền tố",
      "type": "single",
      "question": "Điền động từ đúng: 'Поезд медленно ________ (подошёл / отошёл) к перрону вокзала.'",
      "options": [
        "подошёл",
        "отошёл",
        "перешёл",
        "вошёл"
      ],
      "correctAnswer": 0,
      "explanation": "Tiền tố 'ПОД-' chỉ sự tiến lại gần, thường đi kèm với giới từ 'к + Cách 3' -> 'подошёл к перрону'."
    },
    {
      "id": "EX_B1_002",
      "level": "B1",
      "lessonId": "b1_1",
      "topic": "Động từ chuyển động tiền tố",
      "type": "single",
      "question": "Để chỉ hành động 'băng qua đường', người Nga dùng động từ nào?",
      "options": [
        "войти через улицу",
        "перейти улицу",
        "дойти улицу",
        "уйти улицу"
      ],
      "correctAnswer": 1,
      "explanation": "Tiền tố 'ПЕРЕ-' mang ý nghĩa vượt qua bề mặt, băng qua không gian -> 'перейти улицу' (hoặc перейти через улицу)."
    },
    {
      "id": "EX_B1_003",
      "level": "B1",
      "lessonId": "b1_2",
      "topic": "Phân từ chủ động",
      "type": "single",
      "question": "Chuyển câu sau sang cụm phân từ: 'Студент, который читает книгу, сидит у окна.'",
      "options": [
        "Студент, читавший книгу, сидит у окна.",
        "Студент, читающий книгу, сидит у окна.",
        "Студент, прочитанный книгу, сидит у окна.",
        "Студент, читая книгу, сидит у окна."
      ],
      "correctAnswer": 1,
      "explanation": "Động từ thời hiện tại 'читает' chuyển thành phân từ chủ động thời hiện tại 'читающий' hòa hợp với danh từ giống đực 'студент'."
    },
    {
      "id": "EX_B1_004",
      "level": "B1",
      "lessonId": "b1_3",
      "topic": "Phân từ bị động ngắn đuôi",
      "type": "single",
      "question": "Điền dạng phân từ ngắn đúng: 'Все статьи уже ________ (прочитать) профессором.'",
      "options": [
        "прочитан",
        "прочитана",
        "прочитано",
        "прочитаны"
      ],
      "correctAnswer": 3,
      "explanation": "Chủ ngữ 'статьи' ở dạng số nhiều, do đó vị ngữ phân từ bị động ngắn đuôi phải có đuôi số nhiều '-ы' -> 'прочитаны'."
    },
    {
      "id": "EX_B1_005",
      "level": "B1",
      "lessonId": "b1_4",
      "topic": "Trạng từ động từ (Деепричастие)",
      "type": "single",
      "question": "Điền dạng đúng của Деепричастие: '________ (Узнать) радостную новость, она улыбнулась.'",
      "options": [
        "Узнавая",
        "Узнав",
        "Узнает",
        "Узнавший"
      ],
      "correctAnswer": 1,
      "explanation": "Hành động biết tin đã hoàn tất trước khi mỉm cười -> dùng Деепричастие của động từ Hoàn thành thể (СВ) 'узнать' là 'узнав'."
    },
    {
      "id": "EX_B1_006",
      "level": "B1",
      "lessonId": "b1_6",
      "topic": "Mệnh đề mục đích чтобы",
      "type": "single",
      "question": "Chọn câu đúng khi hai vế KHÁC chủ ngữ: 'Tôi muốn bạn thi đỗ kỳ thi.'",
      "options": [
        "Я хочу, чтобы ты сдать экзамен.",
        "Я хочу, чтобы ты сдал экзамен.",
        "Я хочу, чтобы ты сдашь экзамен.",
        "Я хочу, чтобы ты сдаёшь экзамен."
      ],
      "correctAnswer": 1,
      "explanation": "Trong mệnh đề với 'чтобы' khi hai vế khác chủ ngữ, động từ ở mệnh đề phụ BẮT BUỘC phải chia ở thì Quá khứ -> 'чтобы ты сдал экзамен'."
    },
    {
      "id": "EX_B2_001",
      "level": "B2-C1",
      "lessonId": "b2_1",
      "topic": "Sắc thái thể động từ mệnh lệnh",
      "type": "single",
      "question": "Chọn câu mang ý nghĩa CẢNH BÁO nguy cơ ngoài ý muốn:",
      "options": [
        "Не открывай окно!",
        "Смотри, не упади на льду!",
        "Не трогай этот прибор!",
        "Не звони мне так поздно!"
      ],
      "correctAnswer": 1,
      "explanation": "Để cảnh báo một sự cố bất ngờ ngoài ý muốn có thể xảy ra, người Nga dùng 'смотри, не...' + động từ Hoàn thành thể (СВ) -> 'не упади!'."
    },
    {
      "id": "EX_B2_002",
      "level": "B2-C1",
      "lessonId": "b2_1",
      "topic": "Hủy bỏ kết quả",
      "type": "single",
      "question": "Ngữ cảnh: Bạn bước vào phòng thấy cửa sổ đang ĐÓNG, nhưng có người bảo trước đó phòng rất ngột ngạt nên đã mở ra cho thoáng rồi đóng lại. Câu hỏi chuẩn xác là:",
      "options": [
        "Кто открыл окно?",
        "Кто открывал окно?",
        "Кто откроет окно?",
        "Кто будет открыть окно?"
      ],
      "correctAnswer": 1,
      "explanation": "Hiện tượng hủy bỏ kết quả (kết quả mở cửa không còn tồn tại ở thời điểm nói vì cửa đã đóng lại) bắt buộc dùng động từ Chưa hoàn thành thể (НСВ) -> 'Кто открывал окно?'."
    },
    {
      "id": "EX_B2_003",
      "level": "B2-C1",
      "lessonId": "b2_2",
      "topic": "Đại từ bất định",
      "type": "single",
      "question": "Điền đại từ thích hợp: 'Ты купил ________ (-то / -нибудь) вкусное в магазине?'",
      "options": [
        "что-то",
        "что-нибудь",
        "кое-что",
        "нечто"
      ],
      "correctAnswer": 1,
      "explanation": "Trong câu hỏi nghi vấn chưa xác định đối tượng có tồn tại hay không, bắt buộc dùng hậu tố '-нибудь' -> 'что-нибудь'."
    },
    {
      "id": "EX_B2_004",
      "level": "B2-C1",
      "lessonId": "b2_4",
      "topic": "Phong cách ngôn ngữ",
      "type": "single",
      "question": "Cụm từ 'На основании вышеизложенного приказываю...' thuộc phong cách ngôn ngữ nào?",
      "options": [
        "Phong cách Khoa học (Научный)",
        "Phong cách Hành chính - Công vụ (Официально-деловой)",
        "Phong cách Báo chí (Публицистический)",
        "Phong cách Sinh hoạt (Разговорный)"
      ],
      "correctAnswer": 1,
      "explanation": "Đây là mẫu câu chuẩn mực mang tính mệnh lệnh pháp lý trong văn bản hành chính công vụ (Официально-деловой стиль)."
    }
  ],
  "flashcards": [
    {
      "id": "fc_1",
      "level": "A1",
      "ru": "Здравствуйте",
      "ipa": "[здравствуйт'э]",
      "stress": "Здра́вствуйте",
      "pos": "Từ chào hỏi",
      "vn": "Xin chào (lịch sự, trang trọng)",
      "ex": "Здравствуйте, профессор!"
    },
    {
      "id": "fc_2",
      "level": "A1",
      "ru": "Спасибо",
      "ipa": "[спаси́ба]",
      "stress": "Спаси́бо",
      "pos": "Từ cảm thán",
      "vn": "Cảm ơn",
      "ex": "Большое спасибо за помощь!"
    },
    {
      "id": "fc_3",
      "level": "A1",
      "ru": "Книга",
      "ipa": "[кни́га]",
      "stress": "Кни́га",
      "pos": "Danh từ (giống cái)",
      "vn": "Quyển sách",
      "ex": "Это новая интересная книга."
    },
    {
      "id": "fc_4",
      "level": "A1",
      "ru": "Университет",
      "ipa": "[унивирсит'эт]",
      "stress": "Университе́т",
      "pos": "Danh từ (giống đực)",
      "vn": "Trường đại học",
      "ex": "Я учусь в университете."
    },
    {
      "id": "fc_5",
      "level": "A1",
      "ru": "Друг",
      "ipa": "[друк]",
      "stress": "Друг",
      "pos": "Danh từ (giống đực)",
      "vn": "Người bạn thân",
      "ex": "Мой друг живёт в Москве."
    },
    {
      "id": "fc_6",
      "level": "A1",
      "ru": "Хорошо",
      "ipa": "[харашо́]",
      "stress": "Хорошо́",
      "pos": "Phó từ",
      "vn": "Tốt, giỏi, được",
      "ex": "Он хорошо говорит по-русски."
    },
    {
      "id": "fc_7",
      "level": "A2",
      "ru": "Время",
      "ipa": "[вр'эм'а]",
      "stress": "Вре́мя",
      "pos": "Danh từ (giống trung)",
      "vn": "Thời gian",
      "ex": "У меня совсем нет времени."
    },
    {
      "id": "fc_8",
      "level": "A2",
      "ru": "Помогать",
      "ipa": "[памагат']",
      "stress": "Помога́ть",
      "pos": "Động từ (НСВ)",
      "vn": "Giúp đỡ ai (+ Cách 3)",
      "ex": "Я всегда помогаю друзьям."
    },
    {
      "id": "fc_9",
      "level": "A2",
      "ru": "Решить",
      "ipa": "[ришэн']",
      "stress": "Реши́ть",
      "pos": "Động từ (СВ)",
      "vn": "Giải quyết xong, quyết định",
      "ex": "Мы уже решили эту задачу."
    },
    {
      "id": "fc_10",
      "level": "A2",
      "ru": "Машина",
      "ipa": "[машы́на]",
      "stress": "Маши́на",
      "pos": "Danh từ (giống cái)",
      "vn": "Ô tô, xe hơi, máy móc",
      "ex": "Отец купил новую машину."
    },
    {
      "id": "fc_11",
      "level": "B1",
      "ru": "Приехать",
      "ipa": "[прийэ́хат']",
      "stress": "Прие́хать",
      "pos": "Động từ chuyển động (СВ)",
      "vn": "Đến nơi bằng xe/phương tiện",
      "ex": "Завтра к нам приедут гости."
    },
    {
      "id": "fc_12",
      "level": "B1",
      "ru": "Развитие",
      "ipa": "[развит'ийэ]",
      "stress": "Разви́тие",
      "pos": "Danh từ (giống trung)",
      "vn": "Sự phát triển",
      "ex": "Развитие современной науки."
    },
    {
      "id": "fc_13",
      "level": "B1",
      "ru": "Успех",
      "ipa": "[усп'эх]",
      "stress": "Успе́х",
      "pos": "Danh từ (giống đực)",
      "vn": "Sự thành công",
      "ex": "Желаю вам больших успехов!"
    },
    {
      "id": "fc_14",
      "level": "B2",
      "ru": "Следовательно",
      "ipa": "[сл'эдавател'на]",
      "stress": "Сле́довательно",
      "pos": "Từ nối học thuật",
      "vn": "Do đó, do vậy, hệ quả là",
      "ex": "Факты доказаны, следовательно, вывод верен."
    },
    {
      "id": "fc_15",
      "level": "B2",
      "ru": "Преодолеть",
      "ipa": "[приадал'эт']",
      "stress": "Преодоле́ть",
      "pos": "Động từ (СВ)",
      "vn": "Vượt qua (khó khăn, thử thách)",
      "ex": "Они преодолели все препятствия."
    }
  ],
  "grammarTables": {
    "nounDeclension": {
      "title": "Bảng Biến Cách Danh Từ Số Ít (6 Падежей)",
      "columns": [
        "Cách (Падеж)",
        "Câu hỏi",
        "Giống Đực (Мужской)",
        "Giống Cái (Женский)",
        "Giống Trung (Средний)"
      ],
      "rows": [
        [
          "Cách 1 (Именительный)",
          "Кто? Что?",
          "студент, музей, словарь",
          "книга, песня, ночь",
          "окно, море, здание"
        ],
        [
          "Cách 2 (Родительный)",
          "Кого? Чего?",
          "студента, музея, словаря",
          "книги, песни, ночи",
          "окна, моря, здания"
        ],
        [
          "Cách 3 (Дательный)",
          "Кому? Чему?",
          "студенту, музею, словарю",
          "книге, песне, ночи",
          "окну, морю, зданию"
        ],
        [
          "Cách 4 (Винительный)",
          "Кого? Что?",
          "Bất động vật=C1; Động vật=C2",
          "книгу, песню, ночь",
          "окно, море, здание"
        ],
        [
          "Cách 5 (Творительный)",
          "Кем? Чем?",
          "студентом, музеем, словарём",
          "книгой, песней, ночью",
          "окном, морем, зданием"
        ],
        [
          "Cách 6 (Предложный)",
          "О ком? О чём?",
          "о студенте, о музее, о словаре",
          "о книге, о песне, о ночи",
          "об окне, о море, о здании"
        ]
      ]
    },
    "verbPrefixes": {
      "title": "Bảng Tiếp Đầu Ngữ Động Từ Chuyển Động",
      "columns": [
        "Tiền tố",
        "Hướng chuyển động",
        "Đi bộ (СВ/НСВ)",
        "Đi xe (СВ/НСВ)",
        "Giới từ thông dụng"
      ],
      "rows": [
        [
          "ПО-",
          "Bắt đầu chuyển động",
          "пойти",
          "поехать",
          "в, на + C4"
        ],
        [
          "ПРИ-",
          "Đến nơi, cập bến",
          "прийти / приходить",
          "приехать / приезжать",
          "в, на, к"
        ],
        [
          "У-",
          "Rời đi hẳn, xa cách",
          "уйти / уходить",
          "уехать / уезжать",
          "из, с, от"
        ],
        [
          "В- (ВО-)",
          "Đi vào phía trong",
          "войти / входить",
          "въехать / въезжать",
          "в + C4"
        ],
        [
          "ВЫ-",
          "Đi ra bên ngoài",
          "выйти / выходить",
          "выехать / выезжать",
          "из, с + C2"
        ],
        [
          "ПОД-",
          "Tiến sát lại gần",
          "подойти / подходить",
          "подъехать / подъезжать",
          "к + C3"
        ],
        [
          "ОТ-",
          "Lùi ra xa một chút",
          "отойти / отходить",
          "отъехать / отъезжать",
          "от + C2"
        ],
        [
          "ДО-",
          "Đi đến được đích cuối",
          "дойти / доходить",
          "доехать / доезжать",
          "до + C2"
        ],
        [
          "ПЕРЕ-",
          "Băng ngang qua đường",
          "перейти / переходить",
          "переехать / переезжать",
          "через + C4"
        ]
      ]
    },
    verbPrefixes: {
      title: "Bảng Tiếp Đầu Ngữ Động Từ Chuyển Động",
      columns: ["Tiền tố", "Hướng chuyển động", "Đi bộ (СВ/НСВ)", "Đi xe (СВ/НСВ)", "Giới từ thông dụng"],
      rows: [
        ["ПО-", "Bắt đầu chuyển động", "пойти", "поехать", "в, на + C4"],
        ["ПРИ-", "Đến nơi, cập bến", "прийти / приходить", "приехать / приезжать", "в, на, к"],
        ["У-", "Rời đi hẳn, xa cách", "уйти / уходить", "уехать / уезжать", "из, с, от"],
        ["В- (ВО-)", "Đi vào phía trong", "войти / входить", "въехать / въезжать", "в + C4"],
        ["ВЫ-", "Đi ra bên ngoài", "выйти / выходить", "выехать / выезжать", "из, с + C2"],
        ["ПОД-", "Tiến sát lại gần", "подойти / подходить", "подъехать / подъезжать", "к + C3"],
        ["ОТ-", "Lùi ra xa một chút", "отойти / отходить", "отъехать / отъезжать", "от + C2"],
        ["ДО-", "Đi đến được đích cuối", "дойти / доходить", "доехать / доезжать", "до + C2"],
        ["ПЕРЕ-", "Băng ngang qua đường", "перейти / переходить", "переехать / переезжать", "через + C4"]
      ]
    }
  }
};
