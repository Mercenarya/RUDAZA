# -*- coding: utf-8 -*-
"""
HTTP Server for Russian Learning Web Application
Supports both Local (127.0.0.1) and Cloud Deployment (Render.com, Railway, etc.)
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

# On Cloud (e.g. Render.com), PORT is injected as an environment variable and HOST must be 0.0.0.0
PORT = int(os.environ.get("PORT", 8080))
HOST = os.environ.get("HOST", "0.0.0.0")

class RussianAppRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        directory = os.path.dirname(os.path.abspath(__file__))
        super().__init__(*args, directory=directory, **kwargs)

    def end_headers(self):
        # Enable CORS and caching control
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def run_server():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, RussianAppRequestHandler)
    print("=" * 60)
    print("🚀 SERVER TIẾNG NGA ĐÃ KHỞI CHẠY THÀNH CÔNG!")
    print(f"👉 Listening on: http://{HOST}:{PORT}")
    print(f"👉 Truy cập cục bộ: http://127.0.0.1:{PORT}")
    print("=" * 60)
    sys.stdout.flush()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nĐang tắt server...")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    run_server()
