"use strict";
//C:\nextjs\nextsitem\backend\index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const promise_1 = __importDefault(require("mysql2/promise"));
// .env dosyasını yükle
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Middleware
app.use(express_1.default.json()); // JSON isteklerini parse etmek için
app.use((0, cors_1.default)()); // CORS desteği (Next.js frontend ile iletişim için)
// MySQL bağlantı ayarları
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'sifren',
    database: process.env.DB_NAME || 'veritabanin_adi',
};
// Veritabanı bağlantı fonksiyonu
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield promise_1.default.createConnection(dbConfig);
            console.log('MySQL veritabanına başarıyla bağlanıldı!');
            return connection;
        }
        catch (error) {
            console.error('Bağlantı hatası:', error);
            return null; // Hata durumunda null döndür
        }
    });
}
// Test endpoint’i
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield connectToDatabase();
    if (connection) {
        res.send('Veritabanına bağlandı!');
        yield connection.end(); // Bağlantıyı kapat
    }
    else {
        res.status(500).send('Veritabanı bağlantısı başarısız.');
    }
}));
// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Backend ${port} portunda çalışıyor.`);
});
//# sourceMappingURL=index.js.map