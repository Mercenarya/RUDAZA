# -*- coding: utf-8 -*-
"""
HTTP Server for Russian Learning Web Application
Bound explicitly to 127.0.0.1:8080
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "127.0.0.1"
PORT = 8080

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
    print(f"🚀 SERVER TIẾNG NGA ĐÃ KHỞI CHẠY THÀNH CÔNG TẠI:")
    print(f"👉 http://{HOST}:{PORT}")
    print(f"👉 http://localhost:{PORT}")
    print("=" * 60)
    print("Nhấn Ctrl + C để dừng server khi cần.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nĐang tắt server...")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    run_server()

