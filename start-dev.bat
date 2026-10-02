@echo off
title AmbuArsa - Wisata Kolam Pemancingan Preview
echo ========================================================
echo   AmbuArsa - Wisata Kolam Pemancingan Preview Launcher
echo ========================================================
echo.

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js terdeteksi.
    if not exist "node_modules\" (
        echo [INFO] Menginstal dependensi pertama kali...
        call npm.cmd install
    )
    echo [INFO] Menjalankan Vite Dev Server...
    start http://localhost:3000
    call npm.cmd run dev
) else (
    echo [INFO] Node.js tidak ditemukan di PATH.
    echo [INFO] Membuka versi Standalone Preview langsung di browser...
    start "" "preview.html"
)
pause
