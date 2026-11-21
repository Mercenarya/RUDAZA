@echo off
title Server Web Hoc Tieng Nga (127.0.0.1:8080)
chcp 65001 > nul
echo ========================================================
echo   KHOI CHAY SERVER WEB TIENG NGA TAI 127.0.0.1:8080
echo ========================================================
cd /d "%~dp0"
python serve.py
pause

