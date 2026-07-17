@echo off
title Portfolio Local Server
echo ===================================================
echo Starting the Local Portfolio Server...
echo ===================================================
echo.
echo The portfolio will automatically open in your web browser.
echo Keep this window open while you are viewing the portfolio.
echo Close this window to stop the server.
echo.
start http://localhost:8000/
python -m http.server 8000
