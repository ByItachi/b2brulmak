UPDATE_LOGO.md
# Logo / favicon güncellemesi — Rulmak B2B

Yeni görseller:
- Rulmak-Mavi.png (geniş logo, RMS + RULMAK) → logo.png
- Rulmak-Icon-Mavi.png (R/R monogram ikonu) → favicon.png

Yerleştirilen dosyalar (proje içinde):
- client/public/logo/logo.png
- client/public/logo/logo-white.png
- client/public/logo/favicon.png
- client/public/favicon.png
- client/public/logo/favicon.ico
- favicon.ico
- attached_assets/logo_1766887510744.png
- attached_assets/logo-white_1766887510744.png
- buildResources/icon.ico
- electron/app.ico

Build sonrası static çıktısı:
- dist/public/logo/logo.png
- dist/public/logo/logo-white.png
- dist/public/logo/favicon.png
- dist/public/logo/favicon.ico
- dist/public/favicon.png
- dist/public/assets/logo_1766887510744-l3XcDxyw.png
- dist/public/index.html (favicon.png referensiyle)

Canlı sunucuda karşılandığı yol (script/deploy_logo.py mantığına göre):
- /home/b2brulmak/b2brulmak/dist/public/logo/logo.png
- /home/b2brulmak/b2brulmak/dist/public/logo/logo-white.png
- /home/b2brulmak/b2brulmak/dist/public/logo/favicon.png
- /home/b2brulmak/b2brulmak/dist/public/logo/favicon.ico
- /home/b2brulmak/b2brulmak/dist/public/favicon.png
- /home/b2brulmak/b2brulmak/dist/public/index.html
- /home/b2brulmak/b2brulmak/dist/public/assets/* (js, css, logo_1766887510744-l3XcDxyw.png)

Canlı doğrulama (değişiklik sonrası):
- https://www.b2brulmak.com/favicon.png
- https://www.b2brulmak.com/ (logo /logo/logo.png ve meta og:image: favicon.png)

Not: SSH erişimi bu makineden şu an doğrulanamadı. Dosyaları sunucuya taşımak için yetkili birinin sunucuFilePath veya çalışan bir SFTP/SSH yöntemi gerekebilir.
